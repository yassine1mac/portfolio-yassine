import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaExclamationTriangle, FaCheckCircle, FaEye, FaHandPaper } from "react-icons/fa";

const behaviors = [
  { time: 0, status: "normal", event: "Student focused on screen", confidence: 98 },
  { time: 2, status: "normal", event: "Normal head movement", confidence: 95 },
  { time: 4, status: "warning", event: "Looking away from screen", confidence: 78 },
  { time: 6, status: "normal", event: "Returned to screen", confidence: 94 },
  { time: 8, status: "warning", event: "Suspicious hand movement", confidence: 65 },
  { time: 10, status: "alert", event: "Looking at secondary device", confidence: 89 },
  { time: 12, status: "normal", event: "Back to normal behavior", confidence: 96 },
  { time: 14, status: "warning", event: "Extended look away", confidence: 72 },
  { time: 16, status: "normal", event: "Focused on exam", confidence: 97 },
];

const posePoints = [
  { x: 50, y: 15, label: "Head" },
  { x: 50, y: 30, label: "Neck" },
  { x: 35, y: 35, label: "L.Shoulder" },
  { x: 65, y: 35, label: "R.Shoulder" },
  { x: 25, y: 55, label: "L.Elbow" },
  { x: 75, y: 55, label: "R.Elbow" },
  { x: 20, y: 75, label: "L.Wrist" },
  { x: 80, y: 75, label: "R.Wrist" },
];

export default function CheatingDetectionDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [events, setEvents] = useState([]);
  const [currentStatus, setCurrentStatus] = useState("normal");

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + 0.5;
          if (newTime > 18) {
            setIsRunning(false);
            return 0;
          }
          return newTime;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    const currentBehavior = behaviors.find(
      (b) => Math.abs(b.time - currentTime) < 1
    );
    if (currentBehavior) {
      setCurrentStatus(currentBehavior.status);
      if (!events.find((e) => e.time === currentBehavior.time)) {
        setEvents((prev) => [currentBehavior, ...prev].slice(0, 5));
      }
    }
  }, [currentTime]);

  const toggleSimulation = () => {
    if (!isRunning && currentTime === 0) {
      setEvents([]);
    }
    setIsRunning(!isRunning);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "alert": return "text-red-500 bg-red-500/20";
      case "warning": return "text-yellow-500 bg-yellow-500/20";
      default: return "text-green-500 bg-green-500/20";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "alert": return <FaExclamationTriangle />;
      case "warning": return <FaEye />;
      default: return <FaCheckCircle />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Cheating Detection System</h3>
        <p className="text-gray-400 text-sm">Real-time pose estimation and behavior analysis</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Pose visualization */}
        <div className="relative bg-gray-800 rounded-xl aspect-video overflow-hidden">
          {/* Status indicator */}
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 ${getStatusColor(currentStatus)}`}>
            {getStatusIcon(currentStatus)}
            {currentStatus === "alert" ? "ALERT" : currentStatus === "warning" ? "WARNING" : "NORMAL"}
          </div>

          {/* Confidence */}
          <div className="absolute top-3 right-3 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
            {behaviors.find(b => Math.abs(b.time - currentTime) < 1)?.confidence || 95}% Confidence
          </div>

          {/* Pose skeleton */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Connections */}
            <motion.line x1="50" y1="15" x2="50" y2="30" stroke="#3b82f6" strokeWidth="2" />
            <motion.line x1="50" y1="30" x2="35" y2="35" stroke="#3b82f6" strokeWidth="2" />
            <motion.line x1="50" y1="30" x2="65" y2="35" stroke="#3b82f6" strokeWidth="2" />
            <motion.line x1="35" y1="35" x2="25" y2="55" stroke="#3b82f6" strokeWidth="2" />
            <motion.line x1="65" y1="35" x2="75" y2="55" stroke="#3b82f6" strokeWidth="2" />
            <motion.line
              x1="25" y1="55"
              x2={currentStatus === "warning" ? "15" : currentStatus === "alert" ? "10" : "20"}
              y2="75"
              stroke={currentStatus !== "normal" ? "#ef4444" : "#3b82f6"}
              strokeWidth="2"
              animate={{
                x2: currentStatus === "warning" ? 15 : currentStatus === "alert" ? 10 : 20,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.line x1="75" y1="55" x2="80" y2="75" stroke="#3b82f6" strokeWidth="2" />

            {/* Points */}
            {posePoints.map((point, i) => (
              <motion.circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="3"
                fill={i === 0 && currentStatus !== "normal" ? "#ef4444" : "#60a5fa"}
                animate={{
                  cx: i === 0 && currentStatus === "warning" ? point.x - 10 :
                      i === 0 && currentStatus === "alert" ? point.x - 15 : point.x,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}

            {/* Head circle */}
            <motion.circle
              cx="50"
              cy="15"
              r="8"
              fill="none"
              stroke={currentStatus !== "normal" ? "#ef4444" : "#60a5fa"}
              strokeWidth="2"
              animate={{
                cx: currentStatus === "warning" ? 40 : currentStatus === "alert" ? 35 : 50,
              }}
              transition={{ duration: 0.3 }}
            />
          </svg>

          {/* Time indicator */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                style={{ width: `${(currentTime / 18) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{currentTime.toFixed(1)}s</span>
              <span>18.0s</span>
            </div>
          </div>
        </div>

        {/* Event log */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-300">Detection Log</h4>
            <button
              onClick={toggleSimulation}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isRunning
                  ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                  : "bg-green-500/20 text-green-400 hover:bg-green-500/30"
              }`}
            >
              {isRunning ? <FaPause /> : <FaPlay />}
              {isRunning ? "Pause" : "Start Demo"}
            </button>
          </div>

          <div className="space-y-2 max-h-48 overflow-y-auto">
            {events.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                Click "Start Demo" to begin simulation
              </div>
            ) : (
              events.map((event, i) => (
                <motion.div
                  key={`${event.time}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-center gap-3 p-3 rounded-lg ${getStatusColor(event.status)}`}
                >
                  <span className="text-lg">{getStatusIcon(event.status)}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{event.event}</p>
                    <p className="text-xs opacity-70">
                      {event.time}s • {event.confidence}% confidence
                    </p>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Model info */}
          <div className="bg-gray-800/50 rounded-xl p-4 text-sm space-y-2">
            <div className="flex justify-between text-gray-400">
              <span>Model</span>
              <span className="text-white">XGBoost + MediaPipe</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Tracking</span>
              <span className="text-white">MLflow Experiment</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>FPS</span>
              <span className="text-white">30 frames/sec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
