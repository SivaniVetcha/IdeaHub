import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Lightbulb, Rocket } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

const typingTexts = [
  "Post Ideas, Find Teammates, Build Together",
  "Connect with Brilliant Minds Across India",
  "Turn Your Innovative Ideas into Reality",
  "Join the Next Generation of Innovators"
];

export const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = typingTexts[currentText];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(text.substring(0, displayText.length + 1));
        if (displayText === text) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(text.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, displayText, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>
      
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
              rotateZ: [0, 360, 0]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 4 === 0 && <Lightbulb className="w-6 h-6 text-blue-400 opacity-30" />}
            {i % 4 === 1 && <Users className="w-5 h-5 text-purple-400 opacity-30" />}
            {i % 4 === 2 && <Rocket className="w-4 h-4 text-indigo-400 opacity-30" />}
            {i % 4 === 3 && <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30" />}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="mb-8"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            whileHover={{ rotateY: 10, scale: 1.05 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-6 rounded-3xl shadow-2xl">
              <Sparkles className="w-16 h-16 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8"
            style={{ 
              textShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transform: 'translateZ(50px)'
            }}
          >
            <span className="block mb-4">Welcome to</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              IdeaHub
            </span>
          </motion.h1>
          
          <div className="h-24 md:h-28 flex items-center justify-center">
            <motion.p 
              className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-medium"
              style={{ transform: 'translateZ(30px)' }}
            >
              {displayText}
              <motion.span 
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-blue-600"
              >
                |
              </motion.span>
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Link to="/explore">
            <Button size="lg" className="group transform-gpu">
              <Sparkles className="mr-2 w-6 h-6 group-hover:rotate-12 transition-transform" />
              Explore Ideas
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link to="/submit">
            <Button variant="secondary" size="lg" className="group transform-gpu">
              <Lightbulb className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
              Submit Your Idea
            </Button>
          </Link>
        </motion.div>

        {/* 3D Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "15K+", label: "Active Students", icon: Users },
            { number: "3K+", label: "Project Ideas", icon: Lightbulb },
            { number: "800+", label: "Teams Formed", icon: Rocket }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -10, 
                rotateY: 10, 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};