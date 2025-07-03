import React, { useState } from 'react';
import { Check, X, RotateCcw, Trophy, Star } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: 1,
      explanation: "Mars is called the 'Red Planet' because of its reddish appearance, which comes from iron oxide (rust) on its surface."
    },
    {
      id: 2,
      question: "What is the closest star to Earth?",
      options: ["Alpha Centauri", "Sirius", "The Sun", "Proxima Centauri"],
      correct: 2,
      explanation: "The Sun is the closest star to Earth, located about 93 million miles (150 million km) away."
    },
    {
      id: 3,
      question: "How many moons does Jupiter have?",
      options: ["12", "27", "79+", "4"],
      correct: 2,
      explanation: "Jupiter has over 79 known moons, with the four largest being Io, Europa, Ganymede, and Callisto (discovered by Galileo)."
    },
    {
      id: 4,
      question: "What is the name of our galaxy?",
      options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
      correct: 1,
      explanation: "Our galaxy is called the Milky Way, named after the milky band of light visible in the night sky."
    },
    {
      id: 5,
      question: "Which spacecraft first landed humans on the Moon?",
      options: ["Apollo 10", "Apollo 11", "Apollo 12", "Gemini 7"],
      correct: 1,
      explanation: "Apollo 11 was the first mission to land humans on the Moon, with Neil Armstrong and Buzz Aldrin walking on the lunar surface on July 20, 1969."
    },
    {
      id: 6,
      question: "What is the largest planet in our solar system?",
      options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
      correct: 1,
      explanation: "Jupiter is the largest planet in our solar system, with a diameter of about 88,695 miles (142,796 km)."
    },
    {
      id: 7,
      question: "What is a light-year?",
      options: ["Time it takes light to travel one year", "Distance light travels in one year", "Speed of light", "Age of the universe"],
      correct: 1,
      explanation: "A light-year is the distance that light travels in one year, approximately 6 trillion miles (9.5 trillion km)."
    },
    {
      id: 8,
      question: "Which space telescope was launched in 2021?",
      options: ["Hubble", "Spitzer", "James Webb", "Kepler"],
      correct: 2,
      explanation: "The James Webb Space Telescope was launched in December 2021 and is the most powerful space telescope ever built."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent! You\'re a space expert! 🚀';
    if (percentage >= 60) return 'Great job! You know your space facts! 🌟';
    if (percentage >= 40) return 'Good effort! Keep learning about space! 🌙';
    return 'Keep exploring! The universe has so much to offer! 🌌';
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-space-gradient pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="holographic p-8 rounded-xl text-center">
            <Trophy className="h-16 w-16 text-neon-cyan mx-auto mb-4 animate-bounce" />
            <h1 className="text-4xl font-orbitron font-bold text-white mb-4 glow-text">
              Quiz Complete!
            </h1>
            <div className={`text-6xl font-orbitron font-bold mb-4 ${getScoreColor()}`}>
              {score}/{questions.length}
            </div>
            <p className="text-xl text-gray-300 font-exo mb-8">
              {getScoreMessage()}
            </p>
            
            <div className="bg-space-dark/50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-orbitron font-bold text-white mb-4">Your Performance</h3>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-orbitron font-bold text-green-400">
                    {score}
                  </div>
                  <p className="text-gray-300 font-exo">Correct</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-orbitron font-bold text-red-400">
                    {questions.length - score}
                  </div>
                  <p className="text-gray-300 font-exo">Incorrect</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-orbitron font-bold text-neon-cyan">
                    {Math.round((score / questions.length) * 100)}%
                  </div>
                  <p className="text-gray-300 font-exo">Score</p>
                </div>
              </div>
            </div>

            <button
              onClick={resetQuiz}
              className="px-8 py-3 bg-neon-cyan/20 text-neon-cyan border border-neon-cyan rounded-full font-exo font-semibold hover:bg-neon-cyan hover:text-space-dark transition-all duration-300 glow-border animate-glow"
            >
              <RotateCcw className="h-5 w-5 inline mr-2" />
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-space-gradient pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-center text-white mb-8 glow-text">
          Space Knowledge Quiz
        </h1>
        
        <div className="holographic p-8 rounded-xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-neon-cyan font-exo">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-neon-cyan font-exo">
                Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
              </span>
            </div>
            <div className="w-full bg-space-dark/50 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-neon-cyan to-neon-purple h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-orbitron font-bold text-white mb-6 text-center">
              {questions[currentQuestion].question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-lg text-left font-exo transition-all duration-300 ${
                    showResult
                      ? index === questions[currentQuestion].correct
                        ? 'bg-green-500/20 border-green-500 text-green-400'
                        : index === selectedAnswer && index !== questions[currentQuestion].correct
                        ? 'bg-red-500/20 border-red-500 text-red-400'
                        : 'bg-space-dark/50 border-gray-600 text-gray-300'
                      : selectedAnswer === index
                      ? 'bg-neon-cyan/20 border-neon-cyan text-neon-cyan glow-border'
                      : 'bg-space-dark/50 border-gray-600 text-white hover:bg-neon-cyan/10 hover:border-neon-cyan hover:text-neon-cyan'
                  } border-2`}
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center mr-3 text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                    {showResult && index === questions[currentQuestion].correct && (
                      <Check className="h-5 w-5 ml-auto" />
                    )}
                    {showResult && index === selectedAnswer && index !== questions[currentQuestion].correct && (
                      <X className="h-5 w-5 ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Explanation */}
          {showResult && (
            <div className="mb-8 p-6 bg-space-dark/50 rounded-lg border border-neon-cyan/20">
              <h3 className="text-lg font-orbitron font-bold text-white mb-2">Explanation</h3>
              <p className="text-gray-300 font-exo">
                {questions[currentQuestion].explanation}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            {!showResult ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className={`px-8 py-3 rounded-full font-exo font-semibold transition-all duration-300 ${
                  selectedAnswer === null
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan hover:bg-neon-cyan hover:text-space-dark glow-border animate-glow'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-8 py-3 bg-neon-purple/20 text-neon-purple border border-neon-purple rounded-full font-exo font-semibold hover:bg-neon-purple hover:text-white transition-all duration-300"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            )}
          </div>
        </div>

        {/* Floating Stars */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-neon-cyan animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;