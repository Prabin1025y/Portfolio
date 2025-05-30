"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  ArrowLeft,
  Code,
  Wrench,
  Zap,
  Star,
  Coffee,
  Gamepad2,
  RotateCcw,
  Trophy,
} from "lucide-react";

export default function UnderDevelopmentPage() {
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [clickPosition, setClickPosition] = useState({ x: 50, y: 50 });
  const [gameStarted, setGameStarted] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [showClickEffect, setShowClickEffect] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && gameActive) {
      setGameActive(false);
      if (score > highScore) {
        setHighScore(score);
      }
    }
    return () => clearTimeout(timer);
  }, [gameActive, timeLeft, score, highScore]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setGameStarted(true);
    moveTarget();
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(false);
    setGameStarted(false);
    setClickPosition({ x: 50, y: 50 });
  };

  const moveTarget = () => {
    const newX = Math.random() * 80 + 10; // Keep within 10-90% range
    const newY = Math.random() * 80 + 10;
    setClickPosition({ x: newX, y: newY });
  };

  const handleTargetClick = () => {
    if (gameActive) {
      setScore(score + 1);
      setShowClickEffect(true);
      setTimeout(() => setShowClickEffect(false), 200);
      moveTarget();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs - Teal Theme */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/20 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-blue-500/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/2 w-32 h-32 bg-teal-400/15 rounded-full blur-lg animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Floating Development Icons */}
        <div
          className="absolute top-20 left-10 text-teal-400/30 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        >
          <Code size={40} />
        </div>
        <div
          className="absolute top-40 right-20 text-cyan-400/30 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        >
          <Wrench size={30} />
        </div>
        <div
          className="absolute bottom-40 left-20 text-teal-300/30 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3.5s" }}
        >
          <Zap size={35} />
        </div>
        <div
          className="absolute top-1/3 left-2/3 text-cyan-300/20 animate-spin"
          style={{ animationDuration: "8s" }}
        >
          <Star size={25} />
        </div>
        <div
          className="absolute bottom-1/3 right-1/4 text-teal-300/20 animate-spin"
          style={{ animationDuration: "6s" }}
        >
          <Coffee size={28} />
        </div>

        {/* Moving Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-teal-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>


      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 text-center">
        {/* Main Title */}
        <div className="mb-8 animate-[fadeInUp_1s_ease-out]">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse mb-4">
              Under Development
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 blur-lg rounded-lg animate-pulse"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mt-6">
            We're crafting something amazing! While you wait, why not try our
            mini-game?
          </p>
        </div>

        {/* Mini Game Section */}
        <div className="mb-12 w-full max-w-2xl animate-[fadeInUp_1s_ease-out_0.2s_both]">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gamepad2 className="text-teal-400 h-8 w-8" />
              <h2 className="text-3xl font-bold text-white">
                Click the Target!
              </h2>
            </div>

            {/* Game Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-teal-500/20 rounded-xl p-3">
                <div className="text-2xl font-bold text-white">{score}</div>
                <div className="text-teal-300 text-sm">Score</div>
              </div>
              <div className="bg-cyan-500/20 rounded-xl p-3">
                <div className="text-2xl font-bold text-white">{timeLeft}</div>
                <div className="text-cyan-300 text-sm">Time</div>
              </div>
              <div className="bg-blue-500/20 rounded-xl p-3">
                <div className="text-2xl font-bold text-white">{highScore}</div>
                <div className="text-blue-300 text-sm">Best</div>
              </div>
              <div className="bg-purple-500/20 rounded-xl p-3">
                <div className="text-2xl font-bold text-white">
                  {gameActive ? "ON" : "OFF"}
                </div>
                <div className="text-purple-300 text-sm">Status</div>
              </div>
            </div>

            {/* Game Area */}
            <div className="relative w-full h-64 bg-slate-800/50 rounded-2xl mb-6 overflow-hidden border-2 border-teal-500/30">
              {gameStarted && (
                <div
                  className={`absolute w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full cursor-pointer transition-all duration-300 hover:scale-110 flex items-center justify-center ${
                    showClickEffect ? "animate-ping" : ""
                  }`}
                  style={{
                    left: `${clickPosition.x}%`,
                    top: `${clickPosition.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={handleTargetClick}
                >
                  <Star className="text-white h-6 w-6" />
                </div>
              )}

              {!gameStarted && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Gamepad2 className="mx-auto mb-4 text-teal-400 h-12 w-12 animate-bounce" />
                    <p className="text-gray-400">Click START to begin!</p>
                  </div>
                </div>
              )}

              {gameActive && timeLeft <= 5 && (
                <div className="absolute inset-0 bg-red-500/20 animate-pulse rounded-2xl"></div>
              )}
            </div>

            {/* Game Controls */}
            <div className="flex gap-4 justify-center">
              {!gameActive ? (
                <button
                  onClick={startGame}
                  className="px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 flex items-center gap-2"
                >
                  <Zap className="h-5 w-5" />
                  START GAME
                </button>
              ) : (
                <div className="text-teal-300 font-semibold text-lg animate-pulse">
                  Game Active! Click the target!
                </div>
              )}

              <button
                onClick={resetGame}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <RotateCcw className="h-5 w-5" />
                RESET
              </button>
            </div>

            {timeLeft === 0 && gameStarted && (
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Trophy className="text-yellow-400 h-6 w-6" />
                  <span className="text-white font-bold text-lg">
                    Game Over!
                  </span>
                </div>
                <p className="text-gray-300">
                  Final Score:{" "}
                  <span className="text-teal-400 font-bold">{score}</span>
                  {score === highScore && score > 0 && (
                    <span className="ml-2 text-yellow-400">
                      🎉 New High Score!
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
