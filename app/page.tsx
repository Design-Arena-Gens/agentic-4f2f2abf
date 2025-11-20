'use client';

import { useState } from 'react';

const motivationalQuotes = [
  {
    text: "Your body is your temple. Honor it with movement, nourish it with intention, strengthen it with discipline. 🧘‍♀️💪",
    category: "Discipline"
  },
  {
    text: "Shakti flows where attention goes. Today, direct your energy towards growth, not comfort. Rise! 🔥",
    category: "Energy"
  },
  {
    text: "The warrior within doesn't wait for perfect conditions. Show up. Breathe. Move. Transform. ⚡",
    category: "Action"
  },
  {
    text: "Yoga is not about touching your toes. It's about what you learn on the way down. Keep practicing. 🙏",
    category: "Practice"
  },
  {
    text: "Every rep, every breath, every asana is a prayer to your highest self. Make it count today! 🌟",
    category: "Intention"
  },
  {
    text: "Discipline is choosing between what you want now and what you want most. Choose your future self. 💎",
    category: "Discipline"
  },
  {
    text: "The mat doesn't judge. The weights don't lie. Your body responds to consistency. Keep going! 🏋️‍♀️",
    category: "Consistency"
  },
  {
    text: "Prana is life force. Movement is medicine. Your practice is your power. Don't skip it today! ✨",
    category: "Energy"
  },
  {
    text: "Strong minds build strong bodies. Train both. Every single day is an opportunity for transformation. 🌅",
    category: "Mind-Body"
  },
  {
    text: "The pose begins when you want to leave it. That's where growth lives. Stay a little longer. 🔥",
    category: "Resilience"
  },
  {
    text: "Your only competition is who you were yesterday. Show up better. Breathe deeper. Lift heavier. 📈",
    category: "Progress"
  },
  {
    text: "Sthira Sukham Asanam - Steady and comfortable. Find strength in stability, peace in effort. Balance is power. ⚖️",
    category: "Balance"
  },
  {
    text: "The body achieves what the mind believes. Set your intention. Trust the process. Watch the magic unfold. ✨",
    category: "Belief"
  },
  {
    text: "Sweat is just your shakti leaving to make room for more power. Embrace the discomfort. You're evolving! 💧🔥",
    category: "Growth"
  },
  {
    text: "Morning sadhana sets the tone for your entire day. Rise before the sun. Own your energy. Lead yourself. 🌄",
    category: "Routine"
  },
  {
    text: "Flexibility in body, clarity in mind, fire in spirit. This is the yogic way. This is your path. 🧘‍♀️",
    category: "Yoga Philosophy"
  },
  {
    text: "Champions train when others rest. Warriors practice when others quit. Be relentless in your pursuit. 🏆",
    category: "Commitment"
  },
  {
    text: "Breath is the bridge between body and soul. Inhale courage. Exhale doubt. Repeat until you believe. 🌬️",
    category: "Breathwork"
  },
  {
    text: "Your core isn't just physical. It's your center of power, stability, and truth. Strengthen all of it. 💪",
    category: "Core Strength"
  },
  {
    text: "Rest is not weakness. Recovery is not laziness. Listen to your body. Honor the cycle. Grow stronger. 🌙",
    category: "Recovery"
  },
  {
    text: "The journey from mat to life is where yoga truly begins. Take your practice into every moment. 🌈",
    category: "Integration"
  },
  {
    text: "Fuel your body like the high-performance machine it is. What you eat today becomes your energy tomorrow. 🥗",
    category: "Nutrition"
  },
  {
    text: "Don't just stretch your body. Stretch your limits, your comfort zone, your belief in what's possible. 🚀",
    category: "Limits"
  },
  {
    text: "Asanas are not just poses. They're conversations with your inner strength. What is your body telling you today? 💬",
    category: "Awareness"
  },
  {
    text: "The mind will quit a thousand times before the body does. Train your mind first. Everything else follows. 🧠",
    category: "Mental Strength"
  }
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(motivationalQuotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateNewQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
      setCurrentQuote(motivationalQuotes[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentQuote.text);
      alert('Quote copied to clipboard! 📋');
    } catch (err) {
      alert('Failed to copy quote');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
            ShaktiFlow Motivator
          </h1>
          <p className="text-gray-600 text-lg">Daily Inspiration by Sheryl - Yog & Fitness Expert</p>
        </div>

        {/* Quote Card */}
        <div
          className={`bg-white rounded-2xl shadow-2xl p-8 mb-6 transition-all duration-300 ${
            isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}
        >
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              {currentQuote.category}
            </span>
          </div>
          <p className="text-2xl text-gray-800 leading-relaxed font-medium mb-6">
            {currentQuote.text}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 italic">- Sheryl, ShaktiFlow</p>
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors font-medium"
              >
                📋 Copy
              </button>
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generateNewQuote}
          className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
        >
          ✨ Generate New Motivation
        </button>

        {/* Info */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Share these powerful messages with your community 💪</p>
          <p className="mt-2">Perfect for Telegram, WhatsApp & Arattai groups</p>
        </div>
      </div>
    </main>
  );
}
