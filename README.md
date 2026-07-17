# SC-300 Exam Simulator Pro

A professional, mobile-friendly practice platform built to prepare for **Microsoft Exam SC-300: Microsoft Identity and Access Administrator**.

## What changed in v4

- 64 original, scenario-based questions
- Current four-domain blueprint alignment
- Weighted mixed exams, domain drills, difficulty filters, and case studies
- Exam, guided practice, and confidence-rating modes
- Detailed explanations for every correct and incorrect option
- Autosave/resume, question navigator, flags, keyboard shortcuts, and timer
- Domain analytics, weak-topic review, missed-question bank, and JSON result export
- Responsive dark/light design with no frameworks or build process

## Run locally

Open `index.html` in a browser.

For the most reliable local behavior, serve the folder:

```bash
python -m http.server 8000
```

Then browse to `http://localhost:8000`.

## Deploy to GitHub Pages

1. Replace the files in the root of your existing repository with:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `questions.js`
   - `README.md`
2. Commit and push.
3. In GitHub, open **Settings → Pages**.
4. Deploy from the `main` branch and `/ (root)`.

## Interview talking points

- Designed a single-page exam simulator in vanilla HTML, CSS, and JavaScript.
- Mapped original questions to Microsoft’s published SC-300 skill domains and approximate blueprint weights.
- Implemented client-side state management with `localStorage`, including autosave, resume, score history, and a missed-question bank.
- Added learning analytics to convert practice results into domain-level recommendations.
- Built accessibility-friendly controls, responsive layouts, keyboard shortcuts, and light/dark themes.
- Used IAM scenarios to reinforce least privilege, Zero Trust, identity governance, workload identities, and troubleshooting.

## Content notice

All questions are original educational content. This project does not contain leaked or copied exam questions and is not affiliated with or endorsed by Microsoft. Microsoft product names are trademarks of their respective owners.

## Blueprint reference

Question coverage was aligned to the official Microsoft SC-300 study guide published March 27, 2026:

- Implement and manage user identities: 20–25%
- Implement authentication and access management: 25–30%
- Plan and implement workload identities: 20–25%
- Plan and automate identity governance: 20–25%
