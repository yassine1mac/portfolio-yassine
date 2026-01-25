import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUpload, FaAppleAlt, FaFire, FaWeight, FaLeaf, FaRedo } from "react-icons/fa";

const sampleFoods = [
  {
    id: 1,
    name: "Grilled Chicken Salad",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    calories: 350,
    protein: 35,
    carbs: 12,
    fat: 18,
    confidence: 94.2
  },
  {
    id: 2,
    name: "Pepperoni Pizza Slice",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
    calories: 298,
    protein: 12,
    carbs: 36,
    fat: 13,
    confidence: 91.8
  },
  {
    id: 3,
    name: "Fresh Fruit Bowl",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400",
    calories: 185,
    protein: 3,
    carbs: 47,
    fat: 1,
    confidence: 96.5
  },
  {
    id: 4,
    name: "Cheeseburger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    calories: 540,
    protein: 28,
    carbs: 40,
    fat: 31,
    confidence: 93.1
  }
];

export default function FoodCalorieDemo() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeFood = (food) => {
    setSelectedFood(food);
    setIsAnalyzing(true);
    setResult(null);

    // Simulate AI processing
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult(food);
    }, 2000);
  };

  const reset = () => {
    setSelectedFood(null);
    setResult(null);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Food & Calorie Estimation</h3>
        <p className="text-gray-400 text-sm">Click on a food image to analyze its nutritional content</p>
      </div>

      {!result ? (
        <>
          {/* Sample food grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {sampleFoods.map((food) => (
              <motion.button
                key={food.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => analyzeFood(food)}
                disabled={isAnalyzing}
                className={`relative rounded-xl overflow-hidden aspect-square ${
                  selectedFood?.id === food.id ? "ring-4 ring-blue-500" : ""
                } ${isAnalyzing ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              >
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                  <span className="text-sm font-medium">{food.name}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Analyzing state */}
          <AnimatePresence>
            {isAnalyzing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-8"
              >
                <div className="inline-flex items-center gap-3 bg-blue-500/20 px-6 py-3 rounded-full">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-400"></div>
                  <span className="text-blue-400">Analyzing with ResNet18...</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        /* Results */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          {/* Food image with confidence */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={result.image}
              alt={result.name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {result.confidence}% Confidence
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4">
              <h4 className="text-xl font-bold">{result.name}</h4>
            </div>
          </div>

          {/* Nutrition breakdown */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 text-center">
              <FaFire className="text-2xl text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{result.calories}</div>
              <div className="text-xs text-gray-400">Calories</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 text-center">
              <FaWeight className="text-2xl text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{result.protein}g</div>
              <div className="text-xs text-gray-400">Protein</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-xl p-4 text-center">
              <FaAppleAlt className="text-2xl text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{result.carbs}g</div>
              <div className="text-xs text-gray-400">Carbs</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 text-center">
              <FaLeaf className="text-2xl text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{result.fat}g</div>
              <div className="text-xs text-gray-400">Fat</div>
            </div>
          </div>

          {/* Model info */}
          <div className="bg-gray-800/50 rounded-xl p-4 text-sm">
            <div className="flex items-center justify-between text-gray-400">
              <span>Model: ResNet18 (PyTorch)</span>
              <span>Inference: 45ms</span>
            </div>
          </div>

          {/* Reset button */}
          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors"
          >
            <FaRedo /> Try Another Food
          </button>
        </motion.div>
      )}
    </div>
  );
}
