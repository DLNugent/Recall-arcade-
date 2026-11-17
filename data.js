window.QUIZ_MODULES = [
  {
    "id": "intro-ai-concepts",
    "title": "Introduction to AI concepts",
    "source": "https://learn.microsoft.com/en-gb/training/modules/get-started-ai-fundamentals/",
    "topics": [
      {
        "id": "Introduction to AI",
        "title": "Introduction to AI",
        "count": 15
      },
      {
        "id": "Generative AI and agents",
        "title": "Generative AI and agents",
        "count": 15
      },
      {
        "id": "Text and natural language",
        "title": "Text and natural language",
        "count": 15
      },
      {
        "id": "Speech",
        "title": "Speech",
        "count": 15
      },
      {
        "id": "Computer vision",
        "title": "Computer vision",
        "count": 15
      },
      {
        "id": "Information extraction",
        "title": "Information extraction",
        "count": 15
      },
      {
        "id": "Responsible AI",
        "title": "Responsible AI",
        "count": 15
      }
    ],
    "questions": [
      {
        "type": "recall",
        "prompt": "What two-letter abbreviation stands for artificial intelligence?",
        "answer": "AI",
        "aliases": [
          "AI",
          "artificial intelligence"
        ],
        "options": [
          "AI",
          "ML",
          "NLP",
          "OCR"
        ],
        "explanation": "AI describes systems performing tasks associated with intelligence.",
        "id": "ita-1",
        "topic": "Introduction to AI"
      },
      {
        "type": "recall",
        "prompt": "What field uses data to train predictive models?",
        "answer": "Machine learning",
        "aliases": [
          "Machine learning",
          "ML"
        ],
        "options": [
          "Machine learning",
          "Computer vision",
          "Speech synthesis",
          "OCR"
        ],
        "explanation": "Machine learning is a foundation for many AI solutions.",
        "id": "ita-2",
        "topic": "Introduction to AI"
      },
      {
        "type": "recall",
        "prompt": "What word describes an AI system's ability to produce an output for a new input?",
        "answer": "Inference",
        "aliases": [
          "Inference"
        ],
        "options": [
          "Inference",
          "Training",
          "Labelling",
          "Indexing"
        ],
        "explanation": "Inference is using a trained model on new input.",
        "id": "ita-3",
        "topic": "Introduction to AI"
      },
      {
        "type": "recall",
        "prompt": "What process adjusts a model from examples before it is used?",
        "answer": "Training",
        "aliases": [
          "Training"
        ],
        "options": [
          "Training",
          "Inference",
          "Deployment",
          "Recognition"
        ],
        "explanation": "Training is the process of learning from example data.",
        "id": "ita-4",
        "topic": "Introduction to AI"
      },
      {
        "type": "recall",
        "prompt": "What term describes data that a model has not seen during training?",
        "answer": "Unseen data",
        "aliases": [
          "Unseen data",
          "new data"
        ],
        "options": [
          "Unseen data",
          "Training data",
          "Labels",
          "Prompts"
        ],
        "explanation": "Unseen data can be used to check generalisation.",
        "id": "ita-5",
        "topic": "Introduction to AI"
      },
      {
        "type": "match",
        "prompt": "Which phrase best describes this module's approach?",
        "answer": "Conceptual overview",
        "aliases": [
          "Conceptual overview"
        ],
        "options": [
          "Mathematical derivations",
          "Model deployment lab",
          "Conceptual overview",
          "Coding tutorial"
        ],
        "explanation": "The introductory unit says the module explores capabilities and basic principles without deep maths or code.",
        "id": "ita-6",
        "topic": "Introduction to AI"
      },
      {
        "type": "match",
        "prompt": "Which is the best example of an AI capability?",
        "answer": "Identifying objects in a photo",
        "aliases": [
          "Identifying objects in a photo"
        ],
        "options": [
          "Identifying objects in a photo",
          "Copying a file byte for byte",
          "Displaying a static web page",
          "Storing a PDF without analysis"
        ],
        "explanation": "Interpreting visual input is an AI workload.",
        "id": "ita-7",
        "topic": "Introduction to AI"
      },
      {
        "type": "match",
        "prompt": "Which task is closest to a predictive AI workload?",
        "answer": "Estimating a future value from past patterns",
        "aliases": [
          "Estimating a future value from past patterns"
        ],
        "options": [
          "Estimating a future value from past patterns",
          "Sorting a list alphabetically",
          "Saving a document",
          "Drawing a fixed logo"
        ],
        "explanation": "Predictive models use learned patterns to estimate outputs.",
        "id": "ita-8",
        "topic": "Introduction to AI"
      },
      {
        "type": "match",
        "prompt": "Which is a reasonable prerequisite for the module?",
        "answer": "No prerequisite is required",
        "aliases": [
          "No prerequisite is required"
        ],
        "options": [
          "Advanced calculus is mandatory",
          "No prerequisite is required",
          "An Azure subscription is mandatory",
          "Python proficiency is mandatory"
        ],
        "explanation": "A conceptual understanding of machine learning helps, but is not required.",
        "id": "ita-9",
        "topic": "Introduction to AI"
      },
      {
        "type": "match",
        "prompt": "What is a model in an AI application?",
        "answer": "A trained component that maps inputs to outputs",
        "aliases": [
          "A trained component that maps inputs to outputs"
        ],
        "options": [
          "A physical computer case",
          "A user-interface colour scheme",
          "A web domain name",
          "A trained component that maps inputs to outputs"
        ],
        "explanation": "Models are trained components used to process inputs.",
        "id": "ita-10",
        "topic": "Introduction to AI"
      },
      {
        "type": "scenario",
        "prompt": "A website identifies the main subject in an uploaded photograph. Which AI area is involved?",
        "answer": "Computer vision",
        "aliases": [
          "Computer vision"
        ],
        "options": [
          "Data encryption",
          "Text translation",
          "Speech synthesis",
          "Computer vision"
        ],
        "explanation": "Computer vision analyses visual content.",
        "id": "ita-11",
        "topic": "Introduction to AI"
      },
      {
        "type": "scenario",
        "prompt": "A mobile assistant listens to a question and transcribes the spoken words. Which capability is this?",
        "answer": "Speech recognition",
        "aliases": [
          "Speech recognition"
        ],
        "options": [
          "Entity redaction",
          "Image segmentation",
          "Speech synthesis",
          "Speech recognition"
        ],
        "explanation": "Speech recognition converts spoken language into text.",
        "id": "ita-12",
        "topic": "Introduction to AI"
      },
      {
        "type": "scenario",
        "prompt": "A tool drafts a new paragraph from a user's request. What AI category fits best?",
        "answer": "Generative AI",
        "aliases": [
          "Generative AI"
        ],
        "options": [
          "Generative AI",
          "Object detection",
          "Optical character recognition",
          "Image classification"
        ],
        "explanation": "Generative AI produces new content in response to prompts.",
        "id": "ita-13",
        "topic": "Introduction to AI"
      },
      {
        "type": "scenario",
        "prompt": "A business wants AI to read scanned invoices. Which capability is especially relevant?",
        "answer": "Information extraction",
        "aliases": [
          "Information extraction"
        ],
        "options": [
          "Text-to-speech",
          "Information extraction",
          "Speech synthesis",
          "Visual search"
        ],
        "explanation": "Document processing extracts useful fields from forms.",
        "id": "ita-14",
        "topic": "Introduction to AI"
      },
      {
        "type": "scenario",
        "prompt": "A model is deployed to handle user requests after training. What is it doing when producing responses?",
        "answer": "Inference",
        "aliases": [
          "Inference"
        ],
        "options": [
          "Inference",
          "Annotation",
          "Data collection",
          "Training"
        ],
        "explanation": "Applying a trained model to an input is inference.",
        "id": "ita-15",
        "topic": "Introduction to AI"
      },
      {
        "type": "recall",
        "prompt": "What is the user's text instruction to a language model called?",
        "answer": "Prompt",
        "aliases": [
          "Prompt"
        ],
        "options": [
          "Prompt",
          "Token",
          "Label",
          "Annotation"
        ],
        "explanation": "A prompt initiates content generation.",
        "id": "gaaa-1",
        "topic": "Generative AI and agents"
      },
      {
        "type": "recall",
        "prompt": "What three-letter abbreviation is used for a large language model?",
        "answer": "LLM",
        "aliases": [
          "LLM"
        ],
        "options": [
          "LLM",
          "SLM",
          "OCR",
          "PII"
        ],
        "explanation": "LLM means large language model.",
        "id": "gaaa-2",
        "topic": "Generative AI and agents"
      },
      {
        "type": "recall",
        "prompt": "What three-letter abbreviation is used for a small language model?",
        "answer": "SLM",
        "aliases": [
          "SLM"
        ],
        "options": [
          "SLM",
          "LLM",
          "NLP",
          "OCR"
        ],
        "explanation": "SLM means small language model.",
        "id": "gaaa-3",
        "topic": "Generative AI and agents"
      },
      {
        "type": "recall",
        "prompt": "What term describes meaningful relationships between words?",
        "answer": "Semantic relationships",
        "aliases": [
          "Semantic relationships",
          "semantics"
        ],
        "options": [
          "Semantic relationships",
          "Syntax only",
          "Image classification",
          "Object detection"
        ],
        "explanation": "Semantic relationships help language models generate coherent text.",
        "id": "gaaa-4",
        "topic": "Generative AI and agents"
      },
      {
        "type": "recall",
        "prompt": "What kind of tool gives an agent access to search engines or databases?",
        "answer": "Knowledge tool",
        "aliases": [
          "Knowledge tool",
          "knowledge tools"
        ],
        "options": [
          "Knowledge tool",
          "Action tool",
          "Content filter",
          "Speech synthesizer"
        ],
        "explanation": "Knowledge tools retrieve information.",
        "id": "gaaa-5",
        "topic": "Generative AI and agents"
      },
      {
        "type": "match",
        "prompt": "Which agent element defines its role and behaviour?",
        "answer": "Instructions",
        "aliases": [
          "Instructions"
        ],
        "options": [
          "Camera hardware",
          "Action logs",
          "Instructions",
          "Training labels"
        ],
        "explanation": "Instructions are usually encoded as a system prompt.",
        "id": "gaaa-6",
        "topic": "Generative AI and agents"
      },
      {
        "type": "match",
        "prompt": "Which component is the reasoning 'brain' in Microsoft's simplified agent diagram?",
        "answer": "Language model",
        "aliases": [
          "Language model"
        ],
        "options": [
          "Language model",
          "Calendar",
          "Microphone",
          "Database"
        ],
        "explanation": "The language model provides language understanding and reasoning.",
        "id": "gaaa-7",
        "topic": "Generative AI and agents"
      },
      {
        "type": "match",
        "prompt": "Which example is an action tool?",
        "answer": "Sending an email",
        "aliases": [
          "Sending an email"
        ],
        "options": [
          "Looking up web results",
          "Sending an email",
          "Searching a database",
          "Reading reference documents"
        ],
        "explanation": "Action tools let agents take actions in external systems.",
        "id": "gaaa-8",
        "topic": "Generative AI and agents"
      },
      {
        "type": "match",
        "prompt": "Which statement best describes LLMs compared with SLMs?",
        "answer": "LLMs generally have broader capabilities but greater resource costs",
        "aliases": [
          "LLMs generally have broader capabilities but greater resource costs"
        ],
        "options": [
          "LLMs always run locally on phones",
          "SLMs never generate text",
          "SLMs are trained only on images",
          "LLMs generally have broader capabilities but greater resource costs"
        ],
        "explanation": "Large models can generalise well but are often costlier to train and use.",
        "id": "gaaa-9",
        "topic": "Generative AI and agents"
      },
      {
        "type": "match",
        "prompt": "Which is a common generative AI use case?",
        "answer": "Summarising a complex document",
        "aliases": [
          "Summarising a complex document"
        ],
        "options": [
          "Summarising a complex document",
          "Locating pixels in an image",
          "Measuring a sound waveform",
          "Detecting a bounding box"
        ],
        "explanation": "Generative AI can explain and summarise text.",
        "id": "gaaa-10",
        "topic": "Generative AI and agents"
      },
      {
        "type": "scenario",
        "prompt": "An assistant searches a documentation site before answering. Which agent element is being used?",
        "answer": "Knowledge tool",
        "aliases": [
          "Knowledge tool"
        ],
        "options": [
          "Object detection",
          "Knowledge tool",
          "Action tool",
          "Speech synthesis"
        ],
        "explanation": "Searching external information uses a knowledge tool.",
        "id": "gaaa-11",
        "topic": "Generative AI and agents"
      },
      {
        "type": "scenario",
        "prompt": "An assistant adds a meeting to a calendar. Which tool category fits?",
        "answer": "Action tool",
        "aliases": [
          "Action tool"
        ],
        "options": [
          "Action tool",
          "Semantic segmentation",
          "Sentiment detection",
          "Knowledge tool"
        ],
        "explanation": "The tool is acting on a calendar, not merely reading it.",
        "id": "gaaa-12",
        "topic": "Generative AI and agents"
      },
      {
        "type": "scenario",
        "prompt": "A company needs a focused assistant running on a device with limited resources. Which model category is worth considering?",
        "answer": "Small language model",
        "aliases": [
          "Small language model"
        ],
        "options": [
          "Speech recognition model",
          "Only the largest language model",
          "Object detection model",
          "Small language model"
        ],
        "explanation": "Small models may suit focused local deployments.",
        "id": "gaaa-13",
        "topic": "Generative AI and agents"
      },
      {
        "type": "scenario",
        "prompt": "An AI chatbot writes original dialogue for a visitor. What makes it generative?",
        "answer": "It creates new text based on a prompt",
        "aliases": [
          "It creates new text based on a prompt"
        ],
        "options": [
          "It creates new text based on a prompt",
          "It only retrieves an exact stored paragraph",
          "It records microphone audio",
          "It scans image pixels"
        ],
        "explanation": "Generative AI uses learned relationships to produce new content.",
        "id": "gaaa-14",
        "topic": "Generative AI and agents"
      },
      {
        "type": "scenario",
        "prompt": "A chatbot uses a model, detailed role instructions, and external tools. What does this most closely describe?",
        "answer": "An AI agent",
        "aliases": [
          "An AI agent"
        ],
        "options": [
          "A training label",
          "An AI agent",
          "A segmentation mask",
          "An OCR pipeline"
        ],
        "explanation": "Those three components are the core simplified agent structure.",
        "id": "gaaa-15",
        "topic": "Generative AI and agents"
      },
      {
        "type": "recall",
        "prompt": "What three-letter term denotes natural language processing?",
        "answer": "NLP",
        "aliases": [
          "NLP"
        ],
        "options": [
          "NLP",
          "LLM",
          "OCR",
          "PII"
        ],
        "explanation": "NLP covers techniques for understanding and analysing human language.",
        "id": "tanl-1",
        "topic": "Text and natural language"
      },
      {
        "type": "recall",
        "prompt": "What term means assigning a document to a category?",
        "answer": "Text classification",
        "aliases": [
          "Text classification",
          "classification"
        ],
        "options": [
          "Text classification",
          "Speech synthesis",
          "OCR",
          "Segmentation"
        ],
        "explanation": "Text classification places text in a selected category.",
        "id": "tanl-2",
        "topic": "Text and natural language"
      },
      {
        "type": "recall",
        "prompt": "What technique determines whether a review is positive, negative, or neutral?",
        "answer": "Sentiment analysis",
        "aliases": [
          "Sentiment analysis"
        ],
        "options": [
          "Sentiment analysis",
          "Language detection",
          "Speech recognition",
          "OCR"
        ],
        "explanation": "Sentiment analysis evaluates the attitude expressed in text.",
        "id": "tanl-3",
        "topic": "Text and natural language"
      },
      {
        "type": "recall",
        "prompt": "What technique identifies named people, places, or organisations in text?",
        "answer": "Entity detection",
        "aliases": [
          "Entity detection",
          "named entity recognition",
          "entity recognition"
        ],
        "options": [
          "Entity detection",
          "Object detection",
          "Speech synthesis",
          "Summarisation"
        ],
        "explanation": "Entity detection finds mentions of real-world entities in text.",
        "id": "tanl-4",
        "topic": "Text and natural language"
      },
      {
        "type": "recall",
        "prompt": "What three-letter abbreviation means personally identifiable information?",
        "answer": "PII",
        "aliases": [
          "PII"
        ],
        "options": [
          "PII",
          "NLP",
          "OCR",
          "LLM"
        ],
        "explanation": "PII can include names, addresses and phone numbers.",
        "id": "tanl-5",
        "topic": "Text and natural language"
      },
      {
        "type": "match",
        "prompt": "Which NLP task identifies the language used in a document?",
        "answer": "Language detection",
        "aliases": [
          "Language detection"
        ],
        "options": [
          "Topic modelling",
          "Speech synthesis",
          "Image classification",
          "Language detection"
        ],
        "explanation": "Language detection identifies one or more languages present.",
        "id": "tanl-6",
        "topic": "Text and natural language"
      },
      {
        "type": "match",
        "prompt": "Which task reduces a long article while preserving its key ideas?",
        "answer": "Summarisation",
        "aliases": [
          "Summarisation"
        ],
        "options": [
          "Translation",
          "Classification",
          "Summarisation",
          "Transcription"
        ],
        "explanation": "Summarisation shortens text while retaining the main points.",
        "id": "tanl-7",
        "topic": "Text and natural language"
      },
      {
        "type": "match",
        "prompt": "Which task extracts significant words and phrases?",
        "answer": "Key-term extraction",
        "aliases": [
          "Key-term extraction"
        ],
        "options": [
          "Object detection",
          "Key-term extraction",
          "Image segmentation",
          "Speech synthesis"
        ],
        "explanation": "Key-term extraction identifies important terms.",
        "id": "tanl-8",
        "topic": "Text and natural language"
      },
      {
        "type": "match",
        "prompt": "Which scenario may favour specialist NLP tools with predictable results or custom rules?",
        "answer": "Rule-based text classification",
        "aliases": [
          "Rule-based text classification"
        ],
        "options": [
          "Object localisation",
          "3D video rendering",
          "Photorealistic image generation",
          "Rule-based text classification"
        ],
        "explanation": "Microsoft notes specialist NLP for repeatable classification and extraction workflows.",
        "id": "tanl-9",
        "topic": "Text and natural language"
      },
      {
        "type": "match",
        "prompt": "Which task is associated with privacy protection in text?",
        "answer": "PII redaction",
        "aliases": [
          "PII redaction"
        ],
        "options": [
          "PII redaction",
          "Visual search",
          "Speech synthesis",
          "Text-to-image generation"
        ],
        "explanation": "Redacting personal information helps protect privacy.",
        "id": "tanl-10",
        "topic": "Text and natural language"
      },
      {
        "type": "scenario",
        "prompt": "A review says 'The service was excellent'. What NLP technique classifies the opinion?",
        "answer": "Sentiment analysis",
        "aliases": [
          "Sentiment analysis"
        ],
        "options": [
          "Sentiment analysis",
          "Speech synthesis",
          "Entity detection",
          "Optical character recognition"
        ],
        "explanation": "Sentiment analysis determines whether language conveys positive, negative or neutral sentiment.",
        "id": "tanl-11",
        "topic": "Text and natural language"
      },
      {
        "type": "scenario",
        "prompt": "A call transcript needs every mention of companies and people. What technique is relevant?",
        "answer": "Entity detection",
        "aliases": [
          "Entity detection"
        ],
        "options": [
          "Speech synthesis",
          "Text-to-speech",
          "Entity detection",
          "Image classification"
        ],
        "explanation": "Entity detection identifies named entities in text.",
        "id": "tanl-12",
        "topic": "Text and natural language"
      },
      {
        "type": "scenario",
        "prompt": "A workflow first needs to identify whether an email is in French or Spanish. What should it use?",
        "answer": "Language detection",
        "aliases": [
          "Language detection"
        ],
        "options": [
          "Speech synthesis",
          "Sentiment analysis",
          "Object detection",
          "Language detection"
        ],
        "explanation": "Language detection identifies which languages are present.",
        "id": "tanl-13",
        "topic": "Text and natural language"
      },
      {
        "type": "scenario",
        "prompt": "A company masks telephone numbers before sharing transcripts. What is the task?",
        "answer": "PII redaction",
        "aliases": [
          "PII redaction"
        ],
        "options": [
          "PII redaction",
          "Audio generation",
          "Image captioning",
          "Object detection"
        ],
        "explanation": "Telephone numbers are examples of personally identifiable information.",
        "id": "tanl-14",
        "topic": "Text and natural language"
      },
      {
        "type": "scenario",
        "prompt": "A dashboard sorts customer messages into 'billing', 'technical', and 'other'. What is this?",
        "answer": "Text classification",
        "aliases": [
          "Text classification"
        ],
        "options": [
          "Text classification",
          "Speech synthesis",
          "Image segmentation",
          "Language generation"
        ],
        "explanation": "Assigning categories is text classification.",
        "id": "tanl-15",
        "topic": "Text and natural language"
      },
      {
        "type": "recall",
        "prompt": "What capability converts spoken audio into written words?",
        "answer": "Speech recognition",
        "aliases": [
          "Speech recognition",
          "speech-to-text",
          "STT"
        ],
        "options": [
          "Speech recognition",
          "Speech synthesis",
          "OCR",
          "Object detection"
        ],
        "explanation": "Speech recognition transcribes spoken language.",
        "id": "s-1",
        "topic": "Speech"
      },
      {
        "type": "recall",
        "prompt": "What capability converts written words to audible speech?",
        "answer": "Speech synthesis",
        "aliases": [
          "Speech synthesis",
          "text-to-speech",
          "TTS"
        ],
        "options": [
          "Speech synthesis",
          "Speech recognition",
          "Sentiment analysis",
          "OCR"
        ],
        "explanation": "Speech synthesis produces audible speech from text.",
        "id": "s-2",
        "topic": "Speech"
      },
      {
        "type": "recall",
        "prompt": "What is the common abbreviation for text-to-speech?",
        "answer": "TTS",
        "aliases": [
          "TTS"
        ],
        "options": [
          "TTS",
          "STT",
          "OCR",
          "PII"
        ],
        "explanation": "Text-to-speech is commonly abbreviated TTS.",
        "id": "s-3",
        "topic": "Speech"
      },
      {
        "type": "recall",
        "prompt": "What is the common abbreviation for speech-to-text?",
        "answer": "STT",
        "aliases": [
          "STT"
        ],
        "options": [
          "STT",
          "TTS",
          "OCR",
          "NLP"
        ],
        "explanation": "Speech-to-text is commonly abbreviated STT.",
        "id": "s-4",
        "topic": "Speech"
      },
      {
        "type": "recall",
        "prompt": "What term describes creating a written record of a meeting's speech?",
        "answer": "Transcription",
        "aliases": [
          "Transcription"
        ],
        "options": [
          "Transcription",
          "Segmentation",
          "Classification",
          "Image tagging"
        ],
        "explanation": "Transcription writes out what was spoken.",
        "id": "s-5",
        "topic": "Speech"
      },
      {
        "type": "match",
        "prompt": "Which direction describes speech recognition?",
        "answer": "Audio to text",
        "aliases": [
          "Audio to text"
        ],
        "options": [
          "Text to image",
          "Image to label",
          "Audio to text",
          "Text to audio"
        ],
        "explanation": "Speech recognition interprets spoken words, frequently by transcribing them.",
        "id": "s-6",
        "topic": "Speech"
      },
      {
        "type": "match",
        "prompt": "Which direction describes speech synthesis?",
        "answer": "Text to audio",
        "aliases": [
          "Text to audio"
        ],
        "options": [
          "Audio to bounding boxes",
          "Pixels to labels",
          "Audio to text",
          "Text to audio"
        ],
        "explanation": "Speech synthesis vocalises text.",
        "id": "s-7",
        "topic": "Speech"
      },
      {
        "type": "match",
        "prompt": "Which is a use of AI speech technology?",
        "answer": "Automated meeting transcription",
        "aliases": [
          "Automated meeting transcription"
        ],
        "options": [
          "Receipt field extraction",
          "Photograph object localisation",
          "Automated meeting transcription",
          "Pixel-level image masking"
        ],
        "explanation": "Meeting transcription uses speech recognition.",
        "id": "s-8",
        "topic": "Speech"
      },
      {
        "type": "match",
        "prompt": "Which challenge is specifically relevant to speech systems?",
        "answer": "Background noise",
        "aliases": [
          "Background noise"
        ],
        "options": [
          "Bounding-box overlap",
          "Image rotation",
          "Document page margins",
          "Background noise"
        ],
        "explanation": "Speech systems must deal with noise and interrupted speakers.",
        "id": "s-9",
        "topic": "Speech"
      },
      {
        "type": "match",
        "prompt": "Which capability supports spoken answers from a digital assistant?",
        "answer": "Speech synthesis",
        "aliases": [
          "Speech synthesis"
        ],
        "options": [
          "Image classification",
          "Text entity extraction",
          "OCR",
          "Speech synthesis"
        ],
        "explanation": "The assistant's text response can be turned into audio.",
        "id": "s-10",
        "topic": "Speech"
      },
      {
        "type": "scenario",
        "prompt": "A person dictates a message and sees words appear on screen. What is operating?",
        "answer": "Speech recognition",
        "aliases": [
          "Speech recognition"
        ],
        "options": [
          "Object detection",
          "Speech recognition",
          "Semantic segmentation",
          "Speech synthesis"
        ],
        "explanation": "Speech-to-text produces the transcript.",
        "id": "s-11",
        "topic": "Speech"
      },
      {
        "type": "scenario",
        "prompt": "A navigation app reads directions aloud. What is operating?",
        "answer": "Speech synthesis",
        "aliases": [
          "Speech synthesis"
        ],
        "options": [
          "Speech synthesis",
          "Optical character recognition",
          "Image segmentation",
          "Text classification"
        ],
        "explanation": "Text-to-speech reads instructions aloud.",
        "id": "s-12",
        "topic": "Speech"
      },
      {
        "type": "scenario",
        "prompt": "A meeting app generates a written record of discussion. Which capability is key?",
        "answer": "Speech recognition",
        "aliases": [
          "Speech recognition"
        ],
        "options": [
          "Visual search",
          "Speech recognition",
          "Image classification",
          "Speech synthesis"
        ],
        "explanation": "The audio must be converted to text.",
        "id": "s-13",
        "topic": "Speech"
      },
      {
        "type": "scenario",
        "prompt": "An assistant takes a spoken command and replies out loud. Which pair is required?",
        "answer": "Speech recognition and synthesis",
        "aliases": [
          "Speech recognition and synthesis"
        ],
        "options": [
          "Object detection and segmentation",
          "Entity extraction and OCR",
          "Speech recognition and synthesis",
          "Image classification and OCR"
        ],
        "explanation": "Input requires speech recognition; output requires speech synthesis.",
        "id": "s-14",
        "topic": "Speech"
      },
      {
        "type": "scenario",
        "prompt": "A multilingual call service converts speech into another spoken language. Which application is it?",
        "answer": "Speech translation",
        "aliases": [
          "Speech translation"
        ],
        "options": [
          "Speech translation",
          "PII redaction",
          "Visual search",
          "Image tagging"
        ],
        "explanation": "Speech translation combines spoken-language interpretation and generation.",
        "id": "s-15",
        "topic": "Speech"
      },
      {
        "type": "recall",
        "prompt": "What field of AI interprets visual inputs such as photographs or video?",
        "answer": "Computer vision",
        "aliases": [
          "Computer vision"
        ],
        "options": [
          "Computer vision",
          "Speech synthesis",
          "Sentiment analysis",
          "NLP"
        ],
        "explanation": "Computer vision analyses images and video.",
        "id": "cv-1",
        "topic": "Computer vision"
      },
      {
        "type": "recall",
        "prompt": "What technique predicts a main label for an entire image?",
        "answer": "Image classification",
        "aliases": [
          "Image classification"
        ],
        "options": [
          "Image classification",
          "Object detection",
          "Semantic segmentation",
          "Speech recognition"
        ],
        "explanation": "Image classification identifies the subject of an image.",
        "id": "cv-2",
        "topic": "Computer vision"
      },
      {
        "type": "recall",
        "prompt": "What technique identifies the locations of objects within an image?",
        "answer": "Object detection",
        "aliases": [
          "Object detection"
        ],
        "options": [
          "Object detection",
          "Image classification",
          "Text classification",
          "Speech synthesis"
        ],
        "explanation": "Object detection locates individual items in an image.",
        "id": "cv-3",
        "topic": "Computer vision"
      },
      {
        "type": "recall",
        "prompt": "What technique labels individual pixels belonging to an object?",
        "answer": "Semantic segmentation",
        "aliases": [
          "Semantic segmentation"
        ],
        "options": [
          "Semantic segmentation",
          "Image classification",
          "Language detection",
          "Speech synthesis"
        ],
        "explanation": "Semantic segmentation works at pixel level.",
        "id": "cv-4",
        "topic": "Computer vision"
      },
      {
        "type": "recall",
        "prompt": "What term describes a model combining visual and text features?",
        "answer": "Multimodal model",
        "aliases": [
          "Multimodal model",
          "multi-modal model"
        ],
        "options": [
          "Multimodal model",
          "Audio-only model",
          "Text classifier",
          "Speech synthesizer"
        ],
        "explanation": "Multimodal models can connect images and text descriptions.",
        "id": "cv-5",
        "topic": "Computer vision"
      },
      {
        "type": "match",
        "prompt": "Which visual output is most closely associated with object detection?",
        "answer": "Bounding boxes around objects",
        "aliases": [
          "Bounding boxes around objects"
        ],
        "options": [
          "One category for a full document",
          "Bounding boxes around objects",
          "A speech transcript",
          "A sentiment score"
        ],
        "explanation": "Object detection typically identifies regions containing objects.",
        "id": "cv-6",
        "topic": "Computer vision"
      },
      {
        "type": "match",
        "prompt": "What makes semantic segmentation more detailed than box-based object detection?",
        "answer": "It assigns labels at pixel level",
        "aliases": [
          "It assigns labels at pixel level"
        ],
        "options": [
          "It assigns labels at pixel level",
          "It produces spoken audio",
          "It only counts objects",
          "It identifies document language"
        ],
        "explanation": "Segmentation identifies specific image pixels belonging to objects.",
        "id": "cv-7",
        "topic": "Computer vision"
      },
      {
        "type": "match",
        "prompt": "Which model suits identifying the main subject in a photograph?",
        "answer": "Image classification",
        "aliases": [
          "Image classification"
        ],
        "options": [
          "Speech synthesis",
          "Sentiment analysis",
          "Image classification",
          "Language detection"
        ],
        "explanation": "Classification predicts a main image label.",
        "id": "cv-8",
        "topic": "Computer vision"
      },
      {
        "type": "match",
        "prompt": "What can multimodal models combine?",
        "answer": "Visual features and text",
        "aliases": [
          "Visual features and text"
        ],
        "options": [
          "Only table columns",
          "Visual features and text",
          "Only microphone signals",
          "Only numerical timestamps"
        ],
        "explanation": "Microsoft describes combining image features and associated text descriptions.",
        "id": "cv-9",
        "topic": "Computer vision"
      },
      {
        "type": "match",
        "prompt": "Which is a computer vision application?",
        "answer": "Monitoring retail shelf stock from video",
        "aliases": [
          "Monitoring retail shelf stock from video"
        ],
        "options": [
          "Monitoring retail shelf stock from video",
          "Translating a paragraph",
          "Reading an answer aloud",
          "Summarising a meeting transcript"
        ],
        "explanation": "Video analysis can identify items and stock levels.",
        "id": "cv-10",
        "topic": "Computer vision"
      },
      {
        "type": "scenario",
        "prompt": "A camera system places rectangles around every bicycle on a street. What is it doing?",
        "answer": "Object detection",
        "aliases": [
          "Object detection"
        ],
        "options": [
          "Language detection",
          "Object detection",
          "Text classification",
          "Speech synthesis"
        ],
        "explanation": "Bounding boxes indicate the position of each detected object.",
        "id": "cv-11",
        "topic": "Computer vision"
      },
      {
        "type": "scenario",
        "prompt": "A photo app labels an uploaded image 'cat'. Which task best fits?",
        "answer": "Image classification",
        "aliases": [
          "Image classification"
        ],
        "options": [
          "Speech recognition",
          "PII redaction",
          "Text summarisation",
          "Image classification"
        ],
        "explanation": "It assigns a main label to an image.",
        "id": "cv-12",
        "topic": "Computer vision"
      },
      {
        "type": "scenario",
        "prompt": "A system colours each pixel belonging to the road in a driving scene. What technique is used?",
        "answer": "Semantic segmentation",
        "aliases": [
          "Semantic segmentation"
        ],
        "options": [
          "Speech translation",
          "Sentiment analysis",
          "Image classification",
          "Semantic segmentation"
        ],
        "explanation": "Pixel-level identification is semantic segmentation.",
        "id": "cv-13",
        "topic": "Computer vision"
      },
      {
        "type": "scenario",
        "prompt": "A service generates natural-language descriptions of uploaded photos. What may help?",
        "answer": "Multimodal model",
        "aliases": [
          "Multimodal model"
        ],
        "options": [
          "Speech-to-text only",
          "Text classification only",
          "Multimodal model",
          "Audio-only model"
        ],
        "explanation": "A multimodal model associates visual information with text.",
        "id": "cv-14",
        "topic": "Computer vision"
      },
      {
        "type": "scenario",
        "prompt": "A security camera needs to locate people inside frames. What task is most relevant?",
        "answer": "Object detection",
        "aliases": [
          "Object detection"
        ],
        "options": [
          "Speech synthesis",
          "Sentiment analysis",
          "Object detection",
          "Language detection"
        ],
        "explanation": "Object detection finds objects and their positions.",
        "id": "cv-15",
        "topic": "Computer vision"
      },
      {
        "type": "recall",
        "prompt": "What three-letter abbreviation identifies the technology used to recognise text in images?",
        "answer": "OCR",
        "aliases": [
          "OCR"
        ],
        "options": [
          "OCR",
          "NLP",
          "LLM",
          "TTS"
        ],
        "explanation": "OCR is optical character recognition.",
        "id": "ie-1",
        "topic": "Information extraction"
      },
      {
        "type": "recall",
        "prompt": "What does OCR stand for?",
        "answer": "Optical character recognition",
        "aliases": [
          "Optical character recognition"
        ],
        "options": [
          "Optical character recognition",
          "Object classification reasoning",
          "Output content retrieval",
          "Optical colour rendering"
        ],
        "explanation": "OCR recognises text shown in visual data.",
        "id": "ie-2",
        "topic": "Information extraction"
      },
      {
        "type": "recall",
        "prompt": "What term describes data that is not organised into fixed fields, such as scans and recordings?",
        "answer": "Unstructured data",
        "aliases": [
          "Unstructured data"
        ],
        "options": [
          "Unstructured data",
          "Structured table",
          "Model parameter",
          "Bounding box"
        ],
        "explanation": "Unstructured sources include forms, images and recordings.",
        "id": "ie-3",
        "topic": "Information extraction"
      },
      {
        "type": "recall",
        "prompt": "What document type is used in Microsoft's example of extracting fields for expense claims?",
        "answer": "Receipt",
        "aliases": [
          "Receipt",
          "receipts"
        ],
        "options": [
          "Receipt",
          "Video frame",
          "Satellite photograph",
          "Audio waveform"
        ],
        "explanation": "Microsoft demonstrates extracting values from a receipt.",
        "id": "ie-4",
        "topic": "Information extraction"
      },
      {
        "type": "recall",
        "prompt": "What is the general task of finding specific fields in scanned forms called?",
        "answer": "Information extraction",
        "aliases": [
          "Information extraction",
          "document information extraction"
        ],
        "options": [
          "Information extraction",
          "Speech synthesis",
          "Image classification",
          "Image generation"
        ],
        "explanation": "Information extraction finds useful values in documents.",
        "id": "ie-5",
        "topic": "Information extraction"
      },
      {
        "type": "match",
        "prompt": "What does OCR primarily identify in a scanned document?",
        "answer": "Text and its location",
        "aliases": [
          "Text and its location"
        ],
        "options": [
          "The sentiment of a speaker",
          "Future stock prices",
          "The document owner's intent",
          "Text and its location"
        ],
        "explanation": "OCR identifies text from an image, often along with text locations.",
        "id": "ie-6",
        "topic": "Information extraction"
      },
      {
        "type": "match",
        "prompt": "What often follows OCR in a document processing pipeline?",
        "answer": "Interpretation of fields and values",
        "aliases": [
          "Interpretation of fields and values"
        ],
        "options": [
          "Speech synthesis",
          "Image generation",
          "Language translation only",
          "Interpretation of fields and values"
        ],
        "explanation": "An analytical model may map recognised text to structured fields.",
        "id": "ie-7",
        "topic": "Information extraction"
      },
      {
        "type": "match",
        "prompt": "Which source is an example of unstructured data?",
        "answer": "A scanned handwritten form",
        "aliases": [
          "A scanned handwritten form"
        ],
        "options": [
          "A normalised database table",
          "A CSV with fixed columns",
          "A relational database row",
          "A scanned handwritten form"
        ],
        "explanation": "Scanned forms are unstructured input sources.",
        "id": "ie-8",
        "topic": "Information extraction"
      },
      {
        "type": "match",
        "prompt": "Which is a common information-extraction application?",
        "answer": "Processing expense claims",
        "aliases": [
          "Processing expense claims"
        ],
        "options": [
          "Processing expense claims",
          "Identifying sentiment in reviews",
          "Generating speech from text",
          "Classifying an image's main subject"
        ],
        "explanation": "Expense claims can extract dates, amounts and other fields.",
        "id": "ie-9",
        "topic": "Information extraction"
      },
      {
        "type": "match",
        "prompt": "Which is an example of an insight extracted from meeting recordings?",
        "answer": "Follow-up actions",
        "aliases": [
          "Follow-up actions"
        ],
        "options": [
          "Camera focal length",
          "Follow-up actions",
          "Pixel colour temperature",
          "Audio file extension"
        ],
        "explanation": "Meeting analysis can identify key points and next actions.",
        "id": "ie-10",
        "topic": "Information extraction"
      },
      {
        "type": "scenario",
        "prompt": "An app reads a scanned receipt and extracts the total amount. Which combination is appropriate?",
        "answer": "OCR plus field interpretation",
        "aliases": [
          "OCR plus field interpretation"
        ],
        "options": [
          "Speech synthesis plus segmentation",
          "Object detection plus voice cloning",
          "OCR plus field interpretation",
          "Image generation plus translation"
        ],
        "explanation": "OCR reads the text and field analysis finds the total.",
        "id": "ie-11",
        "topic": "Information extraction"
      },
      {
        "type": "scenario",
        "prompt": "An archive digitises paper census records for searching. Which workload fits?",
        "answer": "Document information extraction",
        "aliases": [
          "Document information extraction"
        ],
        "options": [
          "Sentiment scoring",
          "Text-to-image generation",
          "Speech generation",
          "Document information extraction"
        ],
        "explanation": "Information extraction can digitise records and support indexing.",
        "id": "ie-12",
        "topic": "Information extraction"
      },
      {
        "type": "scenario",
        "prompt": "A photo of a device shows a serial number to be read. Which technology is a likely starting point?",
        "answer": "OCR",
        "aliases": [
          "OCR"
        ],
        "options": [
          "Speech synthesis",
          "Text translation",
          "OCR",
          "Sentiment analysis"
        ],
        "explanation": "OCR reads printed text visible in photographs.",
        "id": "ie-13",
        "topic": "Information extraction"
      },
      {
        "type": "scenario",
        "prompt": "A system examines meeting transcripts and lists next steps. Which outcome is this?",
        "answer": "Insight extraction",
        "aliases": [
          "Insight extraction"
        ],
        "options": [
          "Speech synthesis",
          "Object localisation",
          "Insight extraction",
          "Image classification"
        ],
        "explanation": "The system extracts actionable information from recorded discussion.",
        "id": "ie-14",
        "topic": "Information extraction"
      },
      {
        "type": "scenario",
        "prompt": "A company wants to index thousands of scanned forms for search. Which capability can help?",
        "answer": "OCR and document extraction",
        "aliases": [
          "OCR and document extraction"
        ],
        "options": [
          "Speech synthesis alone",
          "Text-to-speech alone",
          "Image classification alone",
          "OCR and document extraction"
        ],
        "explanation": "Recognised text and extracted fields can support search indexing.",
        "id": "ie-15",
        "topic": "Information extraction"
      },
      {
        "type": "recall",
        "prompt": "Which principle aims to minimise biased or discriminatory outcomes?",
        "answer": "Fairness",
        "aliases": [
          "Fairness"
        ],
        "options": [
          "Fairness",
          "Transparency",
          "Accountability",
          "Reliability"
        ],
        "explanation": "Fairness asks whether outcomes are biased or discriminatory.",
        "id": "ra-1",
        "topic": "Responsible AI"
      },
      {
        "type": "recall",
        "prompt": "Which principle addresses protection of personal information and systems?",
        "answer": "Privacy and security",
        "aliases": [
          "Privacy and security"
        ],
        "options": [
          "Privacy and security",
          "Inclusiveness",
          "Transparency",
          "Reliability"
        ],
        "explanation": "Privacy and security protect sensitive personal and organisational information.",
        "id": "ra-2",
        "topic": "Responsible AI"
      },
      {
        "type": "recall",
        "prompt": "Which principle ensures people with differing needs can use AI systems?",
        "answer": "Inclusiveness",
        "aliases": [
          "Inclusiveness",
          "inclusion"
        ],
        "options": [
          "Inclusiveness",
          "Fairness",
          "Accountability",
          "Transparency"
        ],
        "explanation": "Inclusiveness works to prevent groups from being excluded.",
        "id": "ra-3",
        "topic": "Responsible AI"
      },
      {
        "type": "recall",
        "prompt": "Which principle requires openness about how AI works and its limitations?",
        "answer": "Transparency",
        "aliases": [
          "Transparency"
        ],
        "options": [
          "Transparency",
          "Privacy",
          "Safety",
          "Classification"
        ],
        "explanation": "Transparency includes disclosing AI use and relevant limitations.",
        "id": "ra-4",
        "topic": "Responsible AI"
      },
      {
        "type": "recall",
        "prompt": "Which principle means people and organisations retain responsibility for their AI solutions?",
        "answer": "Accountability",
        "aliases": [
          "Accountability"
        ],
        "options": [
          "Accountability",
          "Speech recognition",
          "Classification",
          "Inference"
        ],
        "explanation": "Accountability requires governance and clear responsibility.",
        "id": "ra-5",
        "topic": "Responsible AI"
      },
      {
        "type": "match",
        "prompt": "Which principle addresses the fact that AI can make mistakes?",
        "answer": "Reliability and safety",
        "aliases": [
          "Reliability and safety"
        ],
        "options": [
          "Language detection",
          "Inclusiveness",
          "Transparency",
          "Reliability and safety"
        ],
        "explanation": "Reliability and safety mitigate risks from fallible AI systems.",
        "id": "ra-6",
        "topic": "Responsible AI"
      },
      {
        "type": "match",
        "prompt": "Which principle concerns unequal treatment caused by biased training data?",
        "answer": "Fairness",
        "aliases": [
          "Fairness"
        ],
        "options": [
          "Object detection",
          "Fairness",
          "Accountability",
          "Speech synthesis"
        ],
        "explanation": "Bias in data can produce discriminatory results.",
        "id": "ra-7",
        "topic": "Responsible AI"
      },
      {
        "type": "match",
        "prompt": "Which measure helps prevent AI-generated harmful material?",
        "answer": "Content filtering",
        "aliases": [
          "Content filtering"
        ],
        "options": [
          "Increasing font size",
          "Changing a domain name",
          "Increasing image resolution",
          "Content filtering"
        ],
        "explanation": "Content filters can mitigate harmful outputs, though they are not sufficient alone.",
        "id": "ra-8",
        "topic": "Responsible AI"
      },
      {
        "type": "match",
        "prompt": "Which principle focuses on describing an AI system's use and limitations?",
        "answer": "Transparency",
        "aliases": [
          "Transparency"
        ],
        "options": [
          "Reliability",
          "Transparency",
          "Inclusiveness",
          "Privacy and security"
        ],
        "explanation": "Transparency requires clear information about the use and limits of AI.",
        "id": "ra-9",
        "topic": "Responsible AI"
      },
      {
        "type": "match",
        "prompt": "Which principle requires governance over AI deployment decisions?",
        "answer": "Accountability",
        "aliases": [
          "Accountability"
        ],
        "options": [
          "Sentiment analysis",
          "OCR",
          "Speech synthesis",
          "Accountability"
        ],
        "explanation": "Developers and distributors are accountable for how their AI systems are governed.",
        "id": "ra-10",
        "topic": "Responsible AI"
      },
      {
        "type": "scenario",
        "prompt": "A university tests whether an admissions algorithm disadvantages applicants because of irrelevant demographics. Which principle?",
        "answer": "Fairness",
        "aliases": [
          "Fairness"
        ],
        "options": [
          "Speech synthesis",
          "Object detection",
          "OCR",
          "Fairness"
        ],
        "explanation": "Fairness includes checking for discriminatory decisions.",
        "id": "ra-11",
        "topic": "Responsible AI"
      },
      {
        "type": "scenario",
        "prompt": "A robot avoids moving when it is insufficiently confident an object was identified. Which principle?",
        "answer": "Reliability and safety",
        "aliases": [
          "Reliability and safety"
        ],
        "options": [
          "Reliability and safety",
          "Inclusiveness",
          "Transparency",
          "Privacy and security"
        ],
        "explanation": "Confidence thresholds can prevent unsafe actions.",
        "id": "ra-12",
        "topic": "Responsible AI"
      },
      {
        "type": "scenario",
        "prompt": "An airport deletes temporary face images after access checks. Which principle?",
        "answer": "Privacy and security",
        "aliases": [
          "Privacy and security"
        ],
        "options": [
          "Text classification",
          "Speech recognition",
          "Fairness",
          "Privacy and security"
        ],
        "explanation": "Deleting unnecessary personal data reduces privacy risks.",
        "id": "ra-13",
        "topic": "Responsible AI"
      },
      {
        "type": "scenario",
        "prompt": "A voice assistant provides captions for users who cannot hear the audio. Which principle?",
        "answer": "Inclusiveness",
        "aliases": [
          "Inclusiveness"
        ],
        "options": [
          "Image classification",
          "Accountability",
          "Inclusiveness",
          "Sentiment analysis"
        ],
        "explanation": "Captions improve access for people with hearing impairments.",
        "id": "ra-14",
        "topic": "Responsible AI"
      },
      {
        "type": "scenario",
        "prompt": "A bank discloses that it uses AI to assess loans and explains the system's broad basis. Which principle?",
        "answer": "Transparency",
        "aliases": [
          "Transparency"
        ],
        "options": [
          "Speech synthesis",
          "Object detection",
          "OCR",
          "Transparency"
        ],
        "explanation": "Users should know that AI is involved and understand its relevant limitations.",
        "id": "ra-15",
        "topic": "Responsible AI"
      }
    ]
  }
];
