(() => {
const Q = window.SC300_QUESTIONS, META = window.SC300_META, CASES = window.SC300_CASE_STUDIES;
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const store = {
  get:k=>{try{return JSON.parse(localStorage.getItem(k))}catch{return null}},
  set:(k,v)=>localStorage.setItem(k,JSON.stringify(v)),
  del:k=>localStorage.removeItem(k)
};
let state = null, timerId = null;
const views = {home:$("#homeView"),exam:$("#examView"),results:$("#resultsView")};
function showView(name){Object.values(views).forEach(v=>v.classList.remove("active"));views[name].classList.add("active");scrollTo(0,0)}
function shuffle(a){let x=[...a];for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function init(){
  $("#questionCount").textContent=Q.length;
  const history=store.get("sc300_history")||[];
  $("#bestScore").textContent=history.length?Math.max(...history.map(x=>x.score))+"%":"—";
  META.domains.forEach(d=>$("#domainSelect").insertAdjacentHTML("beforeend",`<option value="${esc(d.name)}">${esc(d.name)} (${d.weight})</option>`));
  renderHomeDomains(history);
  updateReadiness(history);
  if(store.get("sc300_active")) $("#resumeBox").classList.remove("hidden");
  bind();
  applyTheme(store.get("sc300_theme")||"dark");
}
function renderHomeDomains(history){
  const agg={}; META.domains.forEach(d=>agg[d.name]={correct:0,total:0});
  history.forEach(h=>Object.entries(h.domains||{}).forEach(([k,v])=>{if(agg[k]){agg[k].correct+=v.correct;agg[k].total+=v.total}}));
  $("#domainCards").innerHTML=META.domains.map(d=>{const a=agg[d.name],pct=a.total?Math.round(a.correct/a.total*100):0;return `<article class="domain-card"><div class="domain-line"><h3>${esc(d.name)}</h3><strong>${a.total?pct+"%":"New"}</strong></div><p>${d.weight} of the exam blueprint</p><div class="mini-track"><i style="width:${pct}%"></i></div></article>`}).join("");
}
function updateReadiness(history){
  if(!history.length)return;
  const recent=history.slice(-3),score=Math.round(recent.reduce((a,b)=>a+b.score,0)/recent.length);
  $("#readinessScore").textContent=score+"%";$("#readinessRing").style.setProperty("--p",score);
  $("#readinessText").textContent=score>=85?"Strong exam readiness. Keep sharpening weak domains.":score>=70?"Passing-range foundation. Review weak topics and retest.":"Build consistency with guided practice and explanations.";
}
function bind(){
  $("#quickStartBtn").onclick=()=>start({mode:"exam",count:20,domain:"all",difficulty:"all",shuffle:true});
  $("#practiceStartBtn").onclick=()=>start({mode:"practice",count:10,domain:"all",difficulty:"all",shuffle:true});
  $("#customStartBtn").onclick=()=>start({
    mode:$("#modeSelect").value,count:$("#countSelect").value,domain:$("#domainSelect").value,
    difficulty:$("#difficultySelect").value,shuffle:$("#shuffleToggle").checked
  });
  $("#resumeBtn").onclick=resume; $("#discardBtn").onclick=()=>{store.del("sc300_active");$("#resumeBox").classList.add("hidden")};
  $("#themeBtn").onclick=()=>applyTheme(document.documentElement.dataset.theme==="light"?"dark":"light");
  $("#resetBtn").onclick=()=>{if(confirm("Delete saved progress and score history?")){["sc300_active","sc300_history","sc300_missed"].forEach(store.del);location.reload()}};
  $("#prevBtn").onclick=()=>go(-1);$("#nextBtn").onclick=()=>go(1);$("#checkBtn").onclick=checkPractice;
  $("#flagBtn").onclick=toggleFlag;$("#submitBtn").onclick=()=>confirm("Submit your exam now?")&&finish();
  $("#exitBtn").onclick=()=>{save();clearInterval(timerId);showView("home");$("#resumeBox").classList.remove("hidden")};
  $("#newExamBtn").onclick=()=>showView("home");$("#reviewMissedBtn").onclick=()=>start({mode:"practice",count:"incorrect",domain:"all",difficulty:"all",shuffle:false});
  $("#exportBtn").onclick=exportResult;$("#reviewFilter").onchange=renderReview;
  document.addEventListener("keydown",keyboard);
}
function buildSet(cfg){
  if(cfg.count==="case"){
    let selected=[]; CASES.forEach((c,ci)=>c.question_ids.forEach(id=>{const q=Q.find(x=>x.id===id);if(q)selected.push({...q,caseIndex:ci})}));return selected;
  }
  let pool=Q.filter(q=>(cfg.domain==="all"||q.domain===cfg.domain)&&(cfg.difficulty==="all"||q.difficulty===cfg.difficulty));
  if(cfg.count==="incorrect"){const ids=store.get("sc300_missed")||[];pool=ids.map(id=>Q.find(q=>q.id===id)).filter(Boolean)}
  if(cfg.shuffle)pool=shuffle(pool);
  const n=cfg.count==="all"||cfg.count==="incorrect"?pool.length:Number(cfg.count);
  if(cfg.domain==="all"&&cfg.difficulty==="all"&&!["all","incorrect"].includes(String(cfg.count))){
    // Weighted mix approximating blueprint while preserving variety.
    const weights=[.225,.275,.225,.225],domains=META.domains.map(d=>d.name),result=[];
    domains.forEach((d,i)=>{let take=Math.round(n*weights[i]);let p=Q.filter(q=>q.domain===d);if(cfg.shuffle)p=shuffle(p);result.push(...p.slice(0,take))});
    let remaining=(cfg.shuffle?shuffle(Q):Q).filter(q=>!result.some(r=>r.id===q.id));
    while(result.length<n&&remaining.length)result.push(remaining.shift());
    pool=cfg.shuffle?shuffle(result.slice(0,n)):result.slice(0,n);
  } else pool=pool.slice(0,n);
  return pool.map(q=>{
    if(!cfg.shuffle)return {...q,displayOptions:q.options.map((t,i)=>({t,orig:i}))};
    return {...q,displayOptions:shuffle(q.options.map((t,i)=>({t,orig:i})))};
  });
}
function start(cfg){
  const set=buildSet(cfg);
  if(!set.length){alert("No saved missed questions are available for this filter.");return}
  set.forEach(q=>{if(!q.displayOptions)q.displayOptions=cfg.shuffle?shuffle(q.options.map((t,i)=>({t,orig:i}))):q.options.map((t,i)=>({t,orig:i}))});
  const minutes=cfg.mode==="exam"?Math.max(20,Math.round(set.length*1.8)):0;
  state={cfg,questions:set,index:0,answers:{},flags:[],confidence:{},checked:{},started:Date.now(),seconds:minutes*60,totalSeconds:minutes*60};
  save();showView("exam");renderExam();startTimer();
}
function resume(){state=store.get("sc300_active");if(!state)return;showView("exam");renderExam();startTimer()}
function save(){if(state)store.set("sc300_active",state)}
function startTimer(){clearInterval(timerId);if(!state||state.cfg.mode!=="exam"){$("#timer").textContent="Practice";$("#timerBar").style.width="100%";return}tick();timerId=setInterval(()=>{state.seconds--;tick();if(state.seconds<=0){clearInterval(timerId);finish()}save()},1000)}
function tick(){const m=Math.max(0,Math.floor(state.seconds/60)),s=Math.max(0,state.seconds%60);$("#timer").textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;$("#timerBar").style.width=(state.seconds/state.totalSeconds*100)+"%"}
function renderExam(){
  const q=state.questions[state.index],ans=state.answers[q.id]||[];
  $("#questionNumber").textContent=state.index+1;$("#questionTotal").textContent=state.questions.length;
  $("#questionDomain").textContent=q.domain;$("#difficultyTag").textContent=q.difficulty;$("#scenarioText").textContent=q.scenario;$("#questionText").textContent=q.question;
  $("#selectHint").textContent=q.type==="multiple"?"Choose TWO answers.":"Choose the BEST answer.";
  $("#flagBtn").classList.toggle("active",state.flags.includes(q.id));
  if(q.caseIndex!==undefined){const c=CASES[q.caseIndex];$("#caseBrief").classList.remove("hidden");$("#caseBrief").innerHTML=`<h3>${esc(c.title)}</h3><p>${esc(c.brief)}</p><ul>${c.requirements.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`}else $("#caseBrief").classList.add("hidden");
  const checked=!!state.checked[q.id];
  $("#options").innerHTML=q.displayOptions.map((o,i)=>{
    let cls=ans.includes(o.orig)?" selected":"";
    if(checked){if(q.answer.includes(o.orig))cls+=" correct";else if(ans.includes(o.orig))cls+=" wrong"}
    return `<button class="option${cls}" data-orig="${o.orig}" ${checked?"disabled":""}><span class="letter">${String.fromCharCode(65+i)}</span><span>${esc(o.t)}</span></button>`
  }).join("");
  $$("#options .option").forEach(b=>b.onclick=()=>selectAnswer(q,Number(b.dataset.orig)));
  const cb=$("#confidenceBox");cb.classList.toggle("hidden",state.cfg.mode!=="confidence");
  $$("#confidenceBox button").forEach(b=>b.classList.toggle("active",Number(b.dataset.confidence)==state.confidence[q.id]));
  $$("#confidenceBox button").forEach(b=>b.onclick=()=>{state.confidence[q.id]=Number(b.dataset.confidence);save();renderExam()});
  $("#feedback").classList.add("hidden");$("#feedback").innerHTML="";
  if(checked)showFeedback(q);
  $("#checkBtn").classList.toggle("hidden",state.cfg.mode==="exam"||checked);
  $("#nextBtn").textContent=state.index===state.questions.length-1?"Finish →":"Next →";
  $("#prevBtn").disabled=state.index===0;
  renderNav();updateProgress();save();
}
function selectAnswer(q,orig){
  if(state.checked[q.id])return;
  let a=state.answers[q.id]||[];
  if(q.type==="multiple"){a=a.includes(orig)?a.filter(x=>x!==orig):a.length<q.answer.length?[...a,orig]:[...a.slice(1),orig]} else a=[orig];
  state.answers[q.id]=a;renderExam();
}
function checkPractice(){
  const q=state.questions[state.index],a=state.answers[q.id]||[];
  if(a.length!==q.answer.length){alert(`Select ${q.answer.length} answer${q.answer.length>1?"s":""}.`);return}
  state.checked[q.id]=true;renderExam()
}
function showFeedback(q){
  const ok=isCorrect(q,state.answers[q.id]||[]),f=$("#feedback");f.className="feedback "+(ok?"good":"bad");
  f.innerHTML=`<h3>${ok?"✓ Correct":"✕ Not quite"}</h3><p>${esc(q.explanation)}</p>`;f.classList.remove("hidden")
}
function go(dir){
  if(dir===1&&state.index===state.questions.length-1){finish();return}
  state.index=Math.max(0,Math.min(state.questions.length-1,state.index+dir));renderExam()
}
function toggleFlag(){const id=state.questions[state.index].id;state.flags=state.flags.includes(id)?state.flags.filter(x=>x!==id):[...state.flags,id];renderExam()}
function renderNav(){
  $("#navigator").innerHTML=state.questions.map((q,i)=>`<button class="nav-dot ${i===state.index?"current":""} ${(state.answers[q.id]||[]).length?"answered":""} ${state.flags.includes(q.id)?"flagged":""}" data-i="${i}">${i+1}</button>`).join("");
  $$("#navigator button").forEach(b=>b.onclick=()=>{state.index=Number(b.dataset.i);renderExam()});
}
function updateProgress(){const n=state.questions.filter(q=>(state.answers[q.id]||[]).length).length,total=state.questions.length;$("#answeredText").textContent=`${n} / ${total}`;$("#progressBar").style.width=(n/total*100)+"%"}
function isCorrect(q,a){return a.length===q.answer.length&&[...a].sort().every((x,i)=>x==[...q.answer].sort()[i])}
function finish(){
  clearInterval(timerId);
  const rows=state.questions.map(q=>({q,answer:state.answers[q.id]||[],correct:isCorrect(q,state.answers[q.id]||[]),flagged:state.flags.includes(q.id),confidence:state.confidence[q.id]||0}));
  const correct=rows.filter(x=>x.correct).length,score=Math.round(correct/rows.length*100);
  const domains={};rows.forEach(r=>{domains[r.q.domain]||={correct:0,total:0};domains[r.q.domain].total++;if(r.correct)domains[r.q.domain].correct++});
  const result={date:new Date().toISOString(),score,correct,total:rows.length,domains,rows,duration:Math.round((Date.now()-state.started)/1000),mode:state.cfg.mode};
  const hist=store.get("sc300_history")||[];hist.push({date:result.date,score,domains});store.set("sc300_history",hist.slice(-20));
  const missed=new Set(store.get("sc300_missed")||[]);rows.forEach(r=>r.correct?missed.delete(r.q.id):missed.add(r.q.id));store.set("sc300_missed",[...missed]);
  store.set("sc300_last",result);store.del("sc300_active");state=null;renderResults(result);showView("results")
}
function renderResults(r){
  $("#finalScore").textContent=r.score+"%";$(".score-orbit").style.setProperty("--p",r.score);
  $("#scoreLabel").textContent=r.score>=85?"Exam ready":r.score>=70?"Passing range":"Keep building";
  $("#resultHeading").textContent=r.score>=85?"Strong performance":r.score>=70?"Solid foundation":"Your next improvement plan";
  $("#resultSummary").textContent=r.score>=85?"You handled the mixed scenarios well. Review misses, then repeat a full exam for consistency.":r.score>=70?"You are in a useful range. Focus on the two weakest domains before your next full exam.":"Use guided practice and explanations to strengthen the foundation before another timed exam.";
  const mins=Math.floor(r.duration/60),secs=r.duration%60;
  $("#resultStats").innerHTML=[["Correct",`${r.correct}/${r.total}`],["Accuracy",r.score+"%"],["Time",`${mins}m ${secs}s`],["Flagged",r.rows.filter(x=>x.flagged).length]].map(x=>`<article><strong>${x[1]}</strong><span>${x[0]}</span></article>`).join("");
  $("#resultDomains").innerHTML=META.domains.map(d=>{const x=r.domains[d.name]||{correct:0,total:0},p=x.total?Math.round(x.correct/x.total*100):0;return `<div class="result-domain"><div class="domain-line"><div><strong>${esc(d.name)}</strong><br><small>${x.correct}/${x.total} correct • Blueprint ${d.weight}</small></div><strong>${p}%</strong></div><div class="domain-track"><i style="width:${p}%"></i></div></div>`}).join("");
  window.currentResult=r;renderReview()
}
function renderReview(){
  const r=window.currentResult||store.get("sc300_last");if(!r)return;
  const filter=$("#reviewFilter").value;let rows=r.rows;
  if(filter==="wrong")rows=rows.filter(x=>!x.correct);if(filter==="flagged")rows=rows.filter(x=>x.flagged);
  $("#reviewList").innerHTML=rows.map((r,i)=>{
    const q=r.q;return `<article class="review-item"><div class="review-head"><strong>${q.id} • ${esc(q.topic)} — ${esc(q.question)}</strong><span class="${r.correct?"status-good":"status-bad"}">${r.correct?"Correct":"Incorrect"} ${r.flagged?" • ⚑":""}</span></div><div class="review-body"><p><strong>Scenario:</strong> ${esc(q.scenario)}</p><div class="review-options">${q.options.map((o,oi)=>`<div class="review-option ${q.answer.includes(oi)?"correct":""} ${r.answer.includes(oi)&&!q.answer.includes(oi)?"chosen-wrong":""}">${String.fromCharCode(65+oi)}. ${esc(o)} ${q.answer.includes(oi)?"✓":r.answer.includes(oi)?"— your answer":""}</div>`).join("")}</div><p><strong>Why:</strong> ${esc(q.explanation)}</p><div class="why-list">${q.whyWrong.map((w,wi)=>`<div><strong>${String.fromCharCode(65+wi)}:</strong> ${esc(w)}</div>`).join("")}</div></div></article>`
  }).join("")||"<p>No questions match this filter.</p>";
  $$(".review-head").forEach(h=>h.onclick=()=>h.parentElement.classList.toggle("open"))
}
function exportResult(){
  const r=window.currentResult||store.get("sc300_last");if(!r)return;
  const clean={date:r.date,score:r.score,correct:r.correct,total:r.total,domainResults:r.domains,missed:r.rows.filter(x=>!x.correct).map(x=>({id:x.q.id,topic:x.q.topic,question:x.q.question}))};
  const blob=new Blob([JSON.stringify(clean,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`sc300-result-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href)
}
function keyboard(e){
  if(!views.exam.classList.contains("active")||!state)return;
  const q=state.questions[state.index];
  if(["1","2","3","4","5"].includes(e.key)){const i=Number(e.key)-1;if(q.displayOptions[i])selectAnswer(q,q.displayOptions[i].orig)}
  if(e.key.toLowerCase()==="f")toggleFlag();if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1)
}
function applyTheme(t){document.documentElement.dataset.theme=t;store.set("sc300_theme",t);$("#themeBtn").textContent=t==="light"?"☾":"☀︎"}
init();
})();