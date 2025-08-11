import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeAwareButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const { theme } = useTheme();

  const variants = {
    primary: `bg-gradient-to-r ${theme.primary}`,
    secondary: `bg-gradient-to-r ${theme.secondary}`,
    accent: `bg-gradient-to-r ${theme.accent}`,
    outline: `border-2 border-current text-current hover:bg-current hover:text-white`,
    ghost: `text-current hover:bg-white/10`,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        rounded-full font-semibold text-white 
        transition-all duration-300 
        btn-glow smooth-transition
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default ThemeAwareButton;
