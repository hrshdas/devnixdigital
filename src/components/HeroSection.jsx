import { motion } from "framer-motion";
import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center p-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Welcome to <span className="text-blue-500">Your App</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto mb-6">
          This is a beautiful hero section made with React + TailwindCSS + Animation.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}
