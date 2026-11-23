window.QUIZ_MODULES.push({
  "id": "azure-content-understanding",
  "title": "Get started with AI-powered information extraction in Azure",
  "source": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/",
  "learningPath": "azure-apps-agents",
  "topics": [
    {
      "id": "Extract information from documents",
      "title": "Extract information from documents",
      "count": 21
    },
    {
      "id": "Extract information from audio and video",
      "title": "Extract information from audio and video",
      "count": 9
    }
  ],
  "questions": [
    {
      "id": "azure-extraction-recall-01",
      "type": "recall",
      "prompt": "Which Foundry Tool extracts structured fields from documents, audio and video?",
      "answer": "Azure Content Understanding",
      "aliases": [
        "Azure Content Understanding",
        "Content Understanding"
      ],
      "options": [
        "Azure Content Understanding",
        "Azure Speech only",
        "Microsoft Entra ID",
        "Azure App Service"
      ],
      "explanation": "Content Understanding analyses multiple content modalities into structured outputs.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-recall-02",
      "type": "recall",
      "prompt": "What does OCR stand for when reading scanned documents?",
      "answer": "Optical character recognition",
      "aliases": [
        "Optical character recognition"
      ],
      "options": [
        "Optical character recognition",
        "Object content retrieval",
        "Optical code rendering",
        "Ordered character response"
      ],
      "explanation": "OCR converts images of text to machine-readable text.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-recall-03",
      "type": "recall",
      "prompt": "What defines the named fields a Content Understanding analyzer should extract?",
      "answer": "Schema",
      "aliases": [
        "Schema",
        "field schema"
      ],
      "options": [
        "Schema",
        "Prompt temperature",
        "Audio stream",
        "Deployment quota"
      ],
      "explanation": "A schema specifies desired fields and output structure.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-recall-04",
      "type": "recall",
      "prompt": "What structured data format is used as an example of Content Understanding output?",
      "answer": "JSON",
      "aliases": [
        "JSON",
        "JavaScript Object Notation"
      ],
      "options": [
        "JSON",
        "MP3",
        "PNG",
        "ZIP"
      ],
      "explanation": "The service can return structured JSON results.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-recall-05",
      "type": "recall",
      "prompt": "What is the first stage in the lesson's content analysis workflow?",
      "answer": "Ingest content",
      "aliases": [
        "Ingest content",
        "ingestion",
        "ingest"
      ],
      "options": [
        "Ingest content",
        "Generate synthetic audio",
        "Create an agent",
        "Sort by sentiment"
      ],
      "explanation": "Content is first submitted or ingested into the service.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-recall-06",
      "type": "recall",
      "prompt": "What does a document analyzer use to identify fields beyond basic text OCR?",
      "answer": "Schema-based extraction",
      "aliases": [
        "Schema-based extraction",
        "schema based extraction"
      ],
      "options": [
        "Schema-based extraction",
        "Raw audio transcription",
        "Text-to-speech",
        "Video remixing"
      ],
      "explanation": "Schemas let models extract named values rather than just characters.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-recall-07",
      "type": "recall",
      "prompt": "Which common business document typically lists a vendor, line items and a total payable?",
      "answer": "Invoice",
      "aliases": [
        "Invoice",
        "invoices"
      ],
      "options": [
        "Invoice",
        "Audio waveform",
        "Image prompt",
        "Video frame sequence"
      ],
      "explanation": "Invoices are used as an example of structured field extraction.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-recall-08",
      "type": "recall",
      "prompt": "What term describes the configuration that processes content to extract the desired fields?",
      "answer": "Analyzer",
      "aliases": [
        "Analyzer",
        "analyser"
      ],
      "options": [
        "Analyzer",
        "SpeechSynthesizer",
        "Tenant",
        "Token"
      ],
      "explanation": "An analyzer applies the schema to incoming content.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-recall-09",
      "type": "recall",
      "prompt": "Which type of output provides the spoken words from an audio recording?",
      "answer": "Transcript",
      "aliases": [
        "Transcript",
        "transcription"
      ],
      "options": [
        "Transcript",
        "Bounding box",
        "Model deployment",
        "Vector score"
      ],
      "explanation": "Audio analysis can return a text transcript.",
      "topic": "Extract information from audio and video",
      "sourceUnit": "3-audio-video",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/3-audio-video",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-recall-10",
      "type": "recall",
      "prompt": "What structure specifies caller, summary and callback number in a voicemail analysis?",
      "answer": "Schema",
      "aliases": [
        "Schema",
        "field schema"
      ],
      "options": [
        "Schema",
        "Resource group",
        "Temperature",
        "Image mask"
      ],
      "explanation": "The extraction schema defines which insights to return from the recording.",
      "topic": "Extract information from audio and video",
      "sourceUnit": "3-audio-video",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/3-audio-video",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-match-01",
      "type": "match",
      "prompt": "Which approach captures both character text and meaningful invoice fields?",
      "answer": "Content Understanding with a schema",
      "aliases": [
        "Content Understanding with a schema"
      ],
      "options": [
        "Content Understanding with a schema",
        "Basic OCR only",
        "Audio synthesis",
        "Image generation"
      ],
      "explanation": "Schemas enable field-level extraction beyond plain OCR.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-match-02",
      "type": "match",
      "prompt": "Which step follows ingestion in the content workflow?",
      "answer": "AI-powered analysis",
      "aliases": [
        "AI-powered analysis"
      ],
      "options": [
        "AI-powered analysis",
        "Report publication",
        "Manual retyping",
        "Voice synthesis"
      ],
      "explanation": "Ingested content is analysed before structured output.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-match-03",
      "type": "match",
      "prompt": "Which step makes extracted values ready for integration into another system?",
      "answer": "Structured output",
      "aliases": [
        "Structured output"
      ],
      "options": [
        "Structured output",
        "Audio streaming",
        "Video generation",
        "Prompt sampling"
      ],
      "explanation": "Structured outputs can be parsed by downstream systems.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-match-04",
      "type": "match",
      "prompt": "Which term denotes an extraction definition listing field names and types?",
      "answer": "Schema",
      "aliases": [
        "Schema"
      ],
      "options": [
        "Schema",
        "Endpoint",
        "Voice profile",
        "Rate limit"
      ],
      "explanation": "The schema identifies the data to extract.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-match-05",
      "type": "match",
      "prompt": "Which example is a suitable document field to extract?",
      "answer": "Invoice date",
      "aliases": [
        "Invoice date"
      ],
      "options": [
        "Invoice date",
        "Model temperature",
        "GPU family",
        "Speech voice"
      ],
      "explanation": "Invoice date is a typical invoice schema field.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-match-06",
      "type": "match",
      "prompt": "Which capability recognises printed characters without inherently understanding their meaning?",
      "answer": "OCR",
      "aliases": [
        "OCR"
      ],
      "options": [
        "OCR",
        "Schema-driven reasoning",
        "Sentiment analysis",
        "Speech synthesis"
      ],
      "explanation": "Basic OCR reads text but does not infer field meaning by itself.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-match-07",
      "type": "match",
      "prompt": "Which system is used to interactively test document analyzers and inspect results?",
      "answer": "Foundry portal",
      "aliases": [
        "Foundry portal"
      ],
      "options": [
        "Foundry portal",
        "Azure billing invoice",
        "GitHub issue tracker",
        "DNS console"
      ],
      "explanation": "The Foundry portal lets developers run analyzers and review outputs.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-match-08",
      "type": "match",
      "prompt": "Which media type can Content Understanding analyse besides documents?",
      "answer": "Audio recordings",
      "aliases": [
        "Audio recordings"
      ],
      "options": [
        "Audio recordings",
        "Only CSV tables",
        "Only SQL indexes",
        "Only program source code"
      ],
      "explanation": "The module covers extracting from audio.",
      "topic": "Extract information from audio and video",
      "sourceUnit": "3-audio-video",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/3-audio-video",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-match-09",
      "type": "match",
      "prompt": "Which result can be extracted from a recorded voicemail?",
      "answer": "Callback number",
      "aliases": [
        "Callback number"
      ],
      "options": [
        "Callback number",
        "Model quota",
        "GPU serial number",
        "Endpoint region"
      ],
      "explanation": "An audio schema can specify a callback number.",
      "topic": "Extract information from audio and video",
      "sourceUnit": "3-audio-video",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/3-audio-video",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-match-10",
      "type": "match",
      "prompt": "Which result helps identify tasks requested in a voice message?",
      "answer": "Requested actions",
      "aliases": [
        "Requested actions"
      ],
      "options": [
        "Requested actions",
        "Image dimensions",
        "Prompt tokens",
        "Resource tags"
      ],
      "explanation": "The audio schema can extract requested actions.",
      "topic": "Extract information from audio and video",
      "sourceUnit": "3-audio-video",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/3-audio-video",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-scenario-01",
      "type": "scenario",
      "prompt": "A company wants invoice totals and dates rather than just the printed words. Which method fits?",
      "answer": "Schema-based document extraction",
      "aliases": [
        "Schema-based document extraction"
      ],
      "options": [
        "Schema-based document extraction",
        "OCR text only",
        "Speech synthesis",
        "Video generation"
      ],
      "explanation": "A schema extracts meaningful fields and their values.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-scenario-02",
      "type": "scenario",
      "prompt": "A scan is processed by OCR and yields only text lines. What is missing for a structured claims workflow?",
      "answer": "Field extraction using a schema",
      "aliases": [
        "Field extraction using a schema"
      ],
      "options": [
        "Field extraction using a schema",
        "More synthetic speech",
        "More image generation",
        "A different user interface theme"
      ],
      "explanation": "OCR alone doesn't identify business fields and relationships.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-scenario-03",
      "type": "scenario",
      "prompt": "An app needs to save extracted receipt data into database columns. Which output format is appropriate?",
      "answer": "Structured JSON",
      "aliases": [
        "Structured JSON"
      ],
      "options": [
        "Structured JSON",
        "MP3 audio",
        "Video file",
        "Raw pixels only"
      ],
      "explanation": "JSON represents named fields for downstream processing.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-scenario-04",
      "type": "scenario",
      "prompt": "A developer wants supplier name, line items and total from invoices. What should the schema contain?",
      "answer": "Named extraction fields",
      "aliases": [
        "Named extraction fields"
      ],
      "options": [
        "Named extraction fields",
        "Only model temperature",
        "Speech voice IDs",
        "A deployment quota"
      ],
      "explanation": "The schema declares the business fields to return.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-scenario-05",
      "type": "scenario",
      "prompt": "A team wishes to inspect extraction results before writing production code. Where should they test the analyzer?",
      "answer": "Foundry portal",
      "aliases": [
        "Foundry portal"
      ],
      "options": [
        "Foundry portal",
        "GitHub billing",
        "A DNS console",
        "Text-to-speech endpoint"
      ],
      "explanation": "The Foundry portal supports testing and result inspection.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-scenario-06",
      "type": "scenario",
      "prompt": "A company needs to handle many scanned forms without manually entering values. Which service is suited?",
      "answer": "Azure Content Understanding",
      "aliases": [
        "Azure Content Understanding"
      ],
      "options": [
        "Azure Content Understanding",
        "Microsoft Entra ID only",
        "Azure DNS",
        "Voice Live"
      ],
      "explanation": "Content Understanding extracts structured information from documents.",
      "topic": "Extract information from documents",
      "sourceUnit": "2-documents",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/2-documents",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-scenario-07",
      "type": "scenario",
      "prompt": "A business uploads meeting recordings and wants summaries. Which content type does the service support?",
      "answer": "Audio",
      "aliases": [
        "Audio"
      ],
      "options": [
        "Audio",
        "Only printed receipts",
        "Only JSON files",
        "Only image prompts"
      ],
      "explanation": "Content Understanding can analyse recorded audio.",
      "topic": "Extract information from audio and video",
      "sourceUnit": "3-audio-video",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/3-audio-video",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-scenario-08",
      "type": "scenario",
      "prompt": "A voicemail has a request to call back and a phone number. Which extraction output is most useful?",
      "answer": "Requested action and callback number",
      "aliases": [
        "Requested action and callback number"
      ],
      "options": [
        "Requested action and callback number",
        "Bounding-box colour",
        "Token quota",
        "Deployment region"
      ],
      "explanation": "An audio schema can capture action requests and contact details.",
      "topic": "Extract information from audio and video",
      "sourceUnit": "3-audio-video",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/3-audio-video",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-scenario-09",
      "type": "scenario",
      "prompt": "An audio analyzer shows a written transcript and named fields. Which two capabilities are being combined?",
      "answer": "Transcription and structured extraction",
      "aliases": [
        "Transcription and structured extraction"
      ],
      "options": [
        "Transcription and structured extraction",
        "Text-to-image and image editing",
        "Video remix and code search",
        "Storage and billing"
      ],
      "explanation": "Audio processing may return transcript text and schema-matched insights.",
      "topic": "Extract information from audio and video",
      "sourceUnit": "3-audio-video",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/3-audio-video",
      "coverage": "module"
    },
    {
      "id": "azure-extraction-scenario-10",
      "type": "scenario",
      "prompt": "A manager needs to pull insights out of recorded video meetings. Which capability described in the module fits?",
      "answer": "Audio and video Content Understanding",
      "aliases": [
        "Audio and video Content Understanding"
      ],
      "options": [
        "Audio and video Content Understanding",
        "Only OCR of invoice scans",
        "Text-to-speech",
        "Azure Key Vault"
      ],
      "explanation": "The service supports extracting information from video and audio.",
      "topic": "Extract information from audio and video",
      "sourceUnit": "3-audio-video",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-information-extraction/3-audio-video",
      "coverage": "module"
    }
  ]
});
