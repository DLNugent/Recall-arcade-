window.QUIZ_MODULES.push({
  "id": "azure-foundry-iq",
  "title": "Get started with Microsoft Foundry IQ",
  "source": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/",
  "learningPath": "azure-apps-agents",
  "topics": [
    {
      "id": "What is Foundry IQ?",
      "title": "What is Foundry IQ?",
      "count": 11
    },
    {
      "id": "Knowledge bases",
      "title": "Knowledge bases",
      "count": 11
    },
    {
      "id": "Connect an agent to Foundry IQ",
      "title": "Connect an agent to Foundry IQ",
      "count": 8
    }
  ],
  "questions": [
    {
      "id": "azure-iq-recall-01",
      "type": "recall",
      "prompt": "Which Microsoft Foundry feature supplies a reusable knowledge layer to agents?",
      "answer": "Foundry IQ",
      "aliases": [
        "Foundry IQ",
        "Microsoft Foundry IQ"
      ],
      "options": [
        "Foundry IQ",
        "Azure Speech",
        "Image playground",
        "Key Vault"
      ],
      "explanation": "Foundry IQ provides managed knowledge retrieval across enterprise sources.",
      "topic": "What is Foundry IQ?",
      "sourceUnit": "2-explore-foundry-iq",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/2-explore-foundry-iq",
      "coverage": "module"
    },
    {
      "id": "azure-iq-recall-02",
      "type": "recall",
      "prompt": "Which Azure resource underlies a Foundry IQ solution's retrieval capability?",
      "answer": "Azure AI Search",
      "aliases": [
        "Azure AI Search",
        "AI Search"
      ],
      "options": [
        "Azure AI Search",
        "Azure Speech",
        "Azure App Service",
        "Azure Key Vault"
      ],
      "explanation": "Foundry IQ uses Azure AI Search for knowledge retrieval.",
      "topic": "What is Foundry IQ?",
      "sourceUnit": "2-explore-foundry-iq",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/2-explore-foundry-iq",
      "coverage": "module"
    },
    {
      "id": "azure-iq-recall-03",
      "type": "recall",
      "prompt": "What top-level resource groups related sources and controls retrieval behaviour?",
      "answer": "Knowledge base",
      "aliases": [
        "Knowledge base",
        "knowledge base"
      ],
      "options": [
        "Knowledge base",
        "Knowledge source",
        "Model prompt",
        "Deployment quota"
      ],
      "explanation": "A knowledge base represents a related set of sources and retrieval settings.",
      "topic": "What is Foundry IQ?",
      "sourceUnit": "2-explore-foundry-iq",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/2-explore-foundry-iq",
      "coverage": "module"
    },
    {
      "id": "azure-iq-recall-04",
      "type": "recall",
      "prompt": "What connection represents indexed or remote content available for retrieval?",
      "answer": "Knowledge source",
      "aliases": [
        "Knowledge source",
        "source"
      ],
      "options": [
        "Knowledge source",
        "Model deployment",
        "System prompt",
        "Voice profile"
      ],
      "explanation": "A knowledge source points to content such as SharePoint or Blob Storage.",
      "topic": "What is Foundry IQ?",
      "sourceUnit": "2-explore-foundry-iq",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/2-explore-foundry-iq",
      "coverage": "module"
    },
    {
      "id": "azure-iq-recall-05",
      "type": "recall",
      "prompt": "What retrieval technique plans searches and combines ranked supporting results?",
      "answer": "Agentic retrieval",
      "aliases": [
        "Agentic retrieval",
        "agentic search"
      ],
      "options": [
        "Agentic retrieval",
        "Speech recognition",
        "Image generation",
        "Model fine-tuning"
      ],
      "explanation": "Agentic retrieval plans searches and returns sourced information.",
      "topic": "What is Foundry IQ?",
      "sourceUnit": "2-explore-foundry-iq",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/2-explore-foundry-iq",
      "coverage": "module"
    },
    {
      "id": "azure-iq-recall-06",
      "type": "recall",
      "prompt": "Which protocol lets an agent call a Foundry IQ knowledge base as a tool?",
      "answer": "Model Context Protocol",
      "aliases": [
        "Model Context Protocol",
        "MCP"
      ],
      "options": [
        "Model Context Protocol",
        "Simple Mail Transfer Protocol",
        "Secure Shell",
        "SQL transaction protocol"
      ],
      "explanation": "Foundry IQ exposes an MCP tool for agent integration.",
      "topic": "Connect an agent to Foundry IQ",
      "sourceUnit": "4-connect-agents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/4-connect-agents",
      "coverage": "module"
    },
    {
      "id": "azure-iq-recall-07",
      "type": "recall",
      "prompt": "What kind of information proves where retrieved claims came from?",
      "answer": "Citations",
      "aliases": [
        "Citations",
        "source citations",
        "source references"
      ],
      "options": [
        "Citations",
        "Model temperature",
        "Speech phonemes",
        "Token quota"
      ],
      "explanation": "Citation references let users inspect retrieved sources.",
      "topic": "Connect an agent to Foundry IQ",
      "sourceUnit": "4-connect-agents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/4-connect-agents",
      "coverage": "module"
    },
    {
      "id": "azure-iq-recall-08",
      "type": "recall",
      "prompt": "Which consideration asks if knowledge content reflects recent source changes?",
      "answer": "Freshness",
      "aliases": [
        "Freshness",
        "currency",
        "recency"
      ],
      "options": [
        "Freshness",
        "Latency",
        "Model size",
        "Token limit"
      ],
      "explanation": "Freshness is an important knowledge-base quality criterion.",
      "topic": "Knowledge bases",
      "sourceUnit": "3-knowledge-bases",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/3-knowledge-bases",
      "coverage": "module"
    },
    {
      "id": "azure-iq-recall-09",
      "type": "recall",
      "prompt": "What consideration checks that source content is approved and trustworthy?",
      "answer": "Authority",
      "aliases": [
        "Authority",
        "source authority"
      ],
      "options": [
        "Authority",
        "Volume",
        "Temperature",
        "Sampling"
      ],
      "explanation": "Authoritative sources provide a reliable source of truth.",
      "topic": "Knowledge bases",
      "sourceUnit": "3-knowledge-bases",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/3-knowledge-bases",
      "coverage": "module"
    },
    {
      "id": "azure-iq-recall-10",
      "type": "recall",
      "prompt": "What access principle gives connections only the permissions required for retrieval?",
      "answer": "Least privilege",
      "aliases": [
        "Least privilege",
        "principle of least privilege"
      ],
      "options": [
        "Least privilege",
        "Maximum privilege",
        "Public sharing",
        "Unrestricted access"
      ],
      "explanation": "Connections should have only the permissions necessary for their tasks.",
      "topic": "Connect an agent to Foundry IQ",
      "sourceUnit": "4-connect-agents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/4-connect-agents",
      "coverage": "module"
    },
    {
      "id": "azure-iq-match-01",
      "type": "match",
      "prompt": "Which component is the reusable retrieval interface across knowledge sources?",
      "answer": "Knowledge base",
      "aliases": [
        "Knowledge base"
      ],
      "options": [
        "Knowledge base",
        "Knowledge source",
        "Inference endpoint",
        "Agent instructions"
      ],
      "explanation": "A knowledge base unifies related sources for retrieval.",
      "topic": "What is Foundry IQ?",
      "sourceUnit": "2-explore-foundry-iq",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/2-explore-foundry-iq",
      "coverage": "module"
    },
    {
      "id": "azure-iq-match-02",
      "type": "match",
      "prompt": "Which component identifies where the underlying content can be retrieved?",
      "answer": "Knowledge source",
      "aliases": [
        "Knowledge source"
      ],
      "options": [
        "Knowledge source",
        "Knowledge base",
        "Token limit",
        "System prompt"
      ],
      "explanation": "Knowledge sources connect to individual repositories or indexes.",
      "topic": "What is Foundry IQ?",
      "sourceUnit": "2-explore-foundry-iq",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/2-explore-foundry-iq",
      "coverage": "module"
    },
    {
      "id": "azure-iq-match-03",
      "type": "match",
      "prompt": "What does Foundry IQ return to help an agent support claims?",
      "answer": "Relevant results with source references",
      "aliases": [
        "Relevant results with source references"
      ],
      "options": [
        "Relevant results with source references",
        "Only synthetic audio",
        "Only model weights",
        "Only billing metadata"
      ],
      "explanation": "Foundry IQ retrieval includes source citations.",
      "topic": "What is Foundry IQ?",
      "sourceUnit": "2-explore-foundry-iq",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/2-explore-foundry-iq",
      "coverage": "module"
    },
    {
      "id": "azure-iq-match-04",
      "type": "match",
      "prompt": "Which approach can reduce duplication across several agents needing the same enterprise documents?",
      "answer": "Shared knowledge base",
      "aliases": [
        "Shared knowledge base"
      ],
      "options": [
        "Shared knowledge base",
        "Separate RAG implementation per agent",
        "Only larger prompts",
        "Disabling permissions"
      ],
      "explanation": "Multiple agents can reuse the centrally managed knowledge layer.",
      "topic": "What is Foundry IQ?",
      "sourceUnit": "2-explore-foundry-iq",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/2-explore-foundry-iq",
      "coverage": "module"
    },
    {
      "id": "azure-iq-match-05",
      "type": "match",
      "prompt": "Which service type is explicitly listed as a knowledge source?",
      "answer": "SharePoint content",
      "aliases": [
        "SharePoint content"
      ],
      "options": [
        "SharePoint content",
        "Local microphone",
        "GPU telemetry only",
        "Voice style"
      ],
      "explanation": "SharePoint is among supported enterprise sources.",
      "topic": "Knowledge bases",
      "sourceUnit": "3-knowledge-bases",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/3-knowledge-bases",
      "coverage": "module"
    },
    {
      "id": "azure-iq-match-06",
      "type": "match",
      "prompt": "Which setting influences source selection for different kinds of requests?",
      "answer": "Knowledge-base retrieval prompt",
      "aliases": [
        "Knowledge-base retrieval prompt"
      ],
      "options": [
        "Knowledge-base retrieval prompt",
        "Image size",
        "Speech rate",
        "Token ID"
      ],
      "explanation": "A retrieval prompt can help prioritise relevant sources.",
      "topic": "Knowledge bases",
      "sourceUnit": "3-knowledge-bases",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/3-knowledge-bases",
      "coverage": "module"
    },
    {
      "id": "azure-iq-match-07",
      "type": "match",
      "prompt": "Which quality factor focuses on titles, dates and identifiers for retrieval?",
      "answer": "Metadata",
      "aliases": [
        "Metadata"
      ],
      "options": [
        "Metadata",
        "Speech synthesis",
        "Temperature",
        "Vision resolution"
      ],
      "explanation": "Useful metadata helps retrieval and citation.",
      "topic": "Knowledge bases",
      "sourceUnit": "3-knowledge-bases",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/3-knowledge-bases",
      "coverage": "module"
    },
    {
      "id": "azure-iq-match-08",
      "type": "match",
      "prompt": "Which consideration limits retrieval according to user entitlements?",
      "answer": "Access permissions",
      "aliases": [
        "Access permissions"
      ],
      "options": [
        "Access permissions",
        "Model randomness",
        "Image style",
        "Video duration"
      ],
      "explanation": "Source access must honour permissions.",
      "topic": "Knowledge bases",
      "sourceUnit": "3-knowledge-bases",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/3-knowledge-bases",
      "coverage": "module"
    },
    {
      "id": "azure-iq-match-09",
      "type": "match",
      "prompt": "How is a Foundry IQ knowledge base exposed to agents?",
      "answer": "MCP tool",
      "aliases": [
        "MCP tool"
      ],
      "options": [
        "MCP tool",
        "TTS endpoint",
        "Video renderer",
        "Billing API"
      ],
      "explanation": "The knowledge base offers an MCP connection.",
      "topic": "Connect an agent to Foundry IQ",
      "sourceUnit": "4-connect-agents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/4-connect-agents",
      "coverage": "module"
    },
    {
      "id": "azure-iq-match-10",
      "type": "match",
      "prompt": "Which test checks an agent's behaviour when no supporting source exists?",
      "answer": "Unanswerable question test",
      "aliases": [
        "Unanswerable question test"
      ],
      "options": [
        "Unanswerable question test",
        "Only happy-path question",
        "Only image prompts",
        "Only performance benchmark"
      ],
      "explanation": "Agents should acknowledge when sources do not support an answer.",
      "topic": "Connect an agent to Foundry IQ",
      "sourceUnit": "4-connect-agents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/4-connect-agents",
      "coverage": "module"
    },
    {
      "id": "azure-iq-scenario-01",
      "type": "scenario",
      "prompt": "A finance and HR agent both need the same approved expense policy. What architecture reduces duplication?",
      "answer": "Shared Foundry IQ knowledge base",
      "aliases": [
        "Shared Foundry IQ knowledge base"
      ],
      "options": [
        "Shared Foundry IQ knowledge base",
        "Two manually copied prompts only",
        "Separate duplicate search pipelines",
        "Only a larger model"
      ],
      "explanation": "The shared knowledge layer can serve multiple agents.",
      "topic": "What is Foundry IQ?",
      "sourceUnit": "2-explore-foundry-iq",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/2-explore-foundry-iq",
      "coverage": "module"
    },
    {
      "id": "azure-iq-scenario-02",
      "type": "scenario",
      "prompt": "An agent retrieves policy paragraphs and cites them. Which Foundry IQ feature supplied the evidence?",
      "answer": "Agentic retrieval",
      "aliases": [
        "Agentic retrieval"
      ],
      "options": [
        "Agentic retrieval",
        "Speech recognition",
        "Image generation",
        "Model training"
      ],
      "explanation": "Retrieval returns relevant content and source references.",
      "topic": "What is Foundry IQ?",
      "sourceUnit": "2-explore-foundry-iq",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/2-explore-foundry-iq",
      "coverage": "module"
    },
    {
      "id": "azure-iq-scenario-03",
      "type": "scenario",
      "prompt": "A company has policies in SharePoint and finance records in a database. How should retrieval be organised?",
      "answer": "Knowledge base with relevant sources",
      "aliases": [
        "Knowledge base with relevant sources"
      ],
      "options": [
        "Knowledge base with relevant sources",
        "One user prompt for each file",
        "Only an image model",
        "Only a text-to-speech model"
      ],
      "explanation": "A knowledge base can coordinate searches across related sources.",
      "topic": "Knowledge bases",
      "sourceUnit": "3-knowledge-bases",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/3-knowledge-bases",
      "coverage": "module"
    },
    {
      "id": "azure-iq-scenario-04",
      "type": "scenario",
      "prompt": "A knowledge base includes obsolete documents. Which quality concern is most immediately affected?",
      "answer": "Freshness",
      "aliases": [
        "Freshness"
      ],
      "options": [
        "Freshness",
        "Model temperature",
        "Audio latency",
        "Speech rate"
      ],
      "explanation": "Old documents undermine currency and reliability of retrieved answers.",
      "topic": "Knowledge bases",
      "sourceUnit": "3-knowledge-bases",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/3-knowledge-bases",
      "coverage": "module"
    },
    {
      "id": "azure-iq-scenario-05",
      "type": "scenario",
      "prompt": "A system mixes unrelated policy and engineering content and gives weaker results. What should be improved?",
      "answer": "Knowledge-base scope",
      "aliases": [
        "Knowledge-base scope"
      ],
      "options": [
        "Knowledge-base scope",
        "Increase speech volume",
        "Choose video generation",
        "Use longer API keys"
      ],
      "explanation": "Focused related sources improve retrieval precision.",
      "topic": "Knowledge bases",
      "sourceUnit": "3-knowledge-bases",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/3-knowledge-bases",
      "coverage": "module"
    },
    {
      "id": "azure-iq-scenario-06",
      "type": "scenario",
      "prompt": "A retrieval result needs source dates and titles to make citations easier. What should be improved?",
      "answer": "Metadata",
      "aliases": [
        "Metadata"
      ],
      "options": [
        "Metadata",
        "Token sampling",
        "Voice pitch",
        "Image dimension"
      ],
      "explanation": "Metadata supports search ranking, filtering and citation.",
      "topic": "Knowledge bases",
      "sourceUnit": "3-knowledge-bases",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/3-knowledge-bases",
      "coverage": "module"
    },
    {
      "id": "azure-iq-scenario-07",
      "type": "scenario",
      "prompt": "A knowledge source contains confidential documents only some employees may see. What must retrieval respect?",
      "answer": "User access permissions",
      "aliases": [
        "User access permissions"
      ],
      "options": [
        "User access permissions",
        "Model output length only",
        "Video frame rate",
        "Random document order"
      ],
      "explanation": "Knowledge retrieval must observe access controls.",
      "topic": "Knowledge bases",
      "sourceUnit": "3-knowledge-bases",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/3-knowledge-bases",
      "coverage": "module"
    },
    {
      "id": "azure-iq-scenario-08",
      "type": "scenario",
      "prompt": "A developer needs to attach a knowledge base to a Foundry agent. What kind of integration should they add?",
      "answer": "MCP tool",
      "aliases": [
        "MCP tool"
      ],
      "options": [
        "MCP tool",
        "Speech synthesizer",
        "Image classifier",
        "Billing tag"
      ],
      "explanation": "Foundry IQ knowledge bases expose MCP tools.",
      "topic": "Connect an agent to Foundry IQ",
      "sourceUnit": "4-connect-agents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/4-connect-agents",
      "coverage": "module"
    },
    {
      "id": "azure-iq-scenario-09",
      "type": "scenario",
      "prompt": "An agent has a knowledge base but often invents unsupported policy answers. What should its instructions require?",
      "answer": "Ground claims in retrieved evidence and cite sources",
      "aliases": [
        "Ground claims in retrieved evidence and cite sources"
      ],
      "options": [
        "Ground claims in retrieved evidence and cite sources",
        "Always invent a likely answer",
        "Ignore knowledge-base results",
        "Disable citations"
      ],
      "explanation": "Instructions should specify grounding, citations and uncertainty.",
      "topic": "Connect an agent to Foundry IQ",
      "sourceUnit": "4-connect-agents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/4-connect-agents",
      "coverage": "module"
    },
    {
      "id": "azure-iq-scenario-10",
      "type": "scenario",
      "prompt": "A team tests its agent only on questions with straightforward answers. Which missing test is most valuable?",
      "answer": "Questions with no available answer",
      "aliases": [
        "Questions with no available answer"
      ],
      "options": [
        "Questions with no available answer",
        "Only more easy questions",
        "Only layout screenshots",
        "Only one user role"
      ],
      "explanation": "Negative, ambiguous and permissions-sensitive tests expose failures.",
      "topic": "Connect an agent to Foundry IQ",
      "sourceUnit": "4-connect-agents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-foundry-iq/4-connect-agents",
      "coverage": "module"
    }
  ]
});
