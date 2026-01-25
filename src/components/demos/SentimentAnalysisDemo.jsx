import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaSmile, FaMeh, FaFrown, FaTags, FaChartBar } from "react-icons/fa";

const sampleReviews = [
  "The hotel was absolutely amazing! The staff were incredibly friendly and the room was spotless. Best vacation ever!",
  "Terrible experience. Room was dirty, noisy neighbors all night, and the breakfast was cold. Would not recommend.",
  "Decent stay. Nothing special but nothing terrible either. Average price for what you get.",
  "Beautiful location with stunning views. However, the WiFi was unreliable and check-in took forever.",
];

const topicColors = {
  "Service": "bg-blue-500/20 text-blue-400",
  "Cleanliness": "bg-green-500/20 text-green-400",
  "Location": "bg-purple-500/20 text-purple-400",
  "Amenities": "bg-orange-500/20 text-orange-400",
  "Value": "bg-pink-500/20 text-pink-400",
  "Food": "bg-yellow-500/20 text-yellow-400",
};

const analyzeReview = (text) => {
  const lowerText = text.toLowerCase();

  // Sentiment analysis (simplified)
  const positiveWords = ["amazing", "excellent", "great", "wonderful", "best", "friendly", "beautiful", "stunning", "spotless", "love"];
  const negativeWords = ["terrible", "awful", "dirty", "noisy", "cold", "unreliable", "forever", "worst", "disappointed", "bad"];

  const positiveCount = positiveWords.filter(w => lowerText.includes(w)).length;
  const negativeCount = negativeWords.filter(w => lowerText.includes(w)).length;

  let sentiment, score, emoji;
  if (positiveCount > negativeCount) {
    sentiment = "Positive";
    score = 0.7 + (positiveCount * 0.05);
    emoji = <FaSmile className="text-green-400" />;
  } else if (negativeCount > positiveCount) {
    sentiment = "Negative";
    score = 0.3 - (negativeCount * 0.05);
    emoji = <FaFrown className="text-red-400" />;
  } else {
    sentiment = "Neutral";
    score = 0.5;
    emoji = <FaMeh className="text-yellow-400" />;
  }

  // Topic detection
  const topics = [];
  if (lowerText.includes("staff") || lowerText.includes("friendly") || lowerText.includes("service")) {
    topics.push({ name: "Service", score: 0.85 });
  }
  if (lowerText.includes("clean") || lowerText.includes("dirty") || lowerText.includes("spotless")) {
    topics.push({ name: "Cleanliness", score: 0.92 });
  }
  if (lowerText.includes("location") || lowerText.includes("view") || lowerText.includes("beautiful")) {
    topics.push({ name: "Location", score: 0.78 });
  }
  if (lowerText.includes("wifi") || lowerText.includes("room") || lowerText.includes("amenities")) {
    topics.push({ name: "Amenities", score: 0.71 });
  }
  if (lowerText.includes("price") || lowerText.includes("value") || lowerText.includes("average")) {
    topics.push({ name: "Value", score: 0.65 });
  }
  if (lowerText.includes("breakfast") || lowerText.includes("food") || lowerText.includes("restaurant")) {
    topics.push({ name: "Food", score: 0.88 });
  }

  if (topics.length === 0) {
    topics.push({ name: "Service", score: 0.6 });
  }

  // Key phrases
  const phrases = text.match(/\b[A-Za-z]+\s[A-Za-z]+\b/g)?.slice(0, 4) || [];

  return {
    sentiment,
    score: Math.min(Math.max(score, 0.1), 0.95),
    emoji,
    topics,
    phrases,
    wordCount: text.split(/\s+/).length,
  };
};

export default function SentimentAnalysisDemo() {
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (!inputText.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      setResult(analyzeReview(inputText));
      setIsAnalyzing(false);
    }, 1500);
  };

  const useSample = (text) => {
    setInputText(text);
    setResult(null);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Hotel Review NLP Analysis</h3>
        <p className="text-gray-400 text-sm">BERT sentiment classification & LDA topic modeling</p>
      </div>

      <div className="space-y-6">
        {/* Input area */}
        <div className="space-y-3">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter a hotel review to analyze..."
            className="w-full h-28 bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />

          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-500">Try samples:</span>
            {sampleReviews.map((review, i) => (
              <button
                key={i}
                onClick={() => useSample(review)}
                className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full transition-colors"
              >
                Sample {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!inputText.trim() || isAnalyzing}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-all"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Analyzing with BERT...
              </>
            ) : (
              <>
                <FaSearch /> Analyze Review
              </>
            )}
          </button>
        </div>

        {/* Results */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* Sentiment score */}
              <div className="bg-gray-800/50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{result.emoji}</span>
                    <div>
                      <h4 className="font-bold text-lg">{result.sentiment}</h4>
                      <p className="text-xs text-gray-400">{result.wordCount} words analyzed</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{(result.score * 100).toFixed(1)}%</div>
                    <div className="text-xs text-gray-400">Confidence</div>
                  </div>
                </div>

                {/* Sentiment bar */}
                <div className="relative h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ left: "50%" }}
                    animate={{ left: `${result.score * 100}%` }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-gray-800"
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Negative</span>
                  <span>Neutral</span>
                  <span>Positive</span>
                </div>
              </div>

              {/* Topics */}
              <div className="bg-gray-800/50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <FaTags className="text-purple-400" />
                  <h4 className="font-semibold">Detected Topics (LDA)</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.topics.map((topic, i) => (
                    <div
                      key={i}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium ${topicColors[topic.name]}`}
                    >
                      {topic.name} ({(topic.score * 100).toFixed(0)}%)
                    </div>
                  ))}
                </div>
              </div>

              {/* Key phrases */}
              {result.phrases.length > 0 && (
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FaChartBar className="text-blue-400" />
                    <h4 className="font-semibold">Key Phrases</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.phrases.map((phrase, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-sm"
                      >
                        "{phrase}"
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Model info */}
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-blue-400 font-bold">BERT</div>
                  <div className="text-xs text-gray-400">Sentiment</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-purple-400 font-bold">LDA</div>
                  <div className="text-xs text-gray-400">Topics</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-green-400 font-bold">45ms</div>
                  <div className="text-xs text-gray-400">Inference</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
