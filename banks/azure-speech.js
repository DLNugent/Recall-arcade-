window.QUIZ_MODULES.push({
  "id": "azure-speech",
  "title": "Get started with speech in Azure",
  "source": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/",
  "learningPath": "azure-apps-agents",
  "topics": [
    {
      "id": "Speech recognition",
      "title": "Speech recognition",
      "count": 13
    },
    {
      "id": "Speech synthesis",
      "title": "Speech synthesis",
      "count": 11
    },
    {
      "id": "Creating a speech-capable agent",
      "title": "Creating a speech-capable agent",
      "count": 6
    }
  ],
  "questions": [
    {
      "id": "azure-speech-recall-01",
      "type": "recall",
      "prompt": "Which capability converts spoken audio into text?",
      "answer": "Speech recognition",
      "aliases": [
        "Speech recognition",
        "speech to text",
        "STT",
        "automatic speech recognition"
      ],
      "options": [
        "Speech recognition",
        "Speech synthesis",
        "Image captioning",
        "Voice cloning"
      ],
      "explanation": "Speech recognition or speech-to-text transcribes spoken content.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-recall-02",
      "type": "recall",
      "prompt": "Which speech model maps audio into phoneme representations in the lesson?",
      "answer": "Acoustic model",
      "aliases": [
        "Acoustic model",
        "acoustic"
      ],
      "options": [
        "Acoustic model",
        "Language model",
        "Image model",
        "Embedding index"
      ],
      "explanation": "An acoustic model maps sounds to phonemes.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-recall-03",
      "type": "recall",
      "prompt": "What speech unit represents a distinct sound used by recognition systems?",
      "answer": "Phoneme",
      "aliases": [
        "Phoneme",
        "phonemes"
      ],
      "options": [
        "Phoneme",
        "Token ID",
        "Bounding box",
        "Vector index"
      ],
      "explanation": "Phonemes represent meaningful speech sounds.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-recall-04",
      "type": "recall",
      "prompt": "Which processing mode handles archived audio recordings asynchronously?",
      "answer": "Batch transcription",
      "aliases": [
        "Batch transcription",
        "batch"
      ],
      "options": [
        "Batch transcription",
        "Real-time streaming",
        "Speech synthesis",
        "Image analysis"
      ],
      "explanation": "Batch jobs transcribe stored audio files asynchronously.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-recall-05",
      "type": "recall",
      "prompt": "Which Speech SDK class creates a recognizer in the lesson's Python example?",
      "answer": "SpeechRecognizer",
      "aliases": [
        "SpeechRecognizer",
        "speech recognizer"
      ],
      "options": [
        "SpeechRecognizer",
        "SpeechSynthesizer",
        "TextAnalyticsClient",
        "AIProjectClient"
      ],
      "explanation": "SpeechRecognizer uses speech and audio configurations.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-recall-06",
      "type": "recall",
      "prompt": "Which capability generates spoken audio from written text?",
      "answer": "Speech synthesis",
      "aliases": [
        "Speech synthesis",
        "text to speech",
        "TTS"
      ],
      "options": [
        "Speech synthesis",
        "Speech recognition",
        "Entity linking",
        "Language classification"
      ],
      "explanation": "Speech synthesis is also called text-to-speech.",
      "topic": "Speech synthesis",
      "sourceUnit": "3-speech-synthesis",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/3-speech-synthesis",
      "coverage": "module"
    },
    {
      "id": "azure-speech-recall-07",
      "type": "recall",
      "prompt": "Which speech feature controls variation in how a synthetic voice expresses phrases?",
      "answer": "Prosody",
      "aliases": [
        "Prosody",
        "intonation and prosody"
      ],
      "options": [
        "Prosody",
        "OCR",
        "Token ID",
        "Indexing"
      ],
      "explanation": "Prosodic features include pitch, rate and phrasing.",
      "topic": "Speech synthesis",
      "sourceUnit": "3-speech-synthesis",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/3-speech-synthesis",
      "coverage": "module"
    },
    {
      "id": "azure-speech-recall-08",
      "type": "recall",
      "prompt": "Which Python SDK class turns text into synthetic speech in the lesson?",
      "answer": "SpeechSynthesizer",
      "aliases": [
        "SpeechSynthesizer",
        "speech synthesizer"
      ],
      "options": [
        "SpeechSynthesizer",
        "SpeechRecognizer",
        "AIProjectClient",
        "OpenAI Responses Client"
      ],
      "explanation": "SpeechSynthesizer produces spoken audio from text.",
      "topic": "Speech synthesis",
      "sourceUnit": "3-speech-synthesis",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/3-speech-synthesis",
      "coverage": "module"
    },
    {
      "id": "azure-speech-recall-09",
      "type": "recall",
      "prompt": "What Azure Speech service supports managed real-time spoken conversations?",
      "answer": "Voice Live",
      "aliases": [
        "Voice Live",
        "VoiceLive",
        "Azure Speech Voice Live"
      ],
      "options": [
        "Voice Live",
        "Batch transcription",
        "TextAnalyticsClient",
        "Azure Vision"
      ],
      "explanation": "Voice Live combines voice input and response capabilities.",
      "topic": "Creating a speech-capable agent",
      "sourceUnit": "4-voice-live",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/4-voice-live",
      "coverage": "module"
    },
    {
      "id": "azure-speech-recall-10",
      "type": "recall",
      "prompt": "Which Python package is specified for a custom Voice Live application?",
      "answer": "azure-ai-voicelive",
      "aliases": [
        "azure-ai-voicelive",
        "azure ai voicelive"
      ],
      "options": [
        "azure-ai-voicelive",
        "azure-ai-textanalytics",
        "azure-storage-blob",
        "azure-ai-projects"
      ],
      "explanation": "The lesson installs azure-ai-voicelive to use the Voice Live service.",
      "topic": "Creating a speech-capable agent",
      "sourceUnit": "4-voice-live",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/4-voice-live",
      "coverage": "module"
    },
    {
      "id": "azure-speech-match-01",
      "type": "match",
      "prompt": "Which model in a traditional speech-to-text pipeline maps phonemes into words?",
      "answer": "Language model",
      "aliases": [
        "Language model"
      ],
      "options": [
        "Language model",
        "Acoustic model",
        "Image model",
        "Video model"
      ],
      "explanation": "The language model maps recognised phonemes to words.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-match-02",
      "type": "match",
      "prompt": "Which source can feed real-time transcription?",
      "answer": "Microphone audio stream",
      "aliases": [
        "Microphone audio stream"
      ],
      "options": [
        "Microphone audio stream",
        "Only scanned PDFs",
        "Only still images",
        "Only structured JSON"
      ],
      "explanation": "Real-time speech recognition can transcribe incoming microphone audio.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-match-03",
      "type": "match",
      "prompt": "Which package installs the Python Azure Speech SDK used in the lesson?",
      "answer": "azure-cognitiveservices-speech",
      "aliases": [
        "azure-cognitiveservices-speech"
      ],
      "options": [
        "azure-cognitiveservices-speech",
        "azure-ai-textanalytics",
        "azure-ai-projects",
        "openai"
      ],
      "explanation": "The lesson installs azure-cognitiveservices-speech.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-match-04",
      "type": "match",
      "prompt": "Which mode suits stored recordings that need not be transcribed immediately?",
      "answer": "Batch transcription",
      "aliases": [
        "Batch transcription"
      ],
      "options": [
        "Batch transcription",
        "Real-time transcription",
        "Voice synthesis",
        "Live captions only"
      ],
      "explanation": "Batch transcription is intended for previously recorded audio.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-match-05",
      "type": "match",
      "prompt": "Which output can a text-to-speech API produce?",
      "answer": "An audio file",
      "aliases": [
        "An audio file"
      ],
      "options": [
        "An audio file",
        "An image mask",
        "An OCR bounding box",
        "A search index"
      ],
      "explanation": "Generated speech can be saved as audio.",
      "topic": "Speech synthesis",
      "sourceUnit": "3-speech-synthesis",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/3-speech-synthesis",
      "coverage": "module"
    },
    {
      "id": "azure-speech-match-06",
      "type": "match",
      "prompt": "Which text-to-speech setting changes how quickly the voice speaks?",
      "answer": "Speaking rate",
      "aliases": [
        "Speaking rate"
      ],
      "options": [
        "Speaking rate",
        "Token-per-minute quota",
        "Image dimensions",
        "Input language detector"
      ],
      "explanation": "Speaking rate controls delivery speed.",
      "topic": "Speech synthesis",
      "sourceUnit": "3-speech-synthesis",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/3-speech-synthesis",
      "coverage": "module"
    },
    {
      "id": "azure-speech-match-07",
      "type": "match",
      "prompt": "Which text-to-speech feature allows applications to choose different voices?",
      "answer": "Voice selection",
      "aliases": [
        "Voice selection"
      ],
      "options": [
        "Voice selection",
        "Language detection",
        "Speaker diarization",
        "Text classification"
      ],
      "explanation": "Text-to-speech exposes predefined and custom voice choices.",
      "topic": "Speech synthesis",
      "sourceUnit": "3-speech-synthesis",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/3-speech-synthesis",
      "coverage": "module"
    },
    {
      "id": "azure-speech-match-08",
      "type": "match",
      "prompt": "Which synthesis approach generally improves natural intonation through neural networks?",
      "answer": "Neural voices",
      "aliases": [
        "Neural voices"
      ],
      "options": [
        "Neural voices",
        "Only concatenated text",
        "OCR",
        "Keyword extraction"
      ],
      "explanation": "Neural voices aim for more natural speech delivery.",
      "topic": "Speech synthesis",
      "sourceUnit": "3-speech-synthesis",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/3-speech-synthesis",
      "coverage": "module"
    },
    {
      "id": "azure-speech-match-09",
      "type": "match",
      "prompt": "In a speech-to-speech pipeline, what generally sits between transcription and synthesis?",
      "answer": "Processing or reasoning",
      "aliases": [
        "Processing or reasoning"
      ],
      "options": [
        "Processing or reasoning",
        "Image classification",
        "Data backup",
        "Video rendering"
      ],
      "explanation": "The middle step decides how to respond to the spoken input.",
      "topic": "Creating a speech-capable agent",
      "sourceUnit": "4-voice-live",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/4-voice-live",
      "coverage": "module"
    },
    {
      "id": "azure-speech-match-10",
      "type": "match",
      "prompt": "Which Voice Live capability makes it unnecessary to build a separate STT–reasoning–TTS orchestration pipeline?",
      "answer": "Managed real-time voice service",
      "aliases": [
        "Managed real-time voice service"
      ],
      "options": [
        "Managed real-time voice service",
        "Batch image indexing",
        "Document field mapping",
        "Static text-only endpoint"
      ],
      "explanation": "Voice Live combines the principal voice conversation components.",
      "topic": "Creating a speech-capable agent",
      "sourceUnit": "4-voice-live",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/4-voice-live",
      "coverage": "module"
    },
    {
      "id": "azure-speech-scenario-01",
      "type": "scenario",
      "prompt": "A student wants live captions during a lecture. Which capability should an app use?",
      "answer": "Real-time speech recognition",
      "aliases": [
        "Real-time speech recognition"
      ],
      "options": [
        "Real-time speech recognition",
        "Batch image processing",
        "Speech synthesis",
        "Video generation"
      ],
      "explanation": "Real-time STT transcribes speech while it occurs.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-scenario-02",
      "type": "scenario",
      "prompt": "A company has a folder of recorded calls for overnight analysis. Which transcription mode is most appropriate?",
      "answer": "Batch transcription",
      "aliases": [
        "Batch transcription"
      ],
      "options": [
        "Batch transcription",
        "Live microphone streaming only",
        "Speech synthesis",
        "Image generation"
      ],
      "explanation": "Batch speech recognition handles recordings asynchronously.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-scenario-03",
      "type": "scenario",
      "prompt": "A Python tool needs to transcribe a voicemail file into written text. Which object should run recognition?",
      "answer": "SpeechRecognizer",
      "aliases": [
        "SpeechRecognizer"
      ],
      "options": [
        "SpeechRecognizer",
        "SpeechSynthesizer",
        "TextAnalyticsClient",
        "BlobServiceClient"
      ],
      "explanation": "SpeechRecognizer handles speech-to-text input.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-scenario-04",
      "type": "scenario",
      "prompt": "A client app must display live partial transcriptions before speech has ended. Which recognition event is relevant?",
      "answer": "recognizing",
      "aliases": [
        "recognizing"
      ],
      "options": [
        "recognizing",
        "speak_text_async",
        "SynthesizingAudioCompleted",
        "print only"
      ],
      "explanation": "The recognizing event reports interim recognition results.",
      "topic": "Speech recognition",
      "sourceUnit": "2-speech-recognition",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/2-speech-recognition",
      "coverage": "module"
    },
    {
      "id": "azure-speech-scenario-05",
      "type": "scenario",
      "prompt": "An accessibility app needs to read on-screen text aloud. Which service fits?",
      "answer": "Azure Speech text-to-speech",
      "aliases": [
        "Azure Speech text-to-speech"
      ],
      "options": [
        "Azure Speech text-to-speech",
        "Azure Speech speech-to-text",
        "Document OCR only",
        "Image classification"
      ],
      "explanation": "Text-to-speech converts the text into audible speech.",
      "topic": "Speech synthesis",
      "sourceUnit": "3-speech-synthesis",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/3-speech-synthesis",
      "coverage": "module"
    },
    {
      "id": "azure-speech-scenario-06",
      "type": "scenario",
      "prompt": "A text-to-speech narrator is too fast. Which setting should the developer adjust?",
      "answer": "Speaking rate",
      "aliases": [
        "Speaking rate"
      ],
      "options": [
        "Speaking rate",
        "Model temperature",
        "OCR threshold",
        "Region name"
      ],
      "explanation": "Speaking rate controls narration speed.",
      "topic": "Speech synthesis",
      "sourceUnit": "3-speech-synthesis",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/3-speech-synthesis",
      "coverage": "module"
    },
    {
      "id": "azure-speech-scenario-07",
      "type": "scenario",
      "prompt": "A generated announcement needs a particular voice. Which input should be configured?",
      "answer": "Voice",
      "aliases": [
        "Voice"
      ],
      "options": [
        "Voice",
        "Speech transcript",
        "Image prompt",
        "Document index"
      ],
      "explanation": "Text-to-speech accepts a selected voice.",
      "topic": "Speech synthesis",
      "sourceUnit": "3-speech-synthesis",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/3-speech-synthesis",
      "coverage": "module"
    },
    {
      "id": "azure-speech-scenario-08",
      "type": "scenario",
      "prompt": "An app needs to save generated speech for playback later. Which TTS output is suitable?",
      "answer": "Audio file",
      "aliases": [
        "Audio file"
      ],
      "options": [
        "Audio file",
        "Vector index",
        "Bounding box",
        "JSON field name"
      ],
      "explanation": "Text-to-speech can write the synthesis to an audio file.",
      "topic": "Speech synthesis",
      "sourceUnit": "3-speech-synthesis",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/3-speech-synthesis",
      "coverage": "module"
    },
    {
      "id": "azure-speech-scenario-09",
      "type": "scenario",
      "prompt": "A voice assistant should listen, reason and talk back during a conversation. Which Azure capability is designed for this?",
      "answer": "Voice Live",
      "aliases": [
        "Voice Live"
      ],
      "options": [
        "Voice Live",
        "Batch-only transcription",
        "TextAnalyticsClient",
        "Computer Vision"
      ],
      "explanation": "Voice Live supports low-latency two-way spoken exchanges.",
      "topic": "Creating a speech-capable agent",
      "sourceUnit": "4-voice-live",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/4-voice-live",
      "coverage": "module"
    },
    {
      "id": "azure-speech-scenario-10",
      "type": "scenario",
      "prompt": "A team wants a voice agent without wiring together STT, reasoning and TTS manually. What would simplify implementation?",
      "answer": "Voice Live API",
      "aliases": [
        "Voice Live API"
      ],
      "options": [
        "Voice Live API",
        "OCR API",
        "Document layout analyzer",
        "SQL-only backend"
      ],
      "explanation": "Voice Live provides a managed conversational voice service.",
      "topic": "Creating a speech-capable agent",
      "sourceUnit": "4-voice-live",
      "sourceUrl": "https://learn.microsoft.com/en-us/training/modules/get-started-speech-azure/4-voice-live",
      "coverage": "module"
    }
  ]
});
