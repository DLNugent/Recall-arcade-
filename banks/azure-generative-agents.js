window.QUIZ_MODULES.push({
  "id": "azure-generative-agents",
  "title": "Get started with generative AI and agents in Azure",
  "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/",
  "learningPath": "azure-apps-agents",
  "topics": [
    {
      "id": "Generative AI models",
      "title": "Generative AI models",
      "count": 11
    },
    {
      "id": "Using a generative AI model",
      "title": "Using a generative AI model",
      "count": 11
    },
    {
      "id": "Creating an agent",
      "title": "Creating an agent",
      "count": 8
    }
  ],
  "questions": [
    {
      "id": "azure-generative-recall-01",
      "type": "recall",
      "prompt": "In Foundry, what catalog lets developers discover and compare AI models?",
      "answer": "Model catalog",
      "aliases": [
        "Model catalog"
      ],
      "options": [
        "Model catalog",
        "Agent playground",
        "Knowledge base",
        "Resource group"
      ],
      "explanation": "The model catalog describes model capabilities, benchmarks and supported tasks.",
      "topic": "Generative AI models",
      "sourceUnit": "2-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/2-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-recall-02",
      "type": "recall",
      "prompt": "What does TPM stand for in a model deployment's rate limit?",
      "answer": "Tokens per minute",
      "aliases": [
        "Tokens per minute",
        "token per minute"
      ],
      "options": [
        "Tokens per minute",
        "Tasks per model",
        "Throughput per machine",
        "Tools per message"
      ],
      "explanation": "TPM is the configured rate of token processing.",
      "topic": "Generative AI models",
      "sourceUnit": "2-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/2-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-recall-03",
      "type": "recall",
      "prompt": "What does a deployed model expose for applications to send requests?",
      "answer": "Endpoint",
      "aliases": [
        "Endpoint",
        "API endpoint"
      ],
      "options": [
        "Endpoint",
        "Resource group",
        "Model card",
        "Local file"
      ],
      "explanation": "Deployment creates an endpoint that apps can invoke.",
      "topic": "Generative AI models",
      "sourceUnit": "2-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/2-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-recall-04",
      "type": "recall",
      "prompt": "What term describes temporarily limiting request processing when a deployment reaches capacity?",
      "answer": "Throttling",
      "aliases": [
        "Throttling",
        "rate limiting"
      ],
      "options": [
        "Throttling",
        "Embedding",
        "Indexing",
        "Prompting"
      ],
      "explanation": "Throttling protects the service when rate limits are approached.",
      "topic": "Generative AI models",
      "sourceUnit": "2-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/2-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-recall-05",
      "type": "recall",
      "prompt": "Which generation parameter controls the balance between creativity and determinism?",
      "answer": "Temperature",
      "aliases": [
        "Temperature",
        "model temperature"
      ],
      "options": [
        "Temperature",
        "Max output tokens",
        "Deployment name",
        "Token ID"
      ],
      "explanation": "Temperature changes the randomness of model generation.",
      "topic": "Using a generative AI model",
      "sourceUnit": "3-using-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/3-using-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-recall-06",
      "type": "recall",
      "prompt": "Which generation parameter caps the length of a model response?",
      "answer": "Max output tokens",
      "aliases": [
        "Max output tokens",
        "maximum output tokens",
        "output token limit"
      ],
      "options": [
        "Max output tokens",
        "Temperature",
        "Model name",
        "Endpoint"
      ],
      "explanation": "Maximum output tokens places an upper limit on generated output.",
      "topic": "Using a generative AI model",
      "sourceUnit": "3-using-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/3-using-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-recall-07",
      "type": "recall",
      "prompt": "What is the end user's request submitted to a generative model called?",
      "answer": "User prompt",
      "aliases": [
        "User prompt",
        "prompt"
      ],
      "options": [
        "User prompt",
        "System instruction",
        "Tool definition",
        "Model deployment"
      ],
      "explanation": "A user prompt carries the user's request rather than governing overall behaviour.",
      "topic": "Using a generative AI model",
      "sourceUnit": "3-using-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/3-using-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-recall-08",
      "type": "recall",
      "prompt": "What kind of instructions define a model's role, tone and constraints?",
      "answer": "System instructions",
      "aliases": [
        "System instructions",
        "system prompt"
      ],
      "options": [
        "System instructions",
        "User prompt",
        "Model card",
        "Inference token"
      ],
      "explanation": "System instructions govern the agent or model's desired behaviour.",
      "topic": "Using a generative AI model",
      "sourceUnit": "3-using-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/3-using-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-recall-09",
      "type": "recall",
      "prompt": "What Foundry component combines a model, instructions and tools into a reusable worker?",
      "answer": "Agent",
      "aliases": [
        "Agent",
        "AI agent"
      ],
      "options": [
        "Agent",
        "Endpoint",
        "Storage account",
        "Dataset"
      ],
      "explanation": "An agent packages intelligence with instructions and tool capabilities.",
      "topic": "Creating an agent",
      "sourceUnit": "4-creating-an-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/4-creating-an-agent",
      "coverage": "module"
    },
    {
      "id": "azure-generative-recall-10",
      "type": "recall",
      "prompt": "Which API is used in the lesson to invoke an existing Foundry agent through a project?",
      "answer": "Project API",
      "aliases": [
        "Project API",
        "Foundry Project API"
      ],
      "options": [
        "Project API",
        "Storage API",
        "Billing API",
        "Portal-only API"
      ],
      "explanation": "The Foundry Project API supports using agents in client applications.",
      "topic": "Creating an agent",
      "sourceUnit": "4-creating-an-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/4-creating-an-agent",
      "coverage": "module"
    },
    {
      "id": "azure-generative-match-01",
      "type": "match",
      "prompt": "Which Foundry feature lists model benchmarks and capability descriptions?",
      "answer": "Model catalog",
      "aliases": [
        "Model catalog"
      ],
      "options": [
        "Model catalog",
        "Foundry IQ",
        "Key Vault",
        "Azure portal billing"
      ],
      "explanation": "The model catalog provides information for selecting models.",
      "topic": "Generative AI models",
      "sourceUnit": "2-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/2-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-match-02",
      "type": "match",
      "prompt": "Which choice is a deployment configuration rather than a model capability?",
      "answer": "Tokens-per-minute allocation",
      "aliases": [
        "Tokens-per-minute allocation"
      ],
      "options": [
        "Tokens-per-minute allocation",
        "Text understanding",
        "Multimodal input",
        "Reasoning"
      ],
      "explanation": "TPM is a deployment rate-limit setting.",
      "topic": "Generative AI models",
      "sourceUnit": "2-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/2-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-match-03",
      "type": "match",
      "prompt": "Which factor is explicitly used to compare candidate models?",
      "answer": "Performance, safety and cost",
      "aliases": [
        "Performance, safety and cost"
      ],
      "options": [
        "Performance, safety and cost",
        "Alphabetical naming only",
        "Colour of the portal",
        "Number of user prompts"
      ],
      "explanation": "The lesson recommends balancing performance, safety and cost.",
      "topic": "Generative AI models",
      "sourceUnit": "2-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/2-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-match-04",
      "type": "match",
      "prompt": "What happens to a model when it is deployed?",
      "answer": "It becomes callable through an API endpoint",
      "aliases": [
        "It becomes callable through an API endpoint"
      ],
      "options": [
        "It becomes callable through an API endpoint",
        "It becomes a knowledge base",
        "Its training data is deleted",
        "It becomes a local-only file"
      ],
      "explanation": "Deployment makes the model available as a hosted service.",
      "topic": "Generative AI models",
      "sourceUnit": "2-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/2-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-match-05",
      "type": "match",
      "prompt": "Which interface supports interactive prompt experiments?",
      "answer": "Model playground",
      "aliases": [
        "Model playground"
      ],
      "options": [
        "Model playground",
        "Azure invoices",
        "Network routing table",
        "Database backup"
      ],
      "explanation": "Playgrounds let developers test prompts and model settings.",
      "topic": "Using a generative AI model",
      "sourceUnit": "3-using-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/3-using-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-match-06",
      "type": "match",
      "prompt": "Which input controls ongoing model behaviour rather than asking a one-off question?",
      "answer": "System instructions",
      "aliases": [
        "System instructions"
      ],
      "options": [
        "System instructions",
        "User prompt",
        "File name",
        "API response"
      ],
      "explanation": "System instructions define the model's behavioural rules.",
      "topic": "Using a generative AI model",
      "sourceUnit": "3-using-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/3-using-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-match-07",
      "type": "match",
      "prompt": "Which parameter more directly caps response length?",
      "answer": "Max output tokens",
      "aliases": [
        "Max output tokens"
      ],
      "options": [
        "Max output tokens",
        "Temperature",
        "Deployment region",
        "SDK language"
      ],
      "explanation": "Max output tokens limits the amount generated.",
      "topic": "Using a generative AI model",
      "sourceUnit": "3-using-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/3-using-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-match-08",
      "type": "match",
      "prompt": "Which element is the reasoning foundation of a Foundry agent?",
      "answer": "Model",
      "aliases": [
        "Model"
      ],
      "options": [
        "Model",
        "Instructions",
        "Tools",
        "Resource group"
      ],
      "explanation": "The model supplies language understanding and reasoning.",
      "topic": "Creating an agent",
      "sourceUnit": "4-creating-an-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/4-creating-an-agent",
      "coverage": "module"
    },
    {
      "id": "azure-generative-match-09",
      "type": "match",
      "prompt": "Which element enables an agent to query a database or run code?",
      "answer": "Tools",
      "aliases": [
        "Tools"
      ],
      "options": [
        "Tools",
        "Model only",
        "Instructions only",
        "Model version"
      ],
      "explanation": "Agent tools expose external actions and capabilities.",
      "topic": "Creating an agent",
      "sourceUnit": "4-creating-an-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/4-creating-an-agent",
      "coverage": "module"
    },
    {
      "id": "azure-generative-match-10",
      "type": "match",
      "prompt": "Which package in the lesson provides a Python client for Foundry projects?",
      "answer": "azure-ai-projects",
      "aliases": [
        "azure-ai-projects"
      ],
      "options": [
        "azure-ai-projects",
        "azure-storage-blob",
        "azure-cosmos",
        "pandas"
      ],
      "explanation": "The lesson uses Azure AI Projects SDK for agent operations.",
      "topic": "Creating an agent",
      "sourceUnit": "4-creating-an-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/4-creating-an-agent",
      "coverage": "module"
    },
    {
      "id": "azure-generative-scenario-01",
      "type": "scenario",
      "prompt": "A phone app needs a lightweight model for a narrow task. What model class is worth evaluating first?",
      "answer": "Small language model",
      "aliases": [
        "Small language model"
      ],
      "options": [
        "Small language model",
        "Largest reasoning model by default",
        "Image-only model",
        "Speech synthesizer"
      ],
      "explanation": "Small language models can fit lightweight or focused requirements.",
      "topic": "Generative AI models",
      "sourceUnit": "2-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/2-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-scenario-02",
      "type": "scenario",
      "prompt": "A deployer's requests are rejected after a sudden traffic spike. Which limit should be investigated?",
      "answer": "Rate limit or TPM quota",
      "aliases": [
        "Rate limit or TPM quota"
      ],
      "options": [
        "Rate limit or TPM quota",
        "Text encoding",
        "Prompt punctuation",
        "Model card title"
      ],
      "explanation": "TPM and requests-per-minute quota can cause throttling.",
      "topic": "Generative AI models",
      "sourceUnit": "2-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/2-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-scenario-03",
      "type": "scenario",
      "prompt": "A developer needs domain-specific performance and wants to compare providers. What should they inspect?",
      "answer": "Model catalog",
      "aliases": [
        "Model catalog"
      ],
      "options": [
        "Model catalog",
        "Resource group name only",
        "Local command history",
        "Page title"
      ],
      "explanation": "The catalog allows comparison of provider models and capabilities.",
      "topic": "Generative AI models",
      "sourceUnit": "2-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/2-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-scenario-04",
      "type": "scenario",
      "prompt": "A team wants to check model prompts before coding a chat app. Which environment should it use?",
      "answer": "Foundry playground",
      "aliases": [
        "Foundry playground"
      ],
      "options": [
        "Foundry playground",
        "Production billing logs",
        "Key Vault",
        "Azure DNS"
      ],
      "explanation": "The playground supports prompt and settings experiments.",
      "topic": "Using a generative AI model",
      "sourceUnit": "3-using-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/3-using-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-scenario-05",
      "type": "scenario",
      "prompt": "An app's responses are too variable for a repeatable support task. Which parameter should be reduced?",
      "answer": "Temperature",
      "aliases": [
        "Temperature"
      ],
      "options": [
        "Temperature",
        "Max output tokens",
        "Deployment name length",
        "Model catalog filters"
      ],
      "explanation": "Lower temperature typically makes generation less variable.",
      "topic": "Using a generative AI model",
      "sourceUnit": "3-using-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/3-using-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-scenario-06",
      "type": "scenario",
      "prompt": "A response is repeatedly cut off at its configured maximum length. Which setting should be reviewed?",
      "answer": "Max output tokens",
      "aliases": [
        "Max output tokens"
      ],
      "options": [
        "Max output tokens",
        "Language detection",
        "Project name",
        "Prompt role only"
      ],
      "explanation": "The output-token cap directly limits response length.",
      "topic": "Using a generative AI model",
      "sourceUnit": "3-using-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/3-using-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-scenario-07",
      "type": "scenario",
      "prompt": "A tutoring model must always cite sources and avoid certain content. Where should those rules go?",
      "answer": "System instructions",
      "aliases": [
        "System instructions"
      ],
      "options": [
        "System instructions",
        "User's latest question",
        "API billing metadata",
        "Resource group"
      ],
      "explanation": "System instructions set persistent rules and constraints.",
      "topic": "Using a generative AI model",
      "sourceUnit": "3-using-generative-ai-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/3-using-generative-ai-models",
      "coverage": "module"
    },
    {
      "id": "azure-generative-scenario-08",
      "type": "scenario",
      "prompt": "An AI assistant must both answer questions and call an external API to update a booking. What does it need beyond the model?",
      "answer": "An agent with appropriate tools",
      "aliases": [
        "An agent with appropriate tools"
      ],
      "options": [
        "An agent with appropriate tools",
        "A larger response limit alone",
        "Only a model card",
        "Only a new subscription name"
      ],
      "explanation": "Tools let an agent take external actions.",
      "topic": "Creating an agent",
      "sourceUnit": "4-creating-an-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/4-creating-an-agent",
      "coverage": "module"
    },
    {
      "id": "azure-generative-scenario-09",
      "type": "scenario",
      "prompt": "An agent is meant to inspect files and run data-analysis code. Which capability should be attached?",
      "answer": "Code Interpreter tool",
      "aliases": [
        "Code Interpreter tool"
      ],
      "options": [
        "Code Interpreter tool",
        "Model catalog filter",
        "Output-token setting",
        "Resource group"
      ],
      "explanation": "Code Interpreter can execute code and handle files.",
      "topic": "Creating an agent",
      "sourceUnit": "4-creating-an-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/4-creating-an-agent",
      "coverage": "module"
    },
    {
      "id": "azure-generative-scenario-10",
      "type": "scenario",
      "prompt": "A web app must call an agent already configured in Foundry. Which integration route fits?",
      "answer": "Foundry Project API",
      "aliases": [
        "Foundry Project API"
      ],
      "options": [
        "Foundry Project API",
        "Manual playground clicks only",
        "Key Vault secret listing",
        "Azure portal billing"
      ],
      "explanation": "The Project API lets client code invoke project agents.",
      "topic": "Creating an agent",
      "sourceUnit": "4-creating-an-agent",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-generative-ai-and-agents/4-creating-an-agent",
      "coverage": "module"
    }
  ]
});
