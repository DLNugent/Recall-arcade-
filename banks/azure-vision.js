window.QUIZ_MODULES.push({
  "id": "azure-vision",
  "title": "Get started with computer vision in Azure",
  "source": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/",
  "learningPath": "azure-apps-agents",
  "topics": [
    {
      "id": "Multimodal models for image analysis",
      "title": "Multimodal models for image analysis",
      "count": 13
    },
    {
      "id": "Image generation models",
      "title": "Image generation models",
      "count": 12
    },
    {
      "id": "Video generation models",
      "title": "Video generation models",
      "count": 5
    }
  ],
  "questions": [
    {
      "id": "azure-vision-recall-01",
      "type": "recall",
      "prompt": "What term describes a model that processes both text and image inputs?",
      "answer": "Multimodal model",
      "aliases": [
        "Multimodal model",
        "multimodal"
      ],
      "options": [
        "Multimodal model",
        "Text-only model",
        "Speech recognizer",
        "OCR engine"
      ],
      "explanation": "Multimodal models can combine text and visual information in one interaction.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-recall-02",
      "type": "recall",
      "prompt": "Which OpenAI API does the lesson use to send text and images to a vision-capable model?",
      "answer": "Responses API",
      "aliases": [
        "Responses API",
        "OpenAI Responses API"
      ],
      "options": [
        "Responses API",
        "Speech API",
        "Storage API",
        "Billing API"
      ],
      "explanation": "The Responses API supports multimodal model inputs.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-recall-03",
      "type": "recall",
      "prompt": "What encoding can represent image bytes directly inside an API request?",
      "answer": "Base64",
      "aliases": [
        "Base64",
        "base 64"
      ],
      "options": [
        "Base64",
        "UTF-16 only",
        "MP3",
        "CSV"
      ],
      "explanation": "The lesson describes sending image data as URLs or base64-encoded content.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-recall-04",
      "type": "recall",
      "prompt": "What Foundry interface is used to test image prompts interactively?",
      "answer": "Playground",
      "aliases": [
        "Playground",
        "model playground"
      ],
      "options": [
        "Playground",
        "Key Vault",
        "Resource group",
        "Container registry"
      ],
      "explanation": "The model playground lets developers attach images and test prompts.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-recall-05",
      "type": "recall",
      "prompt": "Which capability answers questions about a photograph in natural language?",
      "answer": "Visual question answering",
      "aliases": [
        "Visual question answering",
        "image question answering"
      ],
      "options": [
        "Visual question answering",
        "Text-only sentiment analysis",
        "Speech diarization",
        "Token counting"
      ],
      "explanation": "Vision-capable multimodal models can answer questions about images.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-recall-06",
      "type": "recall",
      "prompt": "Which task generates an image from a written description?",
      "answer": "Text-to-image generation",
      "aliases": [
        "Text-to-image generation",
        "text to image",
        "image generation"
      ],
      "options": [
        "Text-to-image generation",
        "Image classification",
        "Speech recognition",
        "Document indexing"
      ],
      "explanation": "Text-to-image models create visual output based on text prompts.",
      "topic": "Image generation models",
      "sourceUnit": "3-image-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-recall-07",
      "type": "recall",
      "prompt": "Which model family does the lesson recommend as a starting point for new image projects?",
      "answer": "GPT-Image-1 family",
      "aliases": [
        "GPT-Image-1 family",
        "GPT Image 1"
      ],
      "options": [
        "GPT-Image-1 family",
        "Speech-to-text",
        "Azure Language",
        "Vision transformer classifier"
      ],
      "explanation": "The unit recommends the GPT-Image-1 family for generation and editing.",
      "topic": "Image generation models",
      "sourceUnit": "3-image-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-recall-08",
      "type": "recall",
      "prompt": "Which image generation capability changes an existing image rather than creating from text alone?",
      "answer": "Image editing",
      "aliases": [
        "Image editing",
        "editing"
      ],
      "options": [
        "Image editing",
        "Image classification",
        "Speech synthesis",
        "Sentiment analysis"
      ],
      "explanation": "Image editing modifies source imagery through generative models.",
      "topic": "Image generation models",
      "sourceUnit": "3-image-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-recall-09",
      "type": "recall",
      "prompt": "Which lower-cost member of the GPT-Image-1 family is described in the lesson?",
      "answer": "GPT-Image-1-Mini",
      "aliases": [
        "GPT-Image-1-Mini",
        "GPT Image 1 Mini"
      ],
      "options": [
        "GPT-Image-1-Mini",
        "GPT-Image-1.5",
        "GPT-Image-1",
        "Sora 2"
      ],
      "explanation": "GPT-Image-1-Mini is intended for lower-cost or low-latency image creation.",
      "topic": "Image generation models",
      "sourceUnit": "3-image-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-recall-10",
      "type": "recall",
      "prompt": "Which model name does the lesson give as an example of video generation in Foundry?",
      "answer": "Sora 2",
      "aliases": [
        "Sora 2",
        "Sora"
      ],
      "options": [
        "Sora 2",
        "TextAnalyticsClient",
        "SpeechRecognizer",
        "Azure SQL"
      ],
      "explanation": "Sora 2 is presented as a text/image/video-to-video generation model.",
      "topic": "Video generation models",
      "sourceUnit": "4-video-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/4-video-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-match-01",
      "type": "match",
      "prompt": "What is a common use of a vision-enabled model?",
      "answer": "Describe a screenshot",
      "aliases": [
        "Describe a screenshot"
      ],
      "options": [
        "Describe a screenshot",
        "Store an API key",
        "Process billing",
        "Host a database"
      ],
      "explanation": "Vision-enabled models can interpret visual inputs.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-match-02",
      "type": "match",
      "prompt": "Which combination is supported in one multimodal input request?",
      "answer": "Text instructions and images",
      "aliases": [
        "Text instructions and images"
      ],
      "options": [
        "Text instructions and images",
        "Only text messages",
        "Only audio waveforms",
        "Only database records"
      ],
      "explanation": "Responses API supports text and image parts together.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-match-03",
      "type": "match",
      "prompt": "Which image input representation is described as supported by the lesson?",
      "answer": "Image URL",
      "aliases": [
        "Image URL"
      ],
      "options": [
        "Image URL",
        "Only raw spreadsheets",
        "Only microphone audio",
        "Only SQL queries"
      ],
      "explanation": "Images can be referenced through URLs in prompts.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-match-04",
      "type": "match",
      "prompt": "Which model capability interprets a bar chart and explains it?",
      "answer": "Vision-enabled reasoning",
      "aliases": [
        "Vision-enabled reasoning"
      ],
      "options": [
        "Vision-enabled reasoning",
        "Speech synthesis",
        "Vector database backup",
        "Language detection only"
      ],
      "explanation": "Multimodal reasoning can interpret charts in images.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-match-05",
      "type": "match",
      "prompt": "Which task creates new visual content instead of interpreting an existing photograph?",
      "answer": "Image generation",
      "aliases": [
        "Image generation"
      ],
      "options": [
        "Image generation",
        "Image classification",
        "Object detection",
        "OCR"
      ],
      "explanation": "Image generation synthesises new images.",
      "topic": "Image generation models",
      "sourceUnit": "3-image-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-match-06",
      "type": "match",
      "prompt": "Which image generation model is presented as a lightweight, cost-efficient variant?",
      "answer": "GPT-Image-1-Mini",
      "aliases": [
        "GPT-Image-1-Mini"
      ],
      "options": [
        "GPT-Image-1-Mini",
        "GPT-Image-1.5",
        "GPT-Image-1",
        "Sora 2"
      ],
      "explanation": "The Mini image model is optimised for cost and latency.",
      "topic": "Image generation models",
      "sourceUnit": "3-image-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-match-07",
      "type": "match",
      "prompt": "Which model family in the lesson includes image-to-image editing?",
      "answer": "GPT-Image-1",
      "aliases": [
        "GPT-Image-1"
      ],
      "options": [
        "GPT-Image-1",
        "Azure Speech",
        "TextAnalyticsClient",
        "Azure SQL"
      ],
      "explanation": "GPT-Image models support image generation and editing workflows.",
      "topic": "Image generation models",
      "sourceUnit": "3-image-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-match-08",
      "type": "match",
      "prompt": "Which Foundry interface lets you experiment with generated image prompts?",
      "answer": "Model playground",
      "aliases": [
        "Model playground"
      ],
      "options": [
        "Model playground",
        "Azure billing",
        "Resource group settings",
        "Key Vault"
      ],
      "explanation": "The playground supports testing generative model prompts.",
      "topic": "Image generation models",
      "sourceUnit": "3-image-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-match-09",
      "type": "match",
      "prompt": "Which video-generation input can Sora 2 use according to the lesson?",
      "answer": "Image-to-video",
      "aliases": [
        "Image-to-video"
      ],
      "options": [
        "Image-to-video",
        "Only speech transcripts",
        "Only relational tables",
        "Only numerical vectors"
      ],
      "explanation": "The lesson lists image-to-video among Sora 2 modalities.",
      "topic": "Video generation models",
      "sourceUnit": "4-video-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/4-video-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-match-10",
      "type": "match",
      "prompt": "Which type of API interaction can submit a video job and later retrieve an MP4?",
      "answer": "REST API",
      "aliases": [
        "REST API"
      ],
      "options": [
        "REST API",
        "A static HTML form only",
        "A DNS lookup",
        "An SQL schema"
      ],
      "explanation": "The lesson describes calling the video-generation REST interface.",
      "topic": "Video generation models",
      "sourceUnit": "4-video-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/4-video-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-scenario-01",
      "type": "scenario",
      "prompt": "A customer uploads a product photo and asks what is damaged. Which model capability fits?",
      "answer": "Multimodal image analysis",
      "aliases": [
        "Multimodal image analysis"
      ],
      "options": [
        "Multimodal image analysis",
        "Speech synthesis",
        "Batch transcription",
        "Data masking"
      ],
      "explanation": "A multimodal model can interpret an image alongside a question.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-scenario-02",
      "type": "scenario",
      "prompt": "A learner asks an AI app to explain a diagram photographed from a textbook. What should the model support?",
      "answer": "Image and text input",
      "aliases": [
        "Image and text input"
      ],
      "options": [
        "Image and text input",
        "Text-only keyword counts",
        "Audio-only transcription",
        "SQL schema translation"
      ],
      "explanation": "A vision-capable model accepts the diagram and natural-language question.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-scenario-03",
      "type": "scenario",
      "prompt": "A Python app must send a photo and textual question to a deployed model. Which API is taught?",
      "answer": "Responses API",
      "aliases": [
        "Responses API"
      ],
      "options": [
        "Responses API",
        "Speech-to-text API",
        "Azure billing API",
        "File-system-only call"
      ],
      "explanation": "The Responses API supports multimodal requests.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-scenario-04",
      "type": "scenario",
      "prompt": "A mobile app uploads images as encoded data rather than hosted links. Which representation is described?",
      "answer": "Base64 image data",
      "aliases": [
        "Base64 image data"
      ],
      "options": [
        "Base64 image data",
        "MP3 samples",
        "CSV rows",
        "JWT only"
      ],
      "explanation": "Image bytes can be base64 encoded for requests.",
      "topic": "Multimodal models for image analysis",
      "sourceUnit": "2-vision-enabled-models",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/2-vision-enabled-models",
      "coverage": "module"
    },
    {
      "id": "azure-vision-scenario-05",
      "type": "scenario",
      "prompt": "A marketing team needs a brand illustration from a description. Which task is appropriate?",
      "answer": "Text-to-image generation",
      "aliases": [
        "Text-to-image generation"
      ],
      "options": [
        "Text-to-image generation",
        "Object localisation",
        "Speech translation",
        "Image classification"
      ],
      "explanation": "A text-to-image model generates new images from prompts.",
      "topic": "Image generation models",
      "sourceUnit": "3-image-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-scenario-06",
      "type": "scenario",
      "prompt": "A designer wants to revise an existing image without remaking everything. Which capability fits?",
      "answer": "Image editing",
      "aliases": [
        "Image editing"
      ],
      "options": [
        "Image editing",
        "Sentiment analysis",
        "Speech recognition",
        "Text indexing"
      ],
      "explanation": "Image generation tools support modifying existing images.",
      "topic": "Image generation models",
      "sourceUnit": "3-image-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-scenario-07",
      "type": "scenario",
      "prompt": "A developer is optimising an internal image prototype for lower cost. Which model variant is worth evaluating?",
      "answer": "GPT-Image-1-Mini",
      "aliases": [
        "GPT-Image-1-Mini"
      ],
      "options": [
        "GPT-Image-1-Mini",
        "Sora 2",
        "GPT-Image-1.5 by default",
        "SpeechRecognizer"
      ],
      "explanation": "The Mini variant is described as cost-efficient.",
      "topic": "Image generation models",
      "sourceUnit": "3-image-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-scenario-08",
      "type": "scenario",
      "prompt": "A content creator wants photorealistic images from text using a partner model in Foundry. Which family is mentioned?",
      "answer": "FLUX",
      "aliases": [
        "FLUX"
      ],
      "options": [
        "FLUX",
        "Azure Speech",
        "Azure SQL",
        "TextAnalyticsClient"
      ],
      "explanation": "The unit identifies Black Forest Labs' FLUX as an option.",
      "topic": "Image generation models",
      "sourceUnit": "3-image-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/3-image-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-scenario-09",
      "type": "scenario",
      "prompt": "A film team wants to create a short video from a still image. Which capability fits?",
      "answer": "Image-to-video generation",
      "aliases": [
        "Image-to-video generation"
      ],
      "options": [
        "Image-to-video generation",
        "Image classification",
        "OCR",
        "Text sentiment"
      ],
      "explanation": "Video generation includes image-to-video workflows.",
      "topic": "Video generation models",
      "sourceUnit": "4-video-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/4-video-generation",
      "coverage": "module"
    },
    {
      "id": "azure-vision-scenario-10",
      "type": "scenario",
      "prompt": "A developer requests video creation by API and later retrieves a finished MP4. Which interface does the lesson describe?",
      "answer": "REST video generation interface",
      "aliases": [
        "REST video generation interface"
      ],
      "options": [
        "REST video generation interface",
        "TextAnalyticsClient",
        "Speech-to-text only",
        "Azure SQL query"
      ],
      "explanation": "The video lesson describes jobs initiated and retrieved with REST.",
      "topic": "Video generation models",
      "sourceUnit": "4-video-generation",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-vision-azure/4-video-generation",
      "coverage": "module"
    }
  ]
});
