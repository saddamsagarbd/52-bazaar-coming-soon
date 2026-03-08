"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  // const [email, setEmail] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  // সিম্পল কাউন্টডাউন (উদাহরণ: ৩০ দিন পর লঞ্চ)
  const calculateTimeLeft = () => {
    const launchDate = new Date('2026-04-15T00:00:00');
    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();
    
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email) {
  //     console.log('Email submitted:', email);
  //     setSubmitted(true);
  //     setEmail('');
  //   }
  // };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#1E3A5F] via-[#2563EB] to-[#0EA5A4] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto"
      >
        {/* লোগো / নাম */}
        <motion.img
          src="/logo.png"
          alt="52 Bazaar Logo"
          className="mx-auto h-32 md:h-48 w-auto mb-8 drop-shadow-2xl"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
        >
        ৫২ বাজার !!!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl md:text-2xl text-gray-200 mb-12"
        >
          আমাদের নতুন ই-কমার্স প্ল্যাটফর্ম শীঘ্রই আসছে!
        </motion.p>

        {/* কাউন্টডাউন */}
        <div className="flex justify-center gap-6 md:gap-12 mb-16 flex-wrap">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <motion.div
              key={unit}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 min-w-25 border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold text-white">
                {Number(value).toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-gray-300 capitalize mt-2">
                {unit}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ইমেইল সাইনআপ */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-md mx-auto"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="তোমার ইমেইল দাও..."
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:border-white/60 transition"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-indigo-900 font-semibold rounded-full hover:bg-gray-100 transition transform hover:scale-105"
              >
                নোটিফাই করো
              </button>
            </form>
          ) : (
            <motion.p
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-2xl text-green-300 font-semibold"
            >
              ধন্যবাদ! লঞ্চের খবর তোমাকে পাঠানো হবে।
            </motion.p>
          )}
        </motion.div> */}

        {/* সোশ্যাল আইকন (ঐচ্ছিক) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex justify-center gap-8"
        >
          {['Facebook', 'Instagram', 'Twitter'].map((platform) => (
            <a
              key={platform}
              href="#"
              className="text-white/70 hover:text-white transition text-3xl"
            >
              {/* আইকন যোগ করো (react-icons বা SVG) */}
              {platform.charAt(0)}
            </a>
          ))}
        </motion.div>

        <p className="mt-20 text-gray-400 text-sm">
          © {new Date().getFullYear()} 52 Bazaar - সব অধিকার সংরক্ষিত
        </p>
      </motion.div>
    </div>
  );
};

export default ComingSoon;