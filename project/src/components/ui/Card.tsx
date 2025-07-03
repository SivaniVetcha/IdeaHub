import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  glow = false 
}) => {
  const baseClasses = 'bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden';
  const glowClasses = glow ? 'ring-2 ring-blue-400/30 shadow-blue-400/20 shadow-2xl' : '';
  
  return (
    <motion.div
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
        rotateX: 5,
        rotateY: 5
      } : {}}
      transition={{ 
        duration: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className={`${baseClasses} ${glowClasses} ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
    </motion.div>
  );
};