# SC-300 Scenario Practice Exam

A GitHub Pages-ready interactive practice exam for the **Microsoft SC-300: Identity and Access Administrator** certification.

This project focuses on the part of the exam that is often harder than memorizing definitions: reading Microsoft-style scenarios, identifying the actual requirement, and ignoring irrelevant details such as extra users, groups, departments, roles, and licenses.

## Live Features

- Practice mode with immediate explanations
- Exam mode with results shown at the end
- 10, 20, 30, or all-question sessions
- Optional question shuffling
- “Ignore the fluff” reading hints
- Single-answer and choose-two questions
- User1, User2, Group1, and license table scenarios
- Dynamic group membership rules
- Group-based licensing
- App registrations and enterprise applications
- Delegated and application permissions
- Access packages, access reviews, and lifecycle workflows
- Privileged Identity Management
- Administrative Units and least privilege
- Conditional Access and session controls
- Identity Protection
- Global Secure Access
- Confidence tracking
- Missed-question retry mode
- Detailed answer review
- Mobile-friendly responsive layout
- No frameworks, packages, APIs, or build tools required

## Project Structure

```text
sc300-practice-exam/
├── index.html
└── README.md
```

The entire application is contained in `index.html`, so it can be hosted directly with GitHub Pages.

## Run Locally

### Option 1: Open the file directly

Download the repository and open `index.html` in a browser.

### Option 2: Use a local web server

With Python installed:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy with GitHub Pages

1. Upload `index.html` and `README.md` to the root of your repository.
2. Open the repository on GitHub.
3. Go to **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/root`.
7. Save the settings.
8. GitHub will display the live site URL after deployment finishes.

## Updating the Question Bank

Questions are stored inside the `questions` array near the bottom of `index.html`.

Each question follows this structure:

```javascript
{
  category: "Conditional Access",
  type: "single",
  prompt: `
    <p>Your scenario goes here.</p>
    <p>What should you configure?</p>
  `,
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  answers: [1],
  hint: "What should the learner focus on?",
  clue: "What wording determines the answer?",
  fluff: "What information should be ignored?",
  explanation: "Why is the answer correct?"
}
```

For a choose-two question:

```javascript
type: "multiple",
answers: [0, 2]
```

The answer indexes start at `0`:

```text
0 = A
1 = B
2 = C
3 = D
```

## Question-Writing Guidelines

Good SC-300 practice questions should test both technical knowledge and scenario reading.

Include:

- One clear business requirement
- Realistic Microsoft Entra terminology
- Plausible distractors
- “Least privilege” or “least administrative effort” where appropriate
- Extra table columns that are irrelevant but fair
- Explanations that identify the controlling clue
- A clear reason each wrong answer does not fully satisfy the scenario

Avoid:

- Ambiguous wording
- Multiple correct answers when the question says “Choose one”
- Unsupported product behavior
- Trick questions that rely on missing information
- Answers that differ only through opinion rather than Microsoft functionality

## Suggested Repository Description

> Interactive SC-300 practice exam with Microsoft-style identity, access, governance, Conditional Access, PIM, dynamic group, and application scenarios.

## Suggested GitHub Topics

```text
sc-300
microsoft-entra
azure
identity-access-management
iam
cybersecurity
microsoft-certification
conditional-access
pim
identity-governance
javascript
github-pages
```

## Disclaimer

This is an unofficial study project and is not affiliated with or endorsed by Microsoft.

The questions are original practice content and are not copied from the live certification exam.

## License

You may use this project for personal learning and portfolio purposes. Add a formal open-source license such as MIT if you plan to invite public contributions.
