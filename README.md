# Recall Arcade — AI Fundamentals (v1.0)

A standalone, browser-based Sporcle-inspired study game. This is independent practice material based on Microsoft Learn's *Introduction to AI concepts* module. It is not affiliated with Microsoft or Sporcle.

## Play

1. Extract the ZIP into a folder.
2. Double-click `index.html` in Chrome, Edge, Firefox or Safari.
3. Select a topic or mode and begin. **No internet or installation is required** to play.

Progress is stored using browser `localStorage` for the local file origin. Browser privacy policies, changing browsers, or moving files may affect saved progress. To retain progress reliably across devices, a future hosted version with an optional account would be needed.

## Features
- **105 original questions** in seven topics (15 per topic).
- Three quiz modes: free-text recall, clickable matching/identification, and applied scenarios.
- Timed or untimed rounds; 10, 20, 30 or all-available question options.
- Instant answer feedback and a post-round review.
- Weak-spots filter, repeat-missed button, round history and mastery tracking.
- Responsive layout; no external libraries or fonts.

## Add another Microsoft Learn module

The content bank is kept in `data.js` as `window.QUIZ_MODULES`, separate from the app code.

Every module has an `id`, `title`, `source`, `topics` and a `questions` array. Each question needs:

```json
{"id":"unique-module-q1","topic":"Topic name","type":"recall","prompt":"Question?","answer":"Term","aliases":["Term","Alternative spelling"],"options":["Term","Wrong 1","Wrong 2","Wrong 3"],"explanation":"Why this is correct."}
```

Allowed types: `recall`, `match`, `scenario`. For `match` and `scenario`, four options are required. The current interface selects the first module; expanding navigation to multiple modules is the next incremental improvement (the `modules` data shape is already an array). Add modules as objects to the array in `data.js`, then add a module-selector page in `app.js`. Existing question IDs must remain unique and stable for scores to persist.

## Source
https://learn.microsoft.com/en-gb/training/modules/get-started-ai-fundamentals/

Questions are independently worded and should be used alongside the original learning content. Introductory review includes several broadly relevant AI concepts as preparation rather than direct restatements of the short welcome unit.
