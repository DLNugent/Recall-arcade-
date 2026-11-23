window.QUIZ_MODULES.push({
  "id": "azure-text-analysis",
  "title": "Get started with text analysis in Azure",
  "source": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/",
  "learningPath": "azure-apps-agents",
  "topics": [
    {
      "id": "Understand text analysis in Foundry",
      "title": "Understand text analysis in Foundry",
      "count": 12
    },
    {
      "id": "Create a client application that analyzes text",
      "title": "Create a client application that analyzes text",
      "count": 11
    },
    {
      "id": "Use Azure Language with an agent",
      "title": "Use Azure Language with an agent",
      "count": 7
    }
  ],
  "questions": [
    {
      "id": "azure-text-recall-01",
      "type": "recall",
      "prompt": "Which analysis extracts the main concepts or terms from a passage?",
      "answer": "Key phrase extraction",
      "aliases": [
        "Key phrase extraction",
        "key phrases",
        "keyword extraction"
      ],
      "options": [
        "Key phrase extraction",
        "Speech synthesis",
        "Entity linking",
        "Language detection"
      ],
      "explanation": "Key phrase extraction identifies important topics in text.",
      "topic": "Understand text analysis in Foundry",
      "sourceUnit": "2-azure-language",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language",
      "coverage": "module"
    },
    {
      "id": "azure-text-recall-02",
      "type": "recall",
      "prompt": "Which technique finds named people, places or organisations in text?",
      "answer": "Named entity recognition",
      "aliases": [
        "Named entity recognition",
        "NER",
        "entity recognition"
      ],
      "options": [
        "Named entity recognition",
        "Sentiment analysis",
        "Text generation",
        "OCR"
      ],
      "explanation": "Named entity recognition identifies typed entities in unstructured text.",
      "topic": "Understand text analysis in Foundry",
      "sourceUnit": "2-azure-language",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language",
      "coverage": "module"
    },
    {
      "id": "azure-text-recall-03",
      "type": "recall",
      "prompt": "Which analysis determines whether text is positive, negative or neutral?",
      "answer": "Sentiment analysis",
      "aliases": [
        "Sentiment analysis",
        "sentiment"
      ],
      "options": [
        "Sentiment analysis",
        "Entity linking",
        "Document layout",
        "Audio transcription"
      ],
      "explanation": "Sentiment analysis assesses the tone of written text.",
      "topic": "Understand text analysis in Foundry",
      "sourceUnit": "2-azure-language",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language",
      "coverage": "module"
    },
    {
      "id": "azure-text-recall-04",
      "type": "recall",
      "prompt": "Which technique connects identified entities to a known external reference such as Wikipedia?",
      "answer": "Entity linking",
      "aliases": [
        "Entity linking",
        "linking entities"
      ],
      "options": [
        "Entity linking",
        "Language detection",
        "Key phrase extraction",
        "Speech translation"
      ],
      "explanation": "Entity linking connects entity mentions to reference entries.",
      "topic": "Understand text analysis in Foundry",
      "sourceUnit": "2-azure-language",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language",
      "coverage": "module"
    },
    {
      "id": "azure-text-recall-05",
      "type": "recall",
      "prompt": "Which Foundry Tool provides structured text-analysis capabilities?",
      "answer": "Azure Language",
      "aliases": [
        "Azure Language",
        "Azure Language in Foundry Tools",
        "Language"
      ],
      "options": [
        "Azure Language",
        "Azure Speech",
        "Azure Vision",
        "Azure Blob Storage"
      ],
      "explanation": "Azure Language provides purpose-built language analysis.",
      "topic": "Understand text analysis in Foundry",
      "sourceUnit": "2-azure-language",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language",
      "coverage": "module"
    },
    {
      "id": "azure-text-recall-06",
      "type": "recall",
      "prompt": "Which Python package is installed in the lesson to use Azure Language?",
      "answer": "azure-ai-textanalytics",
      "aliases": [
        "azure-ai-textanalytics",
        "azure ai textanalytics"
      ],
      "options": [
        "azure-ai-textanalytics",
        "openai",
        "azure-ai-projects",
        "azure-storage-blob"
      ],
      "explanation": "The lesson installs azure-ai-textanalytics to access text analysis methods.",
      "topic": "Create a client application that analyzes text",
      "sourceUnit": "3-language-sdk",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/3-language-sdk",
      "coverage": "module"
    },
    {
      "id": "azure-text-recall-07",
      "type": "recall",
      "prompt": "Which Python client class invokes Azure Language methods in the lesson?",
      "answer": "TextAnalyticsClient",
      "aliases": [
        "TextAnalyticsClient",
        "Text Analytics Client"
      ],
      "options": [
        "TextAnalyticsClient",
        "SpeechRecognizer",
        "AIProjectClient",
        "BlobServiceClient"
      ],
      "explanation": "TextAnalyticsClient is instantiated with an endpoint and credential.",
      "topic": "Create a client application that analyzes text",
      "sourceUnit": "3-language-sdk",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/3-language-sdk",
      "coverage": "module"
    },
    {
      "id": "azure-text-recall-08",
      "type": "recall",
      "prompt": "What method in the lesson determines a document's language?",
      "answer": "detect_language",
      "aliases": [
        "detect_language",
        "detect language"
      ],
      "options": [
        "detect_language",
        "recognize_pii_entities",
        "responses.create",
        "speak_text_async"
      ],
      "explanation": "The TextAnalyticsClient detect_language method identifies language.",
      "topic": "Create a client application that analyzes text",
      "sourceUnit": "3-language-sdk",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/3-language-sdk",
      "coverage": "module"
    },
    {
      "id": "azure-text-recall-09",
      "type": "recall",
      "prompt": "Which Python function loads values from a .env file in the lesson?",
      "answer": "load_dotenv",
      "aliases": [
        "load_dotenv",
        "load dotenv"
      ],
      "options": [
        "load_dotenv",
        "print",
        "detect_language",
        "get_openai_client"
      ],
      "explanation": "load_dotenv loads environment variables from the local configuration file.",
      "topic": "Create a client application that analyzes text",
      "sourceUnit": "3-language-sdk",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/3-language-sdk",
      "coverage": "module"
    },
    {
      "id": "azure-text-recall-10",
      "type": "recall",
      "prompt": "What open standard lets agents discover and use tools exposed by external servers?",
      "answer": "Model Context Protocol",
      "aliases": [
        "Model Context Protocol",
        "MCP"
      ],
      "options": [
        "Model Context Protocol",
        "REST only",
        "JSON schema",
        "Tokenization"
      ],
      "explanation": "MCP standardises the client-server interface for external tools.",
      "topic": "Use Azure Language with an agent",
      "sourceUnit": "4-language-mcp",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/4-language-mcp",
      "coverage": "module"
    },
    {
      "id": "azure-text-match-01",
      "type": "match",
      "prompt": "Which method is most appropriate for consistent, structured language detection results?",
      "answer": "Azure Language",
      "aliases": [
        "Azure Language"
      ],
      "options": [
        "Azure Language",
        "General free-form chat alone",
        "Speech synthesis",
        "Object detection"
      ],
      "explanation": "Azure Language provides purpose-built structured results.",
      "topic": "Understand text analysis in Foundry",
      "sourceUnit": "2-azure-language",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language",
      "coverage": "module"
    },
    {
      "id": "azure-text-match-02",
      "type": "match",
      "prompt": "Which task identifies the location name in 'We met in Dublin'?",
      "answer": "Named entity recognition",
      "aliases": [
        "Named entity recognition"
      ],
      "options": [
        "Named entity recognition",
        "Sentiment analysis",
        "Speech recognition",
        "Summarisation"
      ],
      "explanation": "Named entity recognition labels geographic names.",
      "topic": "Understand text analysis in Foundry",
      "sourceUnit": "2-azure-language",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language",
      "coverage": "module"
    },
    {
      "id": "azure-text-match-03",
      "type": "match",
      "prompt": "Which output suits a system extracting the main concepts from reviews?",
      "answer": "Key phrases",
      "aliases": [
        "Key phrases"
      ],
      "options": [
        "Key phrases",
        "Audio waveform",
        "Bounding boxes",
        "Synthetic speech"
      ],
      "explanation": "Key phrase extraction outputs salient terms or phrases.",
      "topic": "Understand text analysis in Foundry",
      "sourceUnit": "2-azure-language",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language",
      "coverage": "module"
    },
    {
      "id": "azure-text-match-04",
      "type": "match",
      "prompt": "Which technique can analyse opinions about specific aspects of a review?",
      "answer": "Opinion mining",
      "aliases": [
        "Opinion mining"
      ],
      "options": [
        "Opinion mining",
        "OCR",
        "Model deployment",
        "Speech translation"
      ],
      "explanation": "Opinion mining examines expressed evaluations about aspects.",
      "topic": "Understand text analysis in Foundry",
      "sourceUnit": "2-azure-language",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language",
      "coverage": "module"
    },
    {
      "id": "azure-text-match-05",
      "type": "match",
      "prompt": "Which API offers flexible, conversational analysis using general-purpose models?",
      "answer": "Responses API",
      "aliases": [
        "Responses API"
      ],
      "options": [
        "Responses API",
        "Speech-to-text API",
        "Azure Storage API",
        "Azure Billing API"
      ],
      "explanation": "The Responses API can carry text prompts to a deployed language model.",
      "topic": "Create a client application that analyzes text",
      "sourceUnit": "3-language-sdk",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/3-language-sdk",
      "coverage": "module"
    },
    {
      "id": "azure-text-match-06",
      "type": "match",
      "prompt": "Which Python method in Azure Language can detect personal information?",
      "answer": "recognize_pii_entities",
      "aliases": [
        "recognize_pii_entities"
      ],
      "options": [
        "recognize_pii_entities",
        "detect_language",
        "speak_text_async",
        "generate_video"
      ],
      "explanation": "recognize_pii_entities finds personally identifiable content.",
      "topic": "Create a client application that analyzes text",
      "sourceUnit": "3-language-sdk",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/3-language-sdk",
      "coverage": "module"
    },
    {
      "id": "azure-text-match-07",
      "type": "match",
      "prompt": "Which authentication wrapper is used for Azure Language keys in the Python sample?",
      "answer": "AzureKeyCredential",
      "aliases": [
        "AzureKeyCredential"
      ],
      "options": [
        "AzureKeyCredential",
        "DefaultAudioOutput",
        "PromptTemplate",
        "SpeechConfig"
      ],
      "explanation": "The SDK sample creates AzureKeyCredential for the language client.",
      "topic": "Create a client application that analyzes text",
      "sourceUnit": "3-language-sdk",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/3-language-sdk",
      "coverage": "module"
    },
    {
      "id": "azure-text-match-08",
      "type": "match",
      "prompt": "Which mechanism stores settings such as endpoints and API keys outside program logic?",
      "answer": "Environment variables",
      "aliases": [
        "Environment variables"
      ],
      "options": [
        "Environment variables",
        "User prompts",
        "Model tokens",
        "Source code comments"
      ],
      "explanation": "Environment variables keep configuration separate from application logic.",
      "topic": "Create a client application that analyzes text",
      "sourceUnit": "3-language-sdk",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/3-language-sdk",
      "coverage": "module"
    },
    {
      "id": "azure-text-match-09",
      "type": "match",
      "prompt": "In MCP, which side exposes tools for an agent to discover?",
      "answer": "MCP server",
      "aliases": [
        "MCP server"
      ],
      "options": [
        "MCP server",
        "MCP client",
        "Model catalog",
        "Resource group"
      ],
      "explanation": "The server publishes available tools and structured results.",
      "topic": "Use Azure Language with an agent",
      "sourceUnit": "4-language-mcp",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/4-language-mcp",
      "coverage": "module"
    },
    {
      "id": "azure-text-match-10",
      "type": "match",
      "prompt": "Which Foundry connection bridges an agent to Azure Language analysis tools?",
      "answer": "Azure Language MCP server",
      "aliases": [
        "Azure Language MCP server"
      ],
      "options": [
        "Azure Language MCP server",
        "Azure Vision model",
        "Azure SQL replication",
        "Foundry billing"
      ],
      "explanation": "The Azure Language MCP server exposes language functions.",
      "topic": "Use Azure Language with an agent",
      "sourceUnit": "4-language-mcp",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/4-language-mcp",
      "coverage": "module"
    },
    {
      "id": "azure-text-scenario-01",
      "type": "scenario",
      "prompt": "A helpdesk needs to route tickets based on whether they're written in Spanish or German. Which capability fits?",
      "answer": "Language detection",
      "aliases": [
        "Language detection"
      ],
      "options": [
        "Language detection",
        "Key phrase extraction",
        "Image segmentation",
        "Text-to-speech"
      ],
      "explanation": "Language detection identifies the input language.",
      "topic": "Understand text analysis in Foundry",
      "sourceUnit": "2-azure-language",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language",
      "coverage": "module"
    },
    {
      "id": "azure-text-scenario-02",
      "type": "scenario",
      "prompt": "A business wants a reliable positive/negative score for each review, with structured values. Which service is suitable?",
      "answer": "Azure Language",
      "aliases": [
        "Azure Language"
      ],
      "options": [
        "Azure Language",
        "Free-form prompting only",
        "Azure Blob Storage",
        "Azure Vision"
      ],
      "explanation": "Purpose-built Azure Language offers structured sentiment outputs.",
      "topic": "Understand text analysis in Foundry",
      "sourceUnit": "2-azure-language",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language",
      "coverage": "module"
    },
    {
      "id": "azure-text-scenario-03",
      "type": "scenario",
      "prompt": "A model returns a differently formatted answer for repeated sentiment prompts. What is the more predictable choice?",
      "answer": "Use Azure Language's structured analysis",
      "aliases": [
        "Use Azure Language's structured analysis"
      ],
      "options": [
        "Use Azure Language's structured analysis",
        "Increase temperature",
        "Ask for longer responses",
        "Use speech recognition"
      ],
      "explanation": "The module contrasts probabilistic general models with structured language tools.",
      "topic": "Understand text analysis in Foundry",
      "sourceUnit": "2-azure-language",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/2-azure-language",
      "coverage": "module"
    },
    {
      "id": "azure-text-scenario-04",
      "type": "scenario",
      "prompt": "A Python app must send prompts to a deployed general-purpose model. Which package is demonstrated?",
      "answer": "openai",
      "aliases": [
        "openai"
      ],
      "options": [
        "openai",
        "azure-cognitiveservices-speech",
        "pyaudio",
        "azure-storage-blob"
      ],
      "explanation": "The lesson uses the OpenAI Python library for a model client.",
      "topic": "Create a client application that analyzes text",
      "sourceUnit": "3-language-sdk",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/3-language-sdk",
      "coverage": "module"
    },
    {
      "id": "azure-text-scenario-05",
      "type": "scenario",
      "prompt": "A client raises an authentication error after renaming API_KEY in .env but not in code. What should be fixed?",
      "answer": "Match the environment variable names",
      "aliases": [
        "Match the environment variable names"
      ],
      "options": [
        "Match the environment variable names",
        "Increase token rate",
        "Change output format",
        "Use a new model prompt"
      ],
      "explanation": "Code and .env keys must have matching names.",
      "topic": "Create a client application that analyzes text",
      "sourceUnit": "3-language-sdk",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/3-language-sdk",
      "coverage": "module"
    },
    {
      "id": "azure-text-scenario-06",
      "type": "scenario",
      "prompt": "An analyst needs to redact personal information from text before storage. Which SDK method is relevant?",
      "answer": "recognize_pii_entities",
      "aliases": [
        "recognize_pii_entities"
      ],
      "options": [
        "recognize_pii_entities",
        "detect_language",
        "model_catalog.list",
        "speech_synthesizer"
      ],
      "explanation": "The Language SDK includes PII recognition for redaction workflows.",
      "topic": "Create a client application that analyzes text",
      "sourceUnit": "3-language-sdk",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/3-language-sdk",
      "coverage": "module"
    },
    {
      "id": "azure-text-scenario-07",
      "type": "scenario",
      "prompt": "A general model needs to call reliable text analysis tools without custom REST integrations. What should be connected?",
      "answer": "Azure Language MCP server",
      "aliases": [
        "Azure Language MCP server"
      ],
      "options": [
        "Azure Language MCP server",
        "Another user prompt only",
        "Azure DNS",
        "A second resource group"
      ],
      "explanation": "The MCP server lets the agent discover and call Azure Language tools.",
      "topic": "Use Azure Language with an agent",
      "sourceUnit": "4-language-mcp",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/4-language-mcp",
      "coverage": "module"
    },
    {
      "id": "azure-text-scenario-08",
      "type": "scenario",
      "prompt": "An MCP agent requests available functions from an integration. Which component responds with its capabilities?",
      "answer": "MCP server",
      "aliases": [
        "MCP server"
      ],
      "options": [
        "MCP server",
        "MCP client",
        "User browser",
        "Model deployment catalog"
      ],
      "explanation": "The server advertises and runs tools for the client.",
      "topic": "Use Azure Language with an agent",
      "sourceUnit": "4-language-mcp",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/4-language-mcp",
      "coverage": "module"
    },
    {
      "id": "azure-text-scenario-09",
      "type": "scenario",
      "prompt": "A team wants a conversational agent that can both reason and run deterministic language analysis. Which combination fits?",
      "answer": "Language model plus Azure Language MCP tool",
      "aliases": [
        "Language model plus Azure Language MCP tool"
      ],
      "options": [
        "Language model plus Azure Language MCP tool",
        "Language model alone without tools",
        "Storage only",
        "Speech model only"
      ],
      "explanation": "The agent can use flexible model reasoning with specialised structured analysis.",
      "topic": "Use Azure Language with an agent",
      "sourceUnit": "4-language-mcp",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/4-language-mcp",
      "coverage": "module"
    },
    {
      "id": "azure-text-scenario-10",
      "type": "scenario",
      "prompt": "A Foundry project already has Language tools available. What does the lesson say about creating a separate Azure Language resource for MCP?",
      "answer": "It isn't required",
      "aliases": [
        "It isn't required"
      ],
      "options": [
        "It isn't required",
        "It is mandatory",
        "It replaces the Foundry resource",
        "It is needed for each prompt"
      ],
      "explanation": "Foundry resources include access to Azure Language MCP capabilities.",
      "topic": "Use Azure Language with an agent",
      "sourceUnit": "4-language-mcp",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-text-analysis-azure/4-language-mcp",
      "coverage": "module"
    }
  ]
});
