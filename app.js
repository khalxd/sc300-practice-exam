
"use strict";
const STORAGE_KEY = "sc300_exam_v2";
const HISTORY_KEY = "sc300_history_v2";

const $ = id => document.getElementById(id);
const els = {
  home:$("home"), exam:$("exam"), results:$("results"), timer:$("timer"),
  mode:$("modeSelect"), count:$("countSelect"), domain:$("domainSelect"),
  resumeBox:$("resumeBox"), domainBadge:$("domainBadge"), questionNumber:$("questionNumber"),
  answeredCount:$("answeredCount"), questionText:$("questionText"), options:$("options"),
  feedback:$("feedback"), check:$("checkBtn"), prev:$("prevBtn"), next:$("nextBtn"),
  progress:$("progressBar"), nav:$("questionNav")
};

let state = null;
let timerHandle = null;

function shuffle(input){
  const a=[...input];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
  return a;
}
function same(a,b){return [...a].sort((x,y)=>x-y).join(",")===[...b].sort((x,y)=>x-y).join(",")}
function save(){if(state)localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function clearSaved(){localStorage.removeItem(STORAGE_KEY)}
function getSaved(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))}catch{return null}}

function prepareQuestion(q){
  const pairs=q.o.map((text,original)=>({text,original}));
  const mixed=shuffle(pairs);
  return {...q,o:mixed.map(x=>x.text),a:mixed.map((x,i)=>q.a.includes(x.original)?i:null).filter(x=>x!==null)};
}
function createExam(){
  let pool=window.SC300_QUESTIONS;
  if(els.domain.value!=="all") pool=pool.filter(q=>q.domain===els.domain.value);
  const requested=Math.min(Number(els.count.value),pool.length);
  const questions=shuffle(pool).slice(0,requested).map(prepareQuestion);
  state={
    version:2,mode:els.mode.value,questions,index:0,answers:{},checked:{},flags:{},
    remaining:Math.max(45*60,requested*150),startedAt:Date.now(),submitted:false
  };
  save();openExam();
}
function openExam(){
  els.home.classList.add("hidden");els.results.classList.add("hidden");els.exam.classList.remove("hidden");
  startTimer();render();
}
function startTimer(){
  clearInterval(timerHandle);updateTimer();
  timerHandle=setInterval(()=>{state.remaining--;updateTimer();save();if(state.remaining<=0)submitExam(true)},1000);
}
function updateTimer(){
  const m=Math.max(0,Math.floor(state.remaining/60)),s=Math.max(0,state.remaining%60);
  els.timer.textContent=`${m}:${String(s).padStart(2,"0")}`;
}
function saveSelection(){
  state.answers[state.index]=[...document.querySelectorAll('#options input:checked')].map(x=>Number(x.value));save();
}
function render(){
  const q=state.questions[state.index];
  els.domainBadge.textContent=q.domain+(q.type==="multi"?" • Select TWO":" • Select one");
  els.questionNumber.textContent=`Question ${state.index+1} of ${state.questions.length}`;
  els.questionText.textContent=q.q;
  els.answeredCount.textContent=`${Object.values(state.answers).filter(a=>a.length).length} answered`;
  els.options.innerHTML="";
  q.o.forEach((text,i)=>{
    const label=document.createElement("label");label.className="option";
    const input=document.createElement("input");input.type=q.type==="multi"?"checkbox":"radio";
    input.name="choice";input.value=i;input.checked=(state.answers[state.index]||[]).includes(i);
    input.disabled=Boolean(state.checked[state.index])||state.submitted;
    input.addEventListener("change",saveSelection);
    label.append(input,document.createTextNode(text));els.options.append(label);
  });
  els.feedback.className="feedback hidden";els.feedback.innerHTML="";
  if(state.checked[state.index]||state.submitted)showFeedback();
  els.check.classList.toggle("hidden",state.mode==="exam");
  els.check.disabled=Boolean(state.checked[state.index]);
  els.prev.disabled=state.index===0;els.next.disabled=state.index===state.questions.length-1;
  els.progress.style.width=`${(state.index+1)/state.questions.length*100}%`;renderNav();
}
function checkAnswer(){
  saveSelection();const q=state.questions[state.index],chosen=state.answers[state.index]||[];
  if(!chosen.length)return alert("Select an answer first.");
  if(q.type==="multi"&&chosen.length!==2)return alert("Select exactly TWO answers.");
  state.checked[state.index]=true;save();render();
}
function showFeedback(){
  const q=state.questions[state.index],chosen=state.answers[state.index]||[],ok=same(chosen,q.a);
  [...document.querySelectorAll(".option")].forEach((label,i)=>{
    if(q.a.includes(i))label.classList.add("correct");
    if(chosen.includes(i)&&!q.a.includes(i))label.classList.add("wrong");
  });
  els.feedback.className=`feedback ${ok?"good":"bad"}`;
  els.feedback.innerHTML=`<strong>${ok?"Correct":"Incorrect"}</strong><br>${q.e}<br><br><strong>Correct answer:</strong> ${q.a.map(i=>q.o[i]).join("; ")}`;
}
function move(delta){saveSelection();const n=state.index+delta;if(n>=0&&n<state.questions.length){state.index=n;save();render()}}
function toggleFlag(){state.flags[state.index]=!state.flags[state.index];save();renderNav()}
function renderNav(){
  els.nav.innerHTML="";
  state.questions.forEach((q,i)=>{
    const b=document.createElement("button");b.type="button";b.textContent=i+1;
    if((state.answers[i]||[]).length)b.classList.add("answered");
    if(state.flags[i])b.classList.add("flagged");if(i===state.index)b.classList.add("active");
    b.onclick=()=>{saveSelection();state.index=i;save();render()};els.nav.append(b);
  });
}
function submitExam(automatic=false){
  if(state.submitted)return;saveSelection();
  const unanswered=state.questions.filter((q,i)=>!(state.answers[i]||[]).length).length;
  if(!automatic&&!confirm(unanswered?`You have ${unanswered} unanswered question(s). Submit anyway?`:"Submit exam?"))return;
  state.submitted=true;clearInterval(timerHandle);save();showResults(automatic);
}
function showResults(automatic){
  els.exam.classList.add("hidden");els.home.classList.add("hidden");els.results.classList.remove("hidden");
  let right=0;const domains={},topics={};
  state.questions.forEach((q,i)=>{
    const ok=same(state.answers[i]||[],q.a);if(ok)right++;
    domains[q.domain]??={right:0,total:0};domains[q.domain].total++;if(ok)domains[q.domain].right++;
    else topics[q.r]=(topics[q.r]||0)+1;
  });
  const pct=Math.round(right/state.questions.length*100);
  const history=JSON.parse(localStorage.getItem(HISTORY_KEY)||"[]");
  history.unshift({date:new Date().toISOString(),score:pct,right,total:state.questions.length});
  localStorage.setItem(HISTORY_KEY,JSON.stringify(history.slice(0,10)));
  let html=`<h1>Exam Results</h1>${automatic?'<div class="study-tip">Time expired, so the exam was submitted automatically.</div>':""}<div class="score">${pct}%</div><h2>${pct>=80?"Strong result":"More review recommended"}</h2><p><strong>${right}</strong> of <strong>${state.questions.length}</strong> correct.</p><h3>Performance by domain</h3>`;
  Object.entries(domains).forEach(([d,s])=>{const p=Math.round(s.right/s.total*100);html+=`<div class="domain-row"><strong>${d}: ${p}% (${s.right}/${s.total})</strong><div class="meter"><span style="width:${p}%"></span></div></div>`});
  html+="<h3>Study priorities</h3>";
  const sorted=Object.entries(topics).sort((a,b)=>b[1]-a[1]);
  if(!sorted.length)html+='<div class="study-tip">Excellent work. No missed topics.</div>';
  sorted.slice(0,8).forEach(([t,c])=>html+=`<div class="study-tip"><strong>${t}</strong>: ${c} missed question${c>1?"s":""}.</div>`);
  html+="<h3>Missed-question review</h3>";
  state.questions.forEach((q,i)=>{if(!same(state.answers[i]||[],q.a)){const ua=(state.answers[i]||[]).length?state.answers[i].map(x=>q.o[x]).join("; "):"No answer";html+=`<details><summary>Question ${i+1}: ${q.q}</summary><p><strong>Your answer:</strong> ${ua}</p><p><strong>Correct answer:</strong> ${q.a.map(x=>q.o[x]).join("; ")}</p><p>${q.e}</p><p><em>Review: ${q.r}</em></p></details>`}});
  html+='<div class="button-row"><button id="newAttemptBtn" class="btn primary">New attempt</button><button id="reviewExamBtn" class="btn secondary">Review full exam</button></div>';
  els.results.innerHTML=html;clearSaved();
  $("newAttemptBtn").onclick=()=>location.reload();
  $("reviewExamBtn").onclick=()=>{state.submitted=true;state.index=0;els.results.classList.add("hidden");els.exam.classList.remove("hidden");render()};
}

function applyTheme(theme){
  document.documentElement.dataset.theme=theme;
  $("themeBtn").textContent=theme==="dark"?"Light mode":"Dark mode";
  localStorage.setItem("sc300_theme",theme);
}
$("themeBtn").onclick=()=>applyTheme(document.documentElement.dataset.theme==="dark"?"light":"dark");
applyTheme(localStorage.getItem("sc300_theme")||"dark");

$("startBtn").onclick=createExam;
$("resumeBtn").onclick=()=>{state=getSaved();openExam()};
$("discardBtn").onclick=()=>{clearSaved();els.resumeBox.classList.add("hidden")};
els.check.onclick=checkAnswer;$("flagBtn").onclick=toggleFlag;els.prev.onclick=()=>move(-1);els.next.onclick=()=>move(1);$("finishBtn").onclick=()=>submitExam(false);
if(getSaved()&&!getSaved().submitted)els.resumeBox.classList.remove("hidden");
