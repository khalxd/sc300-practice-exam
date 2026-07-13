# SC-300 Microsoft-Style Practice Exam v3

A mobile-friendly GitHub Pages exam simulator with **52 original questions**.

## Improvements in v3

- Harder Microsoft-style business scenarios
- Case-study blocks
- BEST, MOST, minimum-effort, and least-privilege wording
- Stronger distractors between similar Microsoft Entra features
- Exam and practice modes
- Domain-focused quizzes
- Autosave and resume
- Dark/light mode
- Detailed domain results and weak-topic recommendations

## Replace your current GitHub project

Upload these files to the root of the repository and replace existing files:

- `index.html`
- `styles.css`
- `app.js`
- `questions.js`
- `README.md`

GitHub Pages will redeploy automatically after you commit the files.

Site URL:

`https://khalxd.github.io/sc300-practice-exam/`

## Adding more questions later

Open `questions.js`. Each question uses this structure:

```javascript
{
  "domain": "Plan and implement identity governance",
  "type": "single",
  "case": "Optional case-study background",
  "q": "Question text",
  "o": ["Option A", "Option B", "Option C", "Option D"],
  "a": [1],
  "e": "Explanation",
  "r": "Topic to review"
}
```

For a select-two question, use `"type": "multi"` and provide two indexes, such as `"a": [0, 2]`.
