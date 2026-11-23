window.QUIZ_MODULES.push({
  "id": "azure-voice-agents",
  "title": "Get started with voice agents in Microsoft Foundry",
  "source": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/",
  "learningPath": "azure-apps-agents",
  "topics": [
    {
      "id": "Explore and create a voice agent",
      "title": "Explore and create a voice agent",
      "count": 12
    },
    {
      "id": "Configure a voice agent for a scenario",
      "title": "Configure a voice agent for a scenario",
      "count": 12
    },
    {
      "id": "Test and improve a voice agent",
      "title": "Test and improve a voice agent",
      "count": 6
    }
  ],
  "questions": [
    {
      "id": "azure-voiceagents-recall-01",
      "type": "recall",
      "prompt": "Which Foundry service supports agents that listen and respond using speech?",
      "answer": "Foundry Agent Service",
      "aliases": [
        "Foundry Agent Service",
        "Microsoft Foundry Agent Service",
        "Agent Service"
      ],
      "options": [
        "Foundry Agent Service",
        "Azure SQL",
        "Azure Key Vault",
        "Azure Blob Storage"
      ],
      "explanation": "Foundry Agent Service supports speech-based agent interactions.",
      "topic": "Explore and create a voice agent",
      "sourceUnit": "2-explore-create-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/2-explore-create-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-recall-02",
      "type": "recall",
      "prompt": "What agent interaction mode must be chosen when creating a voice agent?",
      "answer": "Voice",
      "aliases": [
        "Voice",
        "voice mode"
      ],
      "options": [
        "Voice",
        "Text",
        "Batch",
        "Image"
      ],
      "explanation": "The initial agent configuration has an Interaction mode set to Voice.",
      "topic": "Explore and create a voice agent",
      "sourceUnit": "2-explore-create-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/2-explore-create-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-recall-03",
      "type": "recall",
      "prompt": "What capability detects when a caller has finished their spoken turn?",
      "answer": "Turn detection",
      "aliases": [
        "Turn detection",
        "turn-taking detection",
        "end of turn detection"
      ],
      "options": [
        "Turn detection",
        "Image generation",
        "Key phrase extraction",
        "OCR"
      ],
      "explanation": "Turn detection decides when a speaker has finished.",
      "topic": "Explore and create a voice agent",
      "sourceUnit": "2-explore-create-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/2-explore-create-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-recall-04",
      "type": "recall",
      "prompt": "Which three broad capabilities make up a voice agent?",
      "answer": "Listening, reasoning and speaking",
      "aliases": [
        "Listening, reasoning and speaking",
        "listen reason speak",
        "listening reasoning speaking"
      ],
      "options": [
        "Listening, reasoning and speaking",
        "Storage, compute and networking",
        "OCR, search and indexing",
        "Training, testing and deployment"
      ],
      "explanation": "A voice agent listens, reasons and speaks.",
      "topic": "Explore and create a voice agent",
      "sourceUnit": "2-explore-create-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/2-explore-create-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-recall-05",
      "type": "recall",
      "prompt": "Which setting defines how a voice agent introduces itself at session start?",
      "answer": "Greeting",
      "aliases": [
        "Greeting",
        "static greeting"
      ],
      "options": [
        "Greeting",
        "Temperature",
        "Token quota",
        "Knowledge index"
      ],
      "explanation": "A greeting can start a session with a consistent spoken opening.",
      "topic": "Configure a voice agent for a scenario",
      "sourceUnit": "3-configure-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/3-configure-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-recall-06",
      "type": "recall",
      "prompt": "Which section of voice-agent instructions states what the assistant should achieve?",
      "answer": "Goal",
      "aliases": [
        "Goal",
        "conversation goal"
      ],
      "options": [
        "Goal",
        "Tone",
        "Environment",
        "Personality"
      ],
      "explanation": "Goal defines the purpose and desired conversation flow.",
      "topic": "Configure a voice agent for a scenario",
      "sourceUnit": "3-configure-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/3-configure-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-recall-07",
      "type": "recall",
      "prompt": "Which instruction section sets boundaries for unsafe or unsupported requests?",
      "answer": "Guardrails",
      "aliases": [
        "Guardrails",
        "safety guardrails"
      ],
      "options": [
        "Guardrails",
        "Personality",
        "Greeting",
        "Playback speed"
      ],
      "explanation": "Guardrails specify safety and accuracy limits.",
      "topic": "Configure a voice agent for a scenario",
      "sourceUnit": "3-configure-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/3-configure-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-recall-08",
      "type": "recall",
      "prompt": "Which instruction section defines how concise and conversational replies should sound?",
      "answer": "Tone",
      "aliases": [
        "Tone",
        "speaking style"
      ],
      "options": [
        "Tone",
        "Goal",
        "Environment",
        "Tools"
      ],
      "explanation": "Tone guides speaking style and turn-taking.",
      "topic": "Configure a voice agent for a scenario",
      "sourceUnit": "3-configure-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/3-configure-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-recall-09",
      "type": "recall",
      "prompt": "What Basic turn-detection setting controls how much quiet time ends a turn?",
      "answer": "Silence duration",
      "aliases": [
        "Silence duration",
        "silence threshold",
        "silence timeout"
      ],
      "options": [
        "Silence duration",
        "Model name",
        "Image resolution",
        "Index capacity"
      ],
      "explanation": "Silence duration determines how long a quiet interval is treated as a pause.",
      "topic": "Test and improve a voice agent",
      "sourceUnit": "4-test-improve-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/4-test-improve-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-recall-10",
      "type": "recall",
      "prompt": "What term describes a brief acknowledgement while an agent completes an action?",
      "answer": "Interim response",
      "aliases": [
        "Interim response",
        "interim acknowledgement",
        "interim acknowledgment"
      ],
      "options": [
        "Interim response",
        "Final answer",
        "System prompt",
        "Knowledge index"
      ],
      "explanation": "Interim responses signal that work is ongoing, not finished.",
      "topic": "Test and improve a voice agent",
      "sourceUnit": "4-test-improve-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/4-test-improve-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-match-01",
      "type": "match",
      "prompt": "Which agent component receives spoken input and identifies the end of a turn?",
      "answer": "Listening",
      "aliases": [
        "Listening"
      ],
      "options": [
        "Listening",
        "Reasoning",
        "Speaking",
        "Data storage"
      ],
      "explanation": "Listening handles input audio and turn completion.",
      "topic": "Explore and create a voice agent",
      "sourceUnit": "2-explore-create-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/2-explore-create-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-match-02",
      "type": "match",
      "prompt": "Which component uses instructions and tools to decide a response?",
      "answer": "Reasoning",
      "aliases": [
        "Reasoning"
      ],
      "options": [
        "Reasoning",
        "Listening",
        "Speaking",
        "Audio encoding only"
      ],
      "explanation": "Reasoning chooses a response using the model and tools.",
      "topic": "Explore and create a voice agent",
      "sourceUnit": "2-explore-create-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/2-explore-create-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-match-03",
      "type": "match",
      "prompt": "Which agent capability delivers audible responses?",
      "answer": "Speaking",
      "aliases": [
        "Speaking"
      ],
      "options": [
        "Speaking",
        "Listening",
        "Retrieval only",
        "Indexing"
      ],
      "explanation": "Speaking uses the selected voice to produce output.",
      "topic": "Explore and create a voice agent",
      "sourceUnit": "2-explore-create-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/2-explore-create-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-match-04",
      "type": "match",
      "prompt": "Which configuration is needed for an agent to actually issue refunds?",
      "answer": "Connected tools and permissions",
      "aliases": [
        "Connected tools and permissions"
      ],
      "options": [
        "Connected tools and permissions",
        "Only longer prompts",
        "Voice choice alone",
        "A static greeting"
      ],
      "explanation": "Real actions require tools, permissions and confirmation.",
      "topic": "Explore and create a voice agent",
      "sourceUnit": "2-explore-create-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/2-explore-create-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-match-05",
      "type": "match",
      "prompt": "Which instruction section describes the agent's character and identity?",
      "answer": "Personality",
      "aliases": [
        "Personality"
      ],
      "options": [
        "Personality",
        "Tone",
        "Environment",
        "Guardrails"
      ],
      "explanation": "Personality defines the assistant's identity and character.",
      "topic": "Configure a voice agent for a scenario",
      "sourceUnit": "3-configure-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/3-configure-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-match-06",
      "type": "match",
      "prompt": "Which instruction section covers the speaking context and handling important details?",
      "answer": "Environment",
      "aliases": [
        "Environment"
      ],
      "options": [
        "Environment",
        "Goal",
        "Personality",
        "Greeting"
      ],
      "explanation": "Environment describes the setting, caller context and details needing confirmation.",
      "topic": "Configure a voice agent for a scenario",
      "sourceUnit": "3-configure-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/3-configure-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-match-07",
      "type": "match",
      "prompt": "Which setting changes the sound of the spoken output rather than the response content?",
      "answer": "Voice",
      "aliases": [
        "Voice"
      ],
      "options": [
        "Voice",
        "Instructions",
        "Knowledge source",
        "Scope"
      ],
      "explanation": "Voice selection affects how speech sounds.",
      "topic": "Configure a voice agent for a scenario",
      "sourceUnit": "3-configure-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/3-configure-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-match-08",
      "type": "match",
      "prompt": "Which setting determines whether the agent speaks automatically as a session begins?",
      "answer": "Greeting",
      "aliases": [
        "Greeting"
      ],
      "options": [
        "Greeting",
        "Model deployment region",
        "Token count",
        "Tool timeout"
      ],
      "explanation": "The greeting setting controls the initial welcome.",
      "topic": "Configure a voice agent for a scenario",
      "sourceUnit": "3-configure-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/3-configure-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-match-09",
      "type": "match",
      "prompt": "Which turn-detection option uses the meaning of spoken language to judge turn completion?",
      "answer": "Azure semantic",
      "aliases": [
        "Azure semantic"
      ],
      "options": [
        "Azure semantic",
        "Basic",
        "Manual only",
        "Image-based"
      ],
      "explanation": "Azure semantic uses content meaning for turn detection.",
      "topic": "Test and improve a voice agent",
      "sourceUnit": "4-test-improve-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/4-test-improve-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-match-10",
      "type": "match",
      "prompt": "Which diagnostic surface can show conversation and tool activity when available?",
      "answer": "Traces",
      "aliases": [
        "Traces"
      ],
      "options": [
        "Traces",
        "Model catalog billing",
        "Key Vault secrets",
        "Image playground"
      ],
      "explanation": "Traces can show transcripts, records and tool activity.",
      "topic": "Test and improve a voice agent",
      "sourceUnit": "4-test-improve-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/4-test-improve-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-scenario-01",
      "type": "scenario",
      "prompt": "A returns assistant should explain policy without changing customer records. What scope is best initially?",
      "answer": "Information-only agent",
      "aliases": [
        "Information-only agent"
      ],
      "options": [
        "Information-only agent",
        "Automatic refund agent",
        "Unrestricted database writer",
        "Payment processing bot"
      ],
      "explanation": "The lesson recommends a narrow informational first scenario.",
      "topic": "Explore and create a voice agent",
      "sourceUnit": "2-explore-create-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/2-explore-create-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-scenario-02",
      "type": "scenario",
      "prompt": "A customer asks a voice assistant for an actual refund. What must be present first?",
      "answer": "Authorised action tool and confirmation",
      "aliases": [
        "Authorised action tool and confirmation"
      ],
      "options": [
        "Authorised action tool and confirmation",
        "Only a realistic voice",
        "A static greeting",
        "More example prompts"
      ],
      "explanation": "Transactions require tools, permissions and confirmation.",
      "topic": "Explore and create a voice agent",
      "sourceUnit": "2-explore-create-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/2-explore-create-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-scenario-03",
      "type": "scenario",
      "prompt": "A developer tries to switch a text agent to Voice mode after creation. What does the lesson advise?",
      "answer": "Create a new voice agent",
      "aliases": [
        "Create a new voice agent"
      ],
      "options": [
        "Create a new voice agent",
        "Change the existing mode directly",
        "Only change the voice",
        "Increase max tokens"
      ],
      "explanation": "The lesson notes an existing text agent's interaction mode cannot be switched to Voice.",
      "topic": "Explore and create a voice agent",
      "sourceUnit": "2-explore-create-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/2-explore-create-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-scenario-04",
      "type": "scenario",
      "prompt": "A browser-based returns demo doesn't need a telephone line. Which environment is suitable?",
      "answer": "Foundry voice-agent playground",
      "aliases": [
        "Foundry voice-agent playground"
      ],
      "options": [
        "Foundry voice-agent playground",
        "Only a phone network",
        "Video model portal",
        "SQL console"
      ],
      "explanation": "The lesson demonstrates browser-based spoken conversations.",
      "topic": "Explore and create a voice agent",
      "sourceUnit": "2-explore-create-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/2-explore-create-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-scenario-05",
      "type": "scenario",
      "prompt": "An agent gives a detailed paragraph that is hard to follow by ear. What should be changed?",
      "answer": "Instructions for short spoken replies",
      "aliases": [
        "Instructions for short spoken replies"
      ],
      "options": [
        "Instructions for short spoken replies",
        "Voice colour",
        "Model identifier",
        "API quota"
      ],
      "explanation": "Response-length guidance belongs in agent instructions.",
      "topic": "Configure a voice agent for a scenario",
      "sourceUnit": "3-configure-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/3-configure-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-scenario-06",
      "type": "scenario",
      "prompt": "An agent talks about a policy it doesn't know and invents a detail. Which instruction should be strengthened?",
      "answer": "Guardrail to acknowledge uncertainty",
      "aliases": [
        "Guardrail to acknowledge uncertainty"
      ],
      "options": [
        "Guardrail to acknowledge uncertainty",
        "Greeting",
        "Voice speed only",
        "Model region"
      ],
      "explanation": "Guardrails should prevent fabricated facts.",
      "topic": "Configure a voice agent for a scenario",
      "sourceUnit": "3-configure-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/3-configure-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-scenario-07",
      "type": "scenario",
      "prompt": "An agent asks several complex follow-up questions at once. What conversation guideline fits?",
      "answer": "One question at a time",
      "aliases": [
        "One question at a time"
      ],
      "options": [
        "One question at a time",
        "Longer paragraphs",
        "Maximum speaking rate",
        "Avoid clarification"
      ],
      "explanation": "The lesson recommends one short question at a time.",
      "topic": "Configure a voice agent for a scenario",
      "sourceUnit": "3-configure-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/3-configure-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-scenario-08",
      "type": "scenario",
      "prompt": "The selected voice pronounces key policy terms badly. Which setting is the first place to investigate?",
      "answer": "Voice selection",
      "aliases": [
        "Voice selection"
      ],
      "options": [
        "Voice selection",
        "Knowledge-base scope",
        "Token rate limit",
        "Resource group"
      ],
      "explanation": "Voice choice can improve clarity and pronunciation.",
      "topic": "Configure a voice agent for a scenario",
      "sourceUnit": "3-configure-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/3-configure-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-scenario-09",
      "type": "scenario",
      "prompt": "An agent interrupts a caller during a mid-sentence pause. Which Basic setting may need increasing?",
      "answer": "Silence duration",
      "aliases": [
        "Silence duration"
      ],
      "options": [
        "Silence duration",
        "Response temperature",
        "Image dimensions",
        "Model catalog filters"
      ],
      "explanation": "A longer silence interval reduces premature turn endings.",
      "topic": "Test and improve a voice agent",
      "sourceUnit": "4-test-improve-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/4-test-improve-voice-agent",
      "coverage": "module"
    },
    {
      "id": "azure-voiceagents-scenario-10",
      "type": "scenario",
      "prompt": "An agent takes a few seconds checking a tool. Which supported mechanism can acknowledge the delay without claiming completion?",
      "answer": "Interim response",
      "aliases": [
        "Interim response"
      ],
      "options": [
        "Interim response",
        "False success message",
        "Silent infinite loop",
        "End conversation"
      ],
      "explanation": "Interim responses can indicate the agent is checking information.",
      "topic": "Test and improve a voice agent",
      "sourceUnit": "4-test-improve-voice-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-voice-agents/4-test-improve-voice-agent",
      "coverage": "module"
    }
  ]
});
