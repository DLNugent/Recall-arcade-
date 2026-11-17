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
        "topic": "Introduction to AI",
        "sourceUnit": "1-introduction",
        "coverage": "module"
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
        "topic": "Introduction to AI",
        "sourceUnit": "1-introduction",
        "coverage": "supplementary"
      },
      {
        "type": "recall",
        "prompt": "What is the term for running an already trained AI model on a new input to obtain an output?",
        "answer": "Inference",
        "aliases": [
          "Inference",
          "model inference"
        ],
        "options": [
          "Inference",
          "Training",
          "Labelling",
          "Indexing"
        ],
        "explanation": "Inference means using a trained model to produce an output from new input. This is supplementary machine-learning terminology, beyond the overview unit.",
        "id": "ita-3",
        "topic": "Introduction to AI",
        "sourceUnit": "1-introduction",
        "coverage": "supplementary"
      },
      {
        "type": "recall",
        "prompt": "What process adjusts a model from examples before it is used?",
        "answer": "Training",
        "aliases": [
          "Training",
          "model training"
        ],
        "options": [
          "Training",
          "Inference",
          "Deployment",
          "Recognition"
        ],
        "explanation": "Training is the process of learning from example data.",
        "id": "ita-4",
        "topic": "Introduction to AI",
        "sourceUnit": "1-introduction",
        "coverage": "supplementary"
      },
      {
        "type": "recall",
        "prompt": "What phrase describes examples a model did not encounter during its training?",
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
        "explanation": "Unseen data is data not used to train the model. This is supplementary machine-learning terminology.",
        "id": "ita-5",
        "topic": "Introduction to AI",
        "sourceUnit": "1-introduction",
        "coverage": "supplementary"
      },
      {
        "type": "match",
        "prompt": "Which phrase best describes this module's approach?",
        "answer": "Conceptual overview",
        "aliases": [
          "Conceptual overview"
        ],
        "options": [
          "Conceptual overview",
          "Hands-on model training",
          "Technical architecture deep dive",
          "Machine learning mathematics"
        ],
        "explanation": "The introductory unit says the module explores capabilities and basic principles without deep maths or code.",
        "id": "ita-6",
        "topic": "Introduction to AI",
        "sourceUnit": "1-introduction",
        "coverage": "module"
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
          "Resizing a photo without analysis",
          "Saving photos to cloud storage",
          "Displaying an existing photo gallery"
        ],
        "explanation": "Interpreting visual input is an AI workload.",
        "id": "ita-7",
        "topic": "Introduction to AI",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which example is a prediction based on patterns in previously observed data?",
        "answer": "Estimating a future value from past patterns",
        "aliases": [
          "Estimating a future value from past patterns"
        ],
        "options": [
          "Estimating a future value from past patterns",
          "Extracting a total from a scanned invoice",
          "Transcribing words from a recording",
          "Identifying objects in an image"
        ],
        "explanation": "Predicting a value using patterns from earlier data is a common predictive machine-learning task.",
        "id": "ita-8",
        "topic": "Introduction to AI",
        "sourceUnit": "1-introduction",
        "coverage": "supplementary"
      },
      {
        "type": "match",
        "prompt": "Which is a reasonable prerequisite for the module?",
        "answer": "No prerequisite is required",
        "aliases": [
          "No prerequisite is required"
        ],
        "options": [
          "No prerequisite is required",
          "Previous machine-learning knowledge is required",
          "Previous Python experience is required",
          "An Azure account is required"
        ],
        "explanation": "A conceptual understanding of machine learning helps, but is not required.",
        "id": "ita-9",
        "topic": "Introduction to AI",
        "sourceUnit": "1-introduction",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "In introductory machine-learning terminology, what is a trained model?",
        "answer": "A trained component that maps inputs to outputs",
        "aliases": [
          "A trained component that maps inputs to outputs"
        ],
        "options": [
          "A trained component that maps inputs to outputs",
          "The collection of prompts sent by users",
          "An interface for reviewing outputs",
          "A database that stores training examples"
        ],
        "explanation": "A trained model learns a mapping or pattern from example data to produce outputs for new inputs.",
        "id": "ita-10",
        "topic": "Introduction to AI",
        "sourceUnit": "1-introduction",
        "coverage": "supplementary"
      },
      {
        "type": "scenario",
        "prompt": "A website identifies the main subject in an uploaded photograph. Which AI area is involved?",
        "answer": "Computer vision",
        "aliases": [
          "Computer vision"
        ],
        "options": [
          "Computer vision",
          "Text classification",
          "Information extraction",
          "Speech recognition"
        ],
        "explanation": "Computer vision analyses visual content.",
        "id": "ita-11",
        "topic": "Introduction to AI",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A mobile assistant listens to a question and transcribes the spoken words. Which capability is this?",
        "answer": "Speech recognition",
        "aliases": [
          "Speech recognition"
        ],
        "options": [
          "Speech recognition",
          "Speech synthesis",
          "Speech translation",
          "Audio classification"
        ],
        "explanation": "Speech recognition converts spoken language into text.",
        "id": "ita-12",
        "topic": "Introduction to AI",
        "sourceUnit": "4-speech",
        "coverage": "module"
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
          "Text classification",
          "Entity detection",
          "Sentiment analysis"
        ],
        "explanation": "Generative AI produces new content in response to prompts.",
        "id": "ita-13",
        "topic": "Introduction to AI",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A business wants AI to read scanned invoices. Which capability is especially relevant?",
        "answer": "Information extraction",
        "aliases": [
          "Information extraction"
        ],
        "options": [
          "Information extraction",
          "Image generation",
          "Language detection",
          "Speech synthesis"
        ],
        "explanation": "Document processing extracts useful fields from forms.",
        "id": "ita-14",
        "topic": "Introduction to AI",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
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
          "Training",
          "Fine-tuning",
          "Data labelling"
        ],
        "explanation": "Applying a trained model to an input is inference.",
        "id": "ita-15",
        "topic": "Introduction to AI",
        "sourceUnit": "1-introduction",
        "coverage": "supplementary"
      },
      {
        "type": "recall",
        "prompt": "What is the user's text instruction to a language model called?",
        "answer": "Prompt",
        "aliases": [
          "Prompt",
          "user prompt"
        ],
        "options": [
          "Prompt",
          "Token",
          "Label",
          "Annotation"
        ],
        "explanation": "A prompt initiates content generation.",
        "id": "gaaa-1",
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
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
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
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
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What phrase describes the meaningful relationships a language model represents between words and other language elements?",
        "answer": "Semantic relationships",
        "aliases": [
          "Semantic relationships",
          "semantics",
          "semantic relationship"
        ],
        "options": [
          "Semantic relationships",
          "Syntax only",
          "Image classification",
          "Object detection"
        ],
        "explanation": "Semantic relationships help language models generate coherent text.",
        "id": "gaaa-4",
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
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
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which agent element defines its role and behaviour?",
        "answer": "Instructions",
        "aliases": [
          "Instructions"
        ],
        "options": [
          "Instructions",
          "Language model",
          "Knowledge tools",
          "Action tools"
        ],
        "explanation": "Instructions are usually encoded as a system prompt.",
        "id": "gaaa-6",
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
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
          "Instructions",
          "Knowledge tools",
          "Action tools"
        ],
        "explanation": "The language model provides language understanding and reasoning.",
        "id": "gaaa-7",
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which example is an action tool?",
        "answer": "Sending an email",
        "aliases": [
          "Sending an email"
        ],
        "options": [
          "Sending an email",
          "Searching a document library",
          "Retrieving database records",
          "Reading web search results"
        ],
        "explanation": "Action tools let agents take actions in external systems.",
        "id": "gaaa-8",
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which statement is generally true of large language models (LLMs) versus small language models (SLMs)?",
        "answer": "LLMs generally have broader capabilities but greater resource costs",
        "aliases": [
          "LLMs generally have broader capabilities but greater resource costs"
        ],
        "options": [
          "LLMs generally have broader capabilities but greater resource costs",
          "LLMs generally use fewer resources for local deployment",
          "SLMs are usually more general-purpose than LLMs",
          "SLMs cannot process prompts or generate text"
        ],
        "explanation": "Large models can generalise well but are often costlier to train and use.",
        "id": "gaaa-9",
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which of these is a common generative AI task, rather than a specialist recognition task?",
        "answer": "Summarising a complex document",
        "aliases": [
          "Summarising a complex document"
        ],
        "options": [
          "Summarising a complex document",
          "Locating text on a scanned receipt",
          "Identifying the language of a document",
          "Locating objects in a photograph"
        ],
        "explanation": "Generative AI can explain and summarise text.",
        "id": "gaaa-10",
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "An assistant searches a documentation site before answering. Which agent element is being used?",
        "answer": "Knowledge tool",
        "aliases": [
          "Knowledge tool"
        ],
        "options": [
          "Knowledge tool",
          "Action tool",
          "Agent instructions",
          "Language model"
        ],
        "explanation": "Searching external information uses a knowledge tool.",
        "id": "gaaa-11",
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
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
          "Knowledge tool",
          "Instructions",
          "Language model"
        ],
        "explanation": "The tool is acting on a calendar, not merely reading it.",
        "id": "gaaa-12",
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A company needs a focused assistant running on a device with limited resources. Which model category is worth considering?",
        "answer": "Small language model",
        "aliases": [
          "Small language model"
        ],
        "options": [
          "Small language model",
          "Large language model",
          "Speech recognition model",
          "Object detection model"
        ],
        "explanation": "Small models may suit focused local deployments.",
        "id": "gaaa-13",
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
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
          "It extracts named entities from text",
          "It classifies text by sentiment",
          "It detects the language of a prompt"
        ],
        "explanation": "Generative AI uses learned relationships to produce new content.",
        "id": "gaaa-14",
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A chatbot uses a model, detailed role instructions, and external tools. What does this most closely describe?",
        "answer": "An AI agent",
        "aliases": [
          "An AI agent"
        ],
        "options": [
          "An AI agent",
          "A standalone language model",
          "A text classifier",
          "A document extraction pipeline"
        ],
        "explanation": "Those three components are the core simplified agent structure.",
        "id": "gaaa-15",
        "topic": "Generative AI and agents",
        "sourceUnit": "2-generative-ai",
        "coverage": "module"
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
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What term means assigning a document to a category?",
        "answer": "Text classification",
        "aliases": [
          "Text classification",
          "classification",
          "document classification"
        ],
        "options": [
          "Text classification",
          "Speech synthesis",
          "OCR",
          "Segmentation"
        ],
        "explanation": "Text classification places text in a selected category.",
        "id": "tanl-2",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What technique determines whether a review is positive, negative, or neutral?",
        "answer": "Sentiment analysis",
        "aliases": [
          "Sentiment analysis",
          "sentiment classification"
        ],
        "options": [
          "Sentiment analysis",
          "Language detection",
          "Speech recognition",
          "OCR"
        ],
        "explanation": "Sentiment analysis evaluates the attitude expressed in text.",
        "id": "tanl-3",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What technique identifies named people, places, or organisations in text?",
        "answer": "Entity detection",
        "aliases": [
          "Entity detection",
          "named entity recognition",
          "entity recognition",
          "named-entity recognition",
          "NER"
        ],
        "options": [
          "Entity detection",
          "Object detection",
          "Speech synthesis",
          "Summarisation"
        ],
        "explanation": "Entity detection finds mentions of real-world entities in text.",
        "id": "tanl-4",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What three-letter abbreviation means personally identifiable information?",
        "answer": "PII",
        "aliases": [
          "PII",
          "personally identifiable info"
        ],
        "options": [
          "PII",
          "NLP",
          "OCR",
          "LLM"
        ],
        "explanation": "PII can include names, addresses and phone numbers.",
        "id": "tanl-5",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which NLP task identifies the language used in a document?",
        "answer": "Language detection",
        "aliases": [
          "Language detection"
        ],
        "options": [
          "Language detection",
          "Text classification",
          "Entity detection",
          "Sentiment analysis"
        ],
        "explanation": "Language detection identifies one or more languages present.",
        "id": "tanl-6",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which task reduces a long article while preserving its key ideas?",
        "answer": "Summarisation",
        "aliases": [
          "Summarisation"
        ],
        "options": [
          "Summarisation",
          "Translation",
          "Key-term extraction",
          "Text classification"
        ],
        "explanation": "Summarisation shortens text while retaining the main points.",
        "id": "tanl-7",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which task extracts significant words and phrases?",
        "answer": "Key-term extraction",
        "aliases": [
          "Key-term extraction"
        ],
        "options": [
          "Key-term extraction",
          "Named-entity detection",
          "Sentiment analysis",
          "Language detection"
        ],
        "explanation": "Key-term extraction identifies important terms.",
        "id": "tanl-8",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which scenario is a reason to use a specialist NLP tool rather than open-ended generative AI?",
        "answer": "Rule-based text classification",
        "aliases": [
          "Rule-based text classification"
        ],
        "options": [
          "Rule-based text classification",
          "Open-ended story generation",
          "Image-to-text description",
          "Text-to-image generation"
        ],
        "explanation": "Specialist NLP tools can produce predictable text classifications using custom rules.",
        "id": "tanl-9",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
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
          "Sentiment analysis",
          "Key-term extraction",
          "Topic classification"
        ],
        "explanation": "Redacting personal information helps protect privacy.",
        "id": "tanl-10",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
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
          "Entity detection",
          "Language detection",
          "Summarisation"
        ],
        "explanation": "Sentiment analysis determines whether language conveys positive, negative or neutral sentiment.",
        "id": "tanl-11",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A call transcript needs every mention of companies and people. What technique is relevant?",
        "answer": "Entity detection",
        "aliases": [
          "Entity detection"
        ],
        "options": [
          "Entity detection",
          "Sentiment analysis",
          "Language detection",
          "Key-term extraction"
        ],
        "explanation": "Entity detection identifies named entities in text.",
        "id": "tanl-12",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A workflow first needs to identify whether an email is in French or Spanish. What should it use?",
        "answer": "Language detection",
        "aliases": [
          "Language detection"
        ],
        "options": [
          "Language detection",
          "Text classification",
          "Sentiment analysis",
          "Entity detection"
        ],
        "explanation": "Language detection identifies which languages are present.",
        "id": "tanl-13",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
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
          "Sentiment analysis",
          "Entity detection without redaction",
          "Text summarisation"
        ],
        "explanation": "Telephone numbers are examples of personally identifiable information.",
        "id": "tanl-14",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
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
          "Sentiment analysis",
          "Entity detection",
          "Language detection"
        ],
        "explanation": "Assigning categories is text classification.",
        "id": "tanl-15",
        "topic": "Text and natural language",
        "sourceUnit": "5-natural-language-processing",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What capability converts spoken audio into written words?",
        "answer": "Speech recognition",
        "aliases": [
          "Speech recognition",
          "speech-to-text",
          "STT",
          "speech to text",
          "automatic speech recognition"
        ],
        "options": [
          "Speech recognition",
          "Speech synthesis",
          "OCR",
          "Object detection"
        ],
        "explanation": "Speech recognition transcribes spoken language.",
        "id": "s-1",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What capability converts written words to audible speech?",
        "answer": "Speech synthesis",
        "aliases": [
          "Speech synthesis",
          "text-to-speech",
          "TTS",
          "text to speech"
        ],
        "options": [
          "Speech synthesis",
          "Speech recognition",
          "Sentiment analysis",
          "OCR"
        ],
        "explanation": "Speech synthesis produces audible speech from text.",
        "id": "s-2",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What is the common abbreviation for text-to-speech?",
        "answer": "TTS",
        "aliases": [
          "TTS",
          "text-to-speech",
          "text to speech"
        ],
        "options": [
          "TTS",
          "STT",
          "OCR",
          "PII"
        ],
        "explanation": "Text-to-speech is commonly abbreviated TTS.",
        "id": "s-3",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What is the common abbreviation for speech-to-text?",
        "answer": "STT",
        "aliases": [
          "STT",
          "speech-to-text",
          "speech to text"
        ],
        "options": [
          "STT",
          "TTS",
          "OCR",
          "NLP"
        ],
        "explanation": "Speech-to-text is commonly abbreviated STT.",
        "id": "s-4",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What term describes creating a written record of a meeting's speech?",
        "answer": "Transcription",
        "aliases": [
          "Transcription",
          "speech transcription",
          "automatic transcription"
        ],
        "options": [
          "Transcription",
          "Segmentation",
          "Classification",
          "Image tagging"
        ],
        "explanation": "Transcription writes out what was spoken.",
        "id": "s-5",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which direction describes speech recognition?",
        "answer": "Audio to text",
        "aliases": [
          "Audio to text"
        ],
        "options": [
          "Audio to text",
          "Text to audio",
          "Audio to another language",
          "Text to image"
        ],
        "explanation": "Speech recognition interprets spoken words, frequently by transcribing them.",
        "id": "s-6",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which direction describes speech synthesis?",
        "answer": "Text to audio",
        "aliases": [
          "Text to audio"
        ],
        "options": [
          "Text to audio",
          "Audio to text",
          "Audio to translated text",
          "Image to text"
        ],
        "explanation": "Speech synthesis vocalises text.",
        "id": "s-7",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which of the following is an application of AI speech recognition?",
        "answer": "Automated meeting transcription",
        "aliases": [
          "Automated meeting transcription"
        ],
        "options": [
          "Automated meeting transcription",
          "Turning text into spoken narration",
          "Translating written documents",
          "Extracting fields from receipts"
        ],
        "explanation": "Meeting transcription uses speech recognition.",
        "id": "s-8",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which challenge is specifically relevant to speech systems?",
        "answer": "Background noise",
        "aliases": [
          "Background noise"
        ],
        "options": [
          "Background noise",
          "Unclear object boundaries",
          "Inaccurate text-field positions",
          "Ambiguous image labels"
        ],
        "explanation": "Speech systems must deal with noise and interrupted speakers.",
        "id": "s-9",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which capability supports spoken answers from a digital assistant?",
        "answer": "Speech synthesis",
        "aliases": [
          "Speech synthesis"
        ],
        "options": [
          "Speech synthesis",
          "Speech recognition",
          "Speech translation",
          "Audio transcription"
        ],
        "explanation": "The assistant's text response can be turned into audio.",
        "id": "s-10",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A person dictates a message and sees words appear on screen. What is operating?",
        "answer": "Speech recognition",
        "aliases": [
          "Speech recognition"
        ],
        "options": [
          "Speech recognition",
          "Speech synthesis",
          "Speech translation",
          "Speaker identification"
        ],
        "explanation": "Speech-to-text produces the transcript.",
        "id": "s-11",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
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
          "Speech recognition",
          "Sentiment analysis",
          "Speech translation"
        ],
        "explanation": "Text-to-speech reads instructions aloud.",
        "id": "s-12",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A meeting app turns spoken discussion into a written transcript. Which capability performs the audio-to-text conversion?",
        "answer": "Speech recognition",
        "aliases": [
          "Speech recognition"
        ],
        "options": [
          "Speech recognition",
          "Speech synthesis",
          "Speaker identification",
          "Language detection"
        ],
        "explanation": "The audio must be converted to text.",
        "id": "s-13",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "An assistant takes a spoken command and replies out loud. Which pair is required?",
        "answer": "Speech recognition and synthesis",
        "aliases": [
          "Speech recognition and synthesis"
        ],
        "options": [
          "Speech recognition and synthesis",
          "Speech recognition and image classification",
          "Speech synthesis and object detection",
          "Speech translation and segmentation"
        ],
        "explanation": "Input requires speech recognition; output requires speech synthesis.",
        "id": "s-14",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
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
          "Speech recognition without translation",
          "Speech synthesis without translation",
          "Speaker identification"
        ],
        "explanation": "Speech translation combines spoken-language interpretation and generation.",
        "id": "s-15",
        "topic": "Speech",
        "sourceUnit": "4-speech",
        "coverage": "module"
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
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What technique predicts a main label for an entire image?",
        "answer": "Image classification",
        "aliases": [
          "Image classification",
          "image labeling",
          "image labelling"
        ],
        "options": [
          "Image classification",
          "Object detection",
          "Semantic segmentation",
          "Speech recognition"
        ],
        "explanation": "Image classification identifies the subject of an image.",
        "id": "cv-2",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
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
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What computer vision technique identifies the individual pixels that belong to an object?",
        "answer": "Semantic segmentation",
        "aliases": [
          "Semantic segmentation",
          "pixel-level segmentation",
          "semantic image segmentation"
        ],
        "options": [
          "Semantic segmentation",
          "Image classification",
          "Language detection",
          "Speech synthesis"
        ],
        "explanation": "Semantic segmentation works at pixel level.",
        "id": "cv-4",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What type of model combines visual features with associated text descriptions?",
        "answer": "Multimodal model",
        "aliases": [
          "Multimodal model",
          "multi-modal model",
          "multimodal",
          "multi modal",
          "multi-modal",
          "multi modal model"
        ],
        "options": [
          "Multimodal model",
          "Audio-only model",
          "Text classifier",
          "Speech synthesizer"
        ],
        "explanation": "Multimodal models can connect images and text descriptions.",
        "id": "cv-5",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which visual output is most closely associated with object detection?",
        "answer": "Bounding boxes around objects",
        "aliases": [
          "Bounding boxes around objects"
        ],
        "options": [
          "Bounding boxes around objects",
          "A single category for the whole image",
          "Pixel-level object masks",
          "A caption describing the whole image"
        ],
        "explanation": "Object detection typically identifies regions containing objects.",
        "id": "cv-6",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
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
          "It assigns one label to the entire image",
          "It marks objects with bounding boxes",
          "It generates text describing the image"
        ],
        "explanation": "Segmentation identifies specific image pixels belonging to objects.",
        "id": "cv-7",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which computer vision task assigns a main-subject label to an entire photograph, without locating individual objects?",
        "answer": "Image classification",
        "aliases": [
          "Image classification"
        ],
        "options": [
          "Image classification",
          "Object detection",
          "Semantic segmentation",
          "Image captioning"
        ],
        "explanation": "Image classification predicts the main subject label for an image. Object detection instead locates objects within it.",
        "id": "cv-8",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "What can multimodal models combine?",
        "answer": "Visual features and text",
        "aliases": [
          "Visual features and text"
        ],
        "options": [
          "Visual features and text",
          "Visual features and bounding boxes only",
          "Spoken commands and calendar actions",
          "Training labels and model evaluation scores"
        ],
        "explanation": "Microsoft describes combining image features and associated text descriptions.",
        "id": "cv-9",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
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
          "Classifying customer-review sentiment",
          "Transcribing recorded meetings",
          "Summarising policy documents"
        ],
        "explanation": "Video analysis can identify items and stock levels.",
        "id": "cv-10",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A camera system places rectangles around every bicycle on a street. What is it doing?",
        "answer": "Object detection",
        "aliases": [
          "Object detection"
        ],
        "options": [
          "Object detection",
          "Image classification",
          "Semantic segmentation",
          "Image captioning"
        ],
        "explanation": "Bounding boxes indicate the position of each detected object.",
        "id": "cv-11",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A photo app assigns the overall label “cat” to an uploaded image, without marking any objects. Which task fits?",
        "answer": "Image classification",
        "aliases": [
          "Image classification"
        ],
        "options": [
          "Image classification",
          "Object detection",
          "Semantic segmentation",
          "Image captioning"
        ],
        "explanation": "It assigns a main label to an image.",
        "id": "cv-12",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A system colours each pixel belonging to the road in a driving scene. What technique is used?",
        "answer": "Semantic segmentation",
        "aliases": [
          "Semantic segmentation"
        ],
        "options": [
          "Semantic segmentation",
          "Object detection",
          "Image classification",
          "Image captioning"
        ],
        "explanation": "Pixel-level identification is semantic segmentation.",
        "id": "cv-13",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A service generates natural-language descriptions of uploaded photos by combining image features with language. What kind of model may it use?",
        "answer": "Multimodal model",
        "aliases": [
          "Multimodal model"
        ],
        "options": [
          "Multimodal model",
          "Image classifier",
          "Object detector",
          "Semantic segmenter"
        ],
        "explanation": "A multimodal model associates visual information with text.",
        "id": "cv-14",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A security camera needs to locate people inside frames. What task is most relevant?",
        "answer": "Object detection",
        "aliases": [
          "Object detection"
        ],
        "options": [
          "Object detection",
          "Image classification",
          "Semantic segmentation",
          "Image captioning"
        ],
        "explanation": "Object detection finds objects and their positions.",
        "id": "cv-15",
        "topic": "Computer vision",
        "sourceUnit": "3-computer-vision",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What three-letter abbreviation names the technology used to recognise text in images?",
        "answer": "OCR",
        "aliases": [
          "OCR",
          "optical character recognition"
        ],
        "options": [
          "OCR",
          "NLP",
          "LLM",
          "TTS"
        ],
        "explanation": "OCR is optical character recognition.",
        "id": "ie-1",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What does OCR stand for?",
        "answer": "Optical character recognition",
        "aliases": [
          "Optical character recognition",
          "optical character recognition"
        ],
        "options": [
          "Optical character recognition",
          "Object classification reasoning",
          "Output content retrieval",
          "Optical colour rendering"
        ],
        "explanation": "OCR recognises text shown in visual data.",
        "id": "ie-2",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
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
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
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
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "What is the general task of finding specific fields in scanned forms called?",
        "answer": "Information extraction",
        "aliases": [
          "Information extraction",
          "document information extraction",
          "document extraction"
        ],
        "options": [
          "Information extraction",
          "Speech synthesis",
          "Image classification",
          "Image generation"
        ],
        "explanation": "Information extraction finds useful values in documents.",
        "id": "ie-5",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "In document analysis, what does optical character recognition (OCR) primarily detect?",
        "answer": "Text and its location",
        "aliases": [
          "Text and its location"
        ],
        "options": [
          "Text and its location",
          "The purpose of a document",
          "The emotional tone of a document",
          "The category of a document"
        ],
        "explanation": "OCR identifies text in images and its location. Further models can interpret text as specific document fields.",
        "id": "ie-6",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "What often follows OCR in a document processing pipeline?",
        "answer": "Interpretation of fields and values",
        "aliases": [
          "Interpretation of fields and values"
        ],
        "options": [
          "Interpretation of fields and values",
          "Assigning a sentiment label",
          "Generating a speech response",
          "Classifying the document language"
        ],
        "explanation": "An analytical model may map recognised text to structured fields.",
        "id": "ie-7",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which source is an example of unstructured data?",
        "answer": "A scanned handwritten form",
        "aliases": [
          "A scanned handwritten form"
        ],
        "options": [
          "A scanned handwritten form",
          "A table with fixed database columns",
          "A validated structured JSON record",
          "A relational database row"
        ],
        "explanation": "Scanned forms are unstructured input sources.",
        "id": "ie-8",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
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
          "Classifying the sentiment of reviews",
          "Translating website content",
          "Generating descriptions of photos"
        ],
        "explanation": "Expense claims can extract dates, amounts and other fields.",
        "id": "ie-9",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which is an example of an insight extracted from meeting recordings?",
        "answer": "Follow-up actions",
        "aliases": [
          "Follow-up actions"
        ],
        "options": [
          "Follow-up actions",
          "Speaker emotion alone",
          "Audio sampling rate",
          "Microphone model information"
        ],
        "explanation": "Meeting analysis can identify key points and next actions.",
        "id": "ie-10",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "An app reads a scanned receipt and extracts the total amount. Which combination is appropriate?",
        "answer": "OCR plus field interpretation",
        "aliases": [
          "OCR plus field interpretation"
        ],
        "options": [
          "OCR plus field interpretation",
          "Speech recognition plus summarisation",
          "Text classification plus language detection",
          "Image classification plus sentiment analysis"
        ],
        "explanation": "OCR reads the text and field analysis finds the total.",
        "id": "ie-11",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "An archive digitises paper census records for searching. Which workload fits?",
        "answer": "Document information extraction",
        "aliases": [
          "Document information extraction"
        ],
        "options": [
          "Document information extraction",
          "Image classification alone",
          "Speech synthesis",
          "Sentiment analysis"
        ],
        "explanation": "Information extraction can digitise records and support indexing.",
        "id": "ie-12",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A photo of a device shows a serial number to be read. Which technology is a likely starting point?",
        "answer": "OCR",
        "aliases": [
          "OCR"
        ],
        "options": [
          "OCR",
          "Image classification",
          "Object detection",
          "Semantic segmentation"
        ],
        "explanation": "OCR reads printed text visible in photographs.",
        "id": "ie-13",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A system examines meeting transcripts and lists decisions and follow-up actions. What outcome does this illustrate?",
        "answer": "Insight extraction",
        "aliases": [
          "Insight extraction"
        ],
        "options": [
          "Insight extraction",
          "Speech synthesis",
          "Object detection",
          "Language identification"
        ],
        "explanation": "The system extracts actionable information from recorded discussion.",
        "id": "ie-14",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A company wants to index thousands of scanned forms for search. Which capability can help?",
        "answer": "OCR and document extraction",
        "aliases": [
          "OCR and document extraction"
        ],
        "options": [
          "OCR and document extraction",
          "Image classification alone",
          "Speech synthesis alone",
          "Sentiment analysis alone"
        ],
        "explanation": "Recognised text and extracted fields can support search indexing.",
        "id": "ie-15",
        "topic": "Information extraction",
        "sourceUnit": "6-extract-insights",
        "coverage": "module"
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
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "Which principle addresses protection of personal information and systems?",
        "answer": "Privacy and security",
        "aliases": [
          "Privacy and security",
          "privacy & security"
        ],
        "options": [
          "Privacy and security",
          "Inclusiveness",
          "Transparency",
          "Reliability"
        ],
        "explanation": "Privacy and security protect sensitive personal and organisational information.",
        "id": "ra-2",
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
      },
      {
        "type": "recall",
        "prompt": "Which responsible-AI principle aims to make systems usable by people with differing abilities and needs?",
        "answer": "Inclusiveness",
        "aliases": [
          "Inclusiveness",
          "inclusion",
          "accessibility"
        ],
        "options": [
          "Inclusiveness",
          "Fairness",
          "Accountability",
          "Transparency"
        ],
        "explanation": "Inclusiveness works to prevent groups from being excluded.",
        "id": "ra-3",
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
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
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
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
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which responsible-AI principle acknowledges that probabilistic systems can make mistakes and calls for mitigation?",
        "answer": "Reliability and safety",
        "aliases": [
          "Reliability and safety",
          "safety and reliability"
        ],
        "options": [
          "Reliability and safety",
          "Fairness",
          "Transparency",
          "Accountability"
        ],
        "explanation": "Reliability and safety mitigate risks from fallible AI systems.",
        "id": "ra-6",
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which principle concerns unequal treatment caused by biased training data?",
        "answer": "Fairness",
        "aliases": [
          "Fairness"
        ],
        "options": [
          "Fairness",
          "Reliability and safety",
          "Transparency",
          "Accountability"
        ],
        "explanation": "Bias in data can produce discriminatory results.",
        "id": "ra-7",
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which measure helps prevent AI-generated harmful material?",
        "answer": "Content filtering",
        "aliases": [
          "Content filtering"
        ],
        "options": [
          "Content filtering",
          "Data anonymisation alone",
          "Model monitoring alone",
          "An accessibility review alone"
        ],
        "explanation": "Content filters can mitigate harmful outputs, though they are not sufficient alone.",
        "id": "ra-8",
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which principle focuses on describing an AI system's use and limitations?",
        "answer": "Transparency",
        "aliases": [
          "Transparency"
        ],
        "options": [
          "Transparency",
          "Inclusiveness",
          "Privacy and security",
          "Accountability"
        ],
        "explanation": "Transparency requires clear information about the use and limits of AI.",
        "id": "ra-9",
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
      },
      {
        "type": "match",
        "prompt": "Which responsible-AI principle involves governance and responsibility for deployment decisions?",
        "answer": "Accountability",
        "aliases": [
          "Accountability"
        ],
        "options": [
          "Accountability",
          "Fairness",
          "Transparency",
          "Reliability and safety"
        ],
        "explanation": "Developers and distributors are accountable for how their AI systems are governed.",
        "id": "ra-10",
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A university tests whether an admissions algorithm disadvantages applicants because of irrelevant demographics. Which principle?",
        "answer": "Fairness",
        "aliases": [
          "Fairness"
        ],
        "options": [
          "Fairness",
          "Inclusiveness",
          "Reliability and safety",
          "Privacy and security"
        ],
        "explanation": "Fairness includes checking for discriminatory decisions.",
        "id": "ra-11",
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
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
          "Transparency",
          "Inclusiveness",
          "Accountability"
        ],
        "explanation": "Confidence thresholds can prevent unsafe actions.",
        "id": "ra-12",
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "An airport deletes temporary face images after access checks. Which principle?",
        "answer": "Privacy and security",
        "aliases": [
          "Privacy and security"
        ],
        "options": [
          "Privacy and security",
          "Fairness",
          "Inclusiveness",
          "Transparency"
        ],
        "explanation": "Deleting unnecessary personal data reduces privacy risks.",
        "id": "ra-13",
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A voice assistant provides captions for users who cannot hear the audio. Which principle?",
        "answer": "Inclusiveness",
        "aliases": [
          "Inclusiveness"
        ],
        "options": [
          "Inclusiveness",
          "Fairness",
          "Transparency",
          "Privacy and security"
        ],
        "explanation": "Captions improve access for people with hearing impairments.",
        "id": "ra-14",
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
      },
      {
        "type": "scenario",
        "prompt": "A bank discloses that it uses AI to assess loans and explains the system's broad basis. Which principle?",
        "answer": "Transparency",
        "aliases": [
          "Transparency"
        ],
        "options": [
          "Transparency",
          "Accountability",
          "Fairness",
          "Inclusiveness"
        ],
        "explanation": "Users should know that AI is involved and understand its relevant limitations.",
        "id": "ra-15",
        "topic": "Responsible AI",
        "sourceUnit": "7-responsible-ai",
        "coverage": "module"
      }
    ]
  }
];