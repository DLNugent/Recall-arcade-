window.QUIZ_MODULES.push({
  "id": "azure-ai-foundations",
  "title": "Get started with AI in Azure",
  "source": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/",
  "learningPath": "azure-apps-agents",
  "topics": [
    {
      "id": "Understand Azure",
      "title": "Understand Azure",
      "count": 8
    },
    {
      "id": "Developing AI apps on Azure",
      "title": "Developing AI apps on Azure",
      "count": 10
    },
    {
      "id": "Microsoft Foundry for AI",
      "title": "Microsoft Foundry for AI",
      "count": 7
    },
    {
      "id": "Using Microsoft Foundry endpoints",
      "title": "Using Microsoft Foundry endpoints",
      "count": 5
    }
  ],
  "questions": [
    {
      "id": "azure-foundations-recall-01",
      "type": "recall",
      "prompt": "Within Azure, which container is primarily associated with billing and quotas?",
      "answer": "Subscription",
      "aliases": [
        "Subscription",
        "Azure subscription"
      ],
      "options": [
        "Subscription",
        "Tenant",
        "Resource group",
        "Storage account"
      ],
      "explanation": "A subscription is the billing and quota boundary for Azure resources.",
      "topic": "Understand Azure",
      "sourceUnit": "2-what-is-azure",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/2-what-is-azure",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-recall-02",
      "type": "recall",
      "prompt": "What Azure grouping lets you manage related resources together?",
      "answer": "Resource group",
      "aliases": [
        "Resource group",
        "resource groups"
      ],
      "options": [
        "Resource group",
        "Tenant",
        "Model catalog",
        "API endpoint"
      ],
      "explanation": "Resource groups collect related resources for permissions and management.",
      "topic": "Understand Azure",
      "sourceUnit": "2-what-is-azure",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/2-what-is-azure",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-recall-03",
      "type": "recall",
      "prompt": "Which Azure service protects application secrets such as API keys?",
      "answer": "Key Vault",
      "aliases": [
        "Key Vault",
        "Azure Key Vault"
      ],
      "options": [
        "Key Vault",
        "App Service",
        "Azure SQL Database",
        "Model catalog"
      ],
      "explanation": "Azure Key Vault stores and protects secrets instead of embedding them in code.",
      "topic": "Developing AI apps on Azure",
      "sourceUnit": "3-develop-ai-apps",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/3-develop-ai-apps",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-recall-04",
      "type": "recall",
      "prompt": "What identity service is named for controlling access to Azure AI resources?",
      "answer": "Microsoft Entra ID",
      "aliases": [
        "Microsoft Entra ID",
        "Entra ID",
        "Entra"
      ],
      "options": [
        "Microsoft Entra ID",
        "Azure Cosmos DB",
        "Azure Blob Storage",
        "Azure App Service"
      ],
      "explanation": "Microsoft Entra ID manages identities and supports controlled access.",
      "topic": "Developing AI apps on Azure",
      "sourceUnit": "3-develop-ai-apps",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/3-develop-ai-apps",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-recall-05",
      "type": "recall",
      "prompt": "What does RBAC stand for when limiting access to AI resources?",
      "answer": "Role-based access control",
      "aliases": [
        "Role-based access control",
        "role based access control"
      ],
      "options": [
        "Role-based access control",
        "Resource-based agent configuration",
        "Remote billing access control",
        "Runtime-based application connection"
      ],
      "explanation": "RBAC limits permissions according to assigned roles.",
      "topic": "Developing AI apps on Azure",
      "sourceUnit": "3-develop-ai-apps",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/3-develop-ai-apps",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-recall-06",
      "type": "recall",
      "prompt": "What scaling approach adds more application instances?",
      "answer": "Scale out",
      "aliases": [
        "Scale out",
        "horizontal scaling",
        "scaling out"
      ],
      "options": [
        "Scale out",
        "Scale up",
        "Scale down",
        "Vertical scaling"
      ],
      "explanation": "Scaling out is horizontal scaling, adding instances rather than enlarging one.",
      "topic": "Developing AI apps on Azure",
      "sourceUnit": "3-develop-ai-apps",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/3-develop-ai-apps",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-recall-07",
      "type": "recall",
      "prompt": "What scaling approach increases CPU or memory in an existing instance?",
      "answer": "Scale up",
      "aliases": [
        "Scale up",
        "vertical scaling",
        "scaling up"
      ],
      "options": [
        "Scale up",
        "Scale out",
        "Horizontal scaling",
        "Replication"
      ],
      "explanation": "Scaling up is vertical scaling of an existing instance.",
      "topic": "Developing AI apps on Azure",
      "sourceUnit": "3-develop-ai-apps",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/3-develop-ai-apps",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-recall-08",
      "type": "recall",
      "prompt": "What Microsoft platform brings models, agents, tools and knowledge into one environment?",
      "answer": "Microsoft Foundry",
      "aliases": [
        "Microsoft Foundry",
        "Foundry"
      ],
      "options": [
        "Microsoft Foundry",
        "Azure Key Vault",
        "Azure SQL Database",
        "Microsoft Entra ID"
      ],
      "explanation": "Microsoft Foundry is the unified platform for developing and operating AI solutions.",
      "topic": "Microsoft Foundry for AI",
      "sourceUnit": "4-microsoft-foundry",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/4-microsoft-foundry",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-recall-09",
      "type": "recall",
      "prompt": "What is the workspace inside a Foundry resource called?",
      "answer": "Project",
      "aliases": [
        "Project",
        "Foundry project"
      ],
      "options": [
        "Project",
        "Subscription",
        "Tenant",
        "Virtual machine"
      ],
      "explanation": "A Foundry project is the workspace for agents, evaluations, data and connections.",
      "topic": "Microsoft Foundry for AI",
      "sourceUnit": "4-microsoft-foundry",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/4-microsoft-foundry",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-recall-10",
      "type": "recall",
      "prompt": "What is a network address through which an application invokes a deployed model?",
      "answer": "Endpoint",
      "aliases": [
        "Endpoint",
        "API endpoint",
        "model endpoint"
      ],
      "options": [
        "Endpoint",
        "Resource group",
        "Token",
        "Workspace"
      ],
      "explanation": "A model endpoint exposes the deployed model through a service address.",
      "topic": "Using Microsoft Foundry endpoints",
      "sourceUnit": "5-endpoints",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/5-endpoints",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-match-01",
      "type": "match",
      "prompt": "Which Azure category provides computing power to run workloads?",
      "answer": "Compute",
      "aliases": [
        "Compute"
      ],
      "options": [
        "Compute",
        "Storage",
        "Networking",
        "App Services"
      ],
      "explanation": "Compute supplies runtime processing resources.",
      "topic": "Understand Azure",
      "sourceUnit": "2-what-is-azure",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/2-what-is-azure",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-match-02",
      "type": "match",
      "prompt": "Which grouping is the organisational identity boundary in Azure?",
      "answer": "Tenant",
      "aliases": [
        "Tenant"
      ],
      "options": [
        "Tenant",
        "Subscription",
        "Resource group",
        "Deployment"
      ],
      "explanation": "An Azure tenant holds the organisation's identities and policies.",
      "topic": "Understand Azure",
      "sourceUnit": "2-what-is-azure",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/2-what-is-azure",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-match-03",
      "type": "match",
      "prompt": "Which service category connects Azure resources to one another?",
      "answer": "Networking",
      "aliases": [
        "Networking"
      ],
      "options": [
        "Networking",
        "Storage",
        "Compute",
        "Model hosting"
      ],
      "explanation": "Networking provides connectivity between resources and systems.",
      "topic": "Understand Azure",
      "sourceUnit": "2-what-is-azure",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/2-what-is-azure",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-match-04",
      "type": "match",
      "prompt": "Which Azure management surface is a web-based user interface?",
      "answer": "Azure portal",
      "aliases": [
        "Azure portal"
      ],
      "options": [
        "Azure portal",
        "Azure CLI",
        "REST API",
        "Python SDK"
      ],
      "explanation": "The Azure portal is the browser-based management interface.",
      "topic": "Understand Azure",
      "sourceUnit": "2-what-is-azure",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/2-what-is-azure",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-match-05",
      "type": "match",
      "prompt": "Which service is named as a quick way to deploy web apps and APIs?",
      "answer": "Azure App Service",
      "aliases": [
        "Azure App Service"
      ],
      "options": [
        "Azure App Service",
        "Azure Key Vault",
        "Microsoft Entra ID",
        "Azure SQL Database"
      ],
      "explanation": "Azure App Service hosts web apps, APIs and background jobs.",
      "topic": "Developing AI apps on Azure",
      "sourceUnit": "3-develop-ai-apps",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/3-develop-ai-apps",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-match-06",
      "type": "match",
      "prompt": "Which Azure offering orchestrates containerised workloads?",
      "answer": "Azure Kubernetes Service",
      "aliases": [
        "Azure Kubernetes Service"
      ],
      "options": [
        "Azure Kubernetes Service",
        "Azure Key Vault",
        "Azure SQL Database",
        "Azure Blob Storage"
      ],
      "explanation": "AKS manages and orchestrates containerised applications.",
      "topic": "Developing AI apps on Azure",
      "sourceUnit": "3-develop-ai-apps",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/3-develop-ai-apps",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-match-07",
      "type": "match",
      "prompt": "Which Foundry feature is used to browse and compare available AI models?",
      "answer": "Model catalog",
      "aliases": [
        "Model catalog"
      ],
      "options": [
        "Model catalog",
        "Resource group",
        "Key Vault",
        "Azure portal billing"
      ],
      "explanation": "The model catalog helps discover and evaluate model capabilities.",
      "topic": "Microsoft Foundry for AI",
      "sourceUnit": "4-microsoft-foundry",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/4-microsoft-foundry",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-match-08",
      "type": "match",
      "prompt": "Which Foundry area lets you test prompts interactively before writing an app?",
      "answer": "Playground",
      "aliases": [
        "Playground"
      ],
      "options": [
        "Playground",
        "Subscription billing",
        "Virtual network",
        "Key Vault"
      ],
      "explanation": "The playground lets developers experiment with prompts and settings.",
      "topic": "Microsoft Foundry for AI",
      "sourceUnit": "4-microsoft-foundry",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/4-microsoft-foundry",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-match-09",
      "type": "match",
      "prompt": "Which endpoint type is used to send prompts to a deployed model?",
      "answer": "Model endpoint",
      "aliases": [
        "Model endpoint"
      ],
      "options": [
        "Model endpoint",
        "Project-level endpoint",
        "Resource group",
        "Storage container"
      ],
      "explanation": "A model endpoint serves model inference requests.",
      "topic": "Using Microsoft Foundry endpoints",
      "sourceUnit": "5-endpoints",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/5-endpoints",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-match-10",
      "type": "match",
      "prompt": "What typically holds authentication and content-type metadata in a REST request?",
      "answer": "Headers",
      "aliases": [
        "Headers"
      ],
      "options": [
        "Headers",
        "Response body",
        "Deployment name",
        "Prompt content"
      ],
      "explanation": "HTTP headers carry authentication and format metadata.",
      "topic": "Using Microsoft Foundry endpoints",
      "sourceUnit": "5-endpoints",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/5-endpoints",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-scenario-01",
      "type": "scenario",
      "prompt": "An organisation wants to separate projects into manageable folders while retaining one subscription. Which Azure unit should it create?",
      "answer": "Resource groups",
      "aliases": [
        "Resource groups"
      ],
      "options": [
        "Resource groups",
        "Tenants",
        "Models",
        "API keys"
      ],
      "explanation": "Resource groups group related resources within a subscription.",
      "topic": "Understand Azure",
      "sourceUnit": "2-what-is-azure",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/2-what-is-azure",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-scenario-02",
      "type": "scenario",
      "prompt": "A developer wants reproducible Azure resource creation through scripts. Which approach fits?",
      "answer": "Azure CLI",
      "aliases": [
        "Azure CLI"
      ],
      "options": [
        "Azure CLI",
        "Manual portal-only clicks",
        "Changing a prompt",
        "Uploading a model"
      ],
      "explanation": "Azure CLI supports programmatic resource provisioning.",
      "topic": "Understand Azure",
      "sourceUnit": "2-what-is-azure",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/2-what-is-azure",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-scenario-03",
      "type": "scenario",
      "prompt": "An application must authenticate without putting a secret directly in source code. Which practice fits?",
      "answer": "Use managed identity",
      "aliases": [
        "Use managed identity"
      ],
      "options": [
        "Use managed identity",
        "Commit the API key",
        "Put the password in client HTML",
        "Disable identity checks"
      ],
      "explanation": "Managed identity avoids hard-coding credentials into the application.",
      "topic": "Developing AI apps on Azure",
      "sourceUnit": "3-develop-ai-apps",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/3-develop-ai-apps",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-scenario-04",
      "type": "scenario",
      "prompt": "An app receives twice as much traffic and adds three more identical servers. Which scaling approach was used?",
      "answer": "Scale out",
      "aliases": [
        "Scale out"
      ],
      "options": [
        "Scale out",
        "Scale up",
        "Tokenisation",
        "Fine-tuning"
      ],
      "explanation": "Adding more instances is horizontal scaling.",
      "topic": "Developing AI apps on Azure",
      "sourceUnit": "3-develop-ai-apps",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/3-develop-ai-apps",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-scenario-05",
      "type": "scenario",
      "prompt": "An existing server is given more memory instead of adding servers. Which approach is that?",
      "answer": "Scale up",
      "aliases": [
        "Scale up"
      ],
      "options": [
        "Scale up",
        "Scale out",
        "Data replication",
        "Model deployment"
      ],
      "explanation": "Increasing one instance's resources is vertical scaling.",
      "topic": "Developing AI apps on Azure",
      "sourceUnit": "3-develop-ai-apps",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/3-develop-ai-apps",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-scenario-06",
      "type": "scenario",
      "prompt": "A team needs agents, tools, evaluations and model deployments in one managed development environment. Which platform fits?",
      "answer": "Microsoft Foundry",
      "aliases": [
        "Microsoft Foundry"
      ],
      "options": [
        "Microsoft Foundry",
        "Azure Key Vault",
        "Azure DNS",
        "Microsoft Entra ID"
      ],
      "explanation": "Foundry unifies models, agents and supporting services.",
      "topic": "Microsoft Foundry for AI",
      "sourceUnit": "4-microsoft-foundry",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/4-microsoft-foundry",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-scenario-07",
      "type": "scenario",
      "prompt": "A team wants distinct AI workspaces inside one Foundry resource. What should they create?",
      "answer": "Separate Foundry projects",
      "aliases": [
        "Separate Foundry projects"
      ],
      "options": [
        "Separate Foundry projects",
        "Separate prompts only",
        "Separate tokens",
        "Separate response bodies"
      ],
      "explanation": "Projects isolate workspace assets within a Foundry resource.",
      "topic": "Microsoft Foundry for AI",
      "sourceUnit": "4-microsoft-foundry",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/4-microsoft-foundry",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-scenario-08",
      "type": "scenario",
      "prompt": "A mobile app needs to send user input to a hosted model and display its output. Which architectural role does the mobile app play?",
      "answer": "Client",
      "aliases": [
        "Client"
      ],
      "options": [
        "Client",
        "Server deployment",
        "Azure tenant",
        "Model catalog"
      ],
      "explanation": "The client collects inputs, sends requests and displays responses.",
      "topic": "Microsoft Foundry for AI",
      "sourceUnit": "4-microsoft-foundry",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/4-microsoft-foundry",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-scenario-09",
      "type": "scenario",
      "prompt": "A program sends an HTTP POST containing JSON and an authorisation header. What interface pattern is it using?",
      "answer": "REST API",
      "aliases": [
        "REST API"
      ],
      "options": [
        "REST API",
        "Local file system",
        "Azure portal UI",
        "GPU driver"
      ],
      "explanation": "REST requests communicate with cloud endpoints using HTTP.",
      "topic": "Using Microsoft Foundry endpoints",
      "sourceUnit": "5-endpoints",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/5-endpoints",
      "coverage": "module"
    },
    {
      "id": "azure-foundations-scenario-10",
      "type": "scenario",
      "prompt": "A Python developer prefers a library that handles the details of REST calls. What should they use?",
      "answer": "SDK",
      "aliases": [
        "SDK"
      ],
      "options": [
        "SDK",
        "Tenant",
        "Resource group",
        "Manual JSON only"
      ],
      "explanation": "A software development kit wraps the underlying API calls.",
      "topic": "Using Microsoft Foundry endpoints",
      "sourceUnit": "5-endpoints",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-with-ai-in-azure/5-endpoints",
      "coverage": "module"
    }
  ]
});
