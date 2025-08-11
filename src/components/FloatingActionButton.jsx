import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUp,
  MessageCircle,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const actions = [
    {
      icon: Mail,
      label: 'Contact',
      action: scrollToContact,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      action: () => window.open('https://github.com/richiekosasih', '_blank'),
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      action: () =>
        window.open('https://www.linkedin.com/in/richiekosasih/', '_blank'),
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: MessageCircle,
      label: 'Chat',
      action: () => window.open('mailto:richiekosasih@gmail.com', '_self'),
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
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
      scale: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && !isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className={`fab mb-4 bg-gradient-to-r ${theme.secondary}`}
            title='Back to Top'
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Action Menu */}
      <div className='relative'>
        {/* Action Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='absolute bottom-16 right-0 space-y-3'
            >
              {actions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={action.label}
                    variants={itemVariants}
                    className='flex items-center space-x-3'
                  >
                    {/* Label */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05 }}
                      className='px-3 py-2 bg-black/80 backdrop-blur-sm rounded-lg text-white text-sm font-medium whitespace-nowrap'
                    >
                      {action.label}
                    </motion.div>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={action.action}
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                      title={action.label}
                    >
                      <Icon size={20} />
                    </motion.button>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`fab bg-gradient-to-r ${theme.primary}`}
          title={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </div>

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

export default FloatingActionButton;
