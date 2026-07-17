# SC-300 Exam Lab v5

A portfolio-ready, browser-based learning platform for **Microsoft Exam SC-300: Microsoft Identity and Access Administrator**.

## What is included

- **80 original scenario questions** mapped to the four current SC-300 skill domains
- Timed exam, guided practice, confidence-rating, and **adaptive mastery** modes
- Domain drills, difficulty filters, missed-question review, and three multi-question case studies
- **IAM Administrator interview mode** with a local concept rubric and model answers
- Detailed explanation of the correct answer and every distractor
- Autosave/resume, timer, flags, keyboard shortcuts, score history, readiness analytics, and JSON export
- Responsive dark/light interface built entirely with vanilla HTML, CSS, and JavaScript

## Deploy to GitHub Pages

Replace the files in the root of the existing repository with:

- `index.html`
- `styles.css`
- `app.js`
- `questions.js`
- `interview.js`
- `README.md`

Commit and push. GitHub Pages will redeploy from the configured branch.

## Run locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Interview talking point

> I built a responsive SC-300 learning platform in vanilla JavaScript and mapped original IAM scenarios to Microsoft’s published exam blueprint. I added timed simulations, adaptive weak-domain selection, case studies, localStorage persistence, detailed distractor analysis, and an interview-response rubric. The project helped me move from memorizing Entra features to applying least privilege, Zero Trust, identity governance, Conditional Access, and workload-identity decisions.

## Integrity notice

All questions are original educational content. No exam dumps or copied certification questions are included. This project is not affiliated with or endorsed by Microsoft.
