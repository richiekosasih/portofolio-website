import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sun, Moon, Settings, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSelector = () => {
  const { currentTheme, isDarkMode, themes, changeTheme, toggleDarkMode } =
    useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className='fixed top-6 right-6 z-50'>
      {/* Theme Selector Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='absolute top-16 right-0 w-80 glass rounded-2xl border border-white/20 p-6 shadow-2xl'
            style={{ backdropFilter: 'blur(20px)' }}
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className='flex items-center justify-between mb-6'
            >
              <div className='flex items-center space-x-2'>
                <Palette size={20} className='text-purple-400' />
                <h3 className='font-semibold text-white'>Theme Settings</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className='text-gray-400 hover:text-white transition-colors'
              >
                <X size={18} />
              </button>
            </motion.div>

            {/* Dark Mode Toggle */}
            <motion.div variants={itemVariants} className='mb-6'>
              <div className='flex items-center justify-between mb-3'>
                <span className='text-gray-300 font-medium'>Dark Mode</span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleDarkMode}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                    isDarkMode ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                >
                  <motion.div
                    animate={{ x: isDarkMode ? 24 : 0 }}
                    transition={{ duration: 0.3 }}
                    className='absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center'
                  >
                    {isDarkMode ? (
                      <Moon size={12} className='text-purple-600' />
                    ) : (
                      <Sun size={12} className='text-orange-500' />
                    )}
                  </motion.div>
                </motion.button>
              </div>
              <p className='text-xs text-gray-400'>
                {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              </p>
            </motion.div>

            {/* Mode Selection */}
            <motion.div variants={itemVariants}>
              <h4 className='text-gray-300 font-medium mb-3'>Mode</h4>
              <div className='grid grid-cols-2 gap-3'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => changeTheme('dark')}
                  className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                    currentTheme === 'dark'
                      ? 'border-white/50 bg-white/10'
                      : 'border-white/20 hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  <div className='flex items-center space-x-2'>
                    <Moon size={14} className='text-purple-400' />
                    <span className='text-white text-sm font-medium'>Dark</span>
                  </div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => changeTheme('light')}
                  className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                    currentTheme === 'light'
                      ? 'border-white/50 bg-white/10'
                      : 'border-white/20 hover:border-white/30 hover:bg-white/5'
                  }`}
                >
                  <div className='flex items-center space-x-2'>
                    <Sun size={14} className='text-yellow-400' />
                    <span className='text-white text-sm font-medium'>
                      Light
                    </span>
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Preview */}
            <motion.div
              variants={itemVariants}
              className='mt-6 pt-4 border-t border-white/10'
            >
              <p className='text-gray-400 text-xs mb-2'>Preview</p>
              <div
                className={`p-3 rounded-lg bg-gradient-to-r ${themes[currentTheme].primary} opacity-80`}
              >
                <div className='text-white text-sm font-medium'>
                  {themes[currentTheme].name}
                </div>
                <div className='text-white/80 text-xs'>
                  {isDarkMode ? 'Dark' : 'Light'} mode active
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 rounded-full bg-gradient-to-r ${themes[currentTheme].primary} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
        title='Theme Settings'
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Settings size={20} />
        </motion.div>
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/20 backdrop-blur-sm -z-10'
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
