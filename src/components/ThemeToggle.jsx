import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-lg hover:shadow-accent-cyan/20 transition-all duration-300"
    >
      {isDark ? (
        <Sun className="text-accent-cyan" size={24} />
      ) : (
        <Moon className="text-accent-purple" size={24} />
      )}
    </motion.button>
  );
};

export default ThemeToggle;