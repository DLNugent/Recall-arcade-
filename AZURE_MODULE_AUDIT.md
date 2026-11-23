# Recall Arcade v4.1 — Azure apps and agents question audit

Source learning path: https://learn.microsoft.com/en-gb/training/paths/get-started-ai-apps-agents/

## Scope

Eight new Microsoft Learn modules, 30 questions each (10 typed recall, 10 clickable match, 10 applied scenarios), for **240 new questions**. Existing content: 7 modules and 285 questions, retained unchanged. Total: **15 modules / 525 questions**.

| Added module | Questions |
|---|---:|
| Get started with AI in Azure | 30 |
| Get started with generative AI and agents in Azure | 30 |
| Get started with text analysis in Azure | 30 |
| Get started with speech in Azure | 30 |
| Get started with computer vision in Azure | 30 |
| Get started with AI-powered information extraction in Azure | 30 |
| Get started with Microsoft Foundry IQ | 30 |
| Get started with voice agents in Microsoft Foundry | 30 |

### Source alignment

Questions are linked individually to teaching units (24 different unit URLs) and test technical definitions, implementation distinctions, and realistic application choices. Exercises and knowledge checks were used to understand scope, not copied verbatim. The eighth voice-agents module was added after confirming Microsoft's current longer path listing.

### Answer audit and functionality

- All 240 new questions have unique IDs, topic assignments, correct option, explanation and lesson URL.
- Clickable questions each have four distinct options containing the intended answer exactly once. Answers are shuffled and approximately balanced across A-D at runtime.
- Typed questions use the pre-existing conservative grammar, spelling, punctuation, plurality and alias matching. New questions include additional accepted aliases where justified by the prompt.
- Test on all 525 questions: 537 approved aliases accepted, 525 explicitly wrong recall options rejected, no duplicate IDs, missing source URLs, or broken question objects.
- Repaired a separate existing bug where **Repeat missed** rounds lacked shuffled option mappings.
- Original progress key **recall-arcade-v1** and existing question IDs are unchanged.

### Boundaries

The automated structural and answer-matcher tests passed, and a mocked-DOM smoke test rendered the home page and module-selection form. These checks do not constitute a full iPhone/Safari interaction test or a guarantee that every possible learner paraphrase is recognised. Some plausible but unexpected synonyms may still require explicit approved aliases.

### Study note

This is independent question content based on Microsoft Learn. Microsoft technologies and model availability can change; use the linked teaching units as the authoritative course material.