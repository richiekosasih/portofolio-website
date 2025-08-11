import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const LiquidGlassButton = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) => {
  const { theme, isDarkMode } = useTheme();
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const createRipple = (event) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(event);
  };

  const getVariantStyles = () => {
    const baseGlass = isDarkMode
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)';

    const borderColor = isDarkMode
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(0, 0, 0, 0.2)';

    switch (variant) {
      case 'primary':
        return {
          background: `linear-gradient(135deg, ${baseGlass}, ${baseGlass})`,
          border: `1px solid ${borderColor}`,
          color: theme.text.primary,
          '--theme-gradient': theme.primary,
        };
      case 'secondary':
        return {
          background: `linear-gradient(135deg, ${baseGlass}, ${baseGlass})`,
          border: `1px solid ${borderColor}`,
          color: theme.text.secondary,
          '--theme-gradient': theme.secondary,
        };
      case 'accent':
        return {
          background: `linear-gradient(135deg, ${baseGlass}, ${baseGlass})`,
          border: `1px solid ${borderColor}`,
          color: theme.text.accent,
          '--theme-gradient': theme.accent,
        };
      case 'glass':
        return {
          background: `linear-gradient(135deg, ${baseGlass}, rgba(255, 255, 255, 0.05))`,
          border: `1px solid ${borderColor}`,
          color: theme.text.primary,
          '--theme-gradient': 'rgba(255, 255, 255, 0.2)',
        };
      default:
        return {
          background: `linear-gradient(135deg, ${baseGlass}, ${baseGlass})`,
          border: `1px solid ${borderColor}`,
          color: theme.text.primary,
          '--theme-gradient': theme.primary,
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <motion.button
      ref={buttonRef}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ scale: 0.95 }}
      onClick={createRipple}
      className={`
        relative overflow-hidden
        ${sizes[size]}
        rounded-full font-semibold
        liquid-glass liquid-button
        backdrop-blur-xl
        transition-all duration-300
        shadow-lg hover:shadow-2xl
        ${className}
      `}
      style={variantStyles}
      {...props}
    >
      {/* Liquid shine effect */}
      <div className='liquid-shine' />

      {/* Theme gradient overlay */}
      <motion.div
        className='absolute inset-0 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300'
        style={{
          background: `linear-gradient(135deg, var(--theme-gradient), transparent)`,
        }}
        whileHover={{ opacity: 0.2 }}
      />

      {/* Content */}
      <span className='relative z-10 flex items-center justify-center space-x-2'>
        {children}
      </span>

      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className='liquid-ripple'
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}

      {/* Glass reflection */}
      <motion.div
        className='absolute inset-0 rounded-full'
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.3) 0%,
            transparent 50%,
            rgba(255, 255, 255, 0.1) 100%
          )`,
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Liquid orb decoration */}
      <motion.div
        className='absolute -top-1 -right-1 w-3 h-3 liquid-orb rounded-full opacity-60'
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.button>
  );
};

export default LiquidGlassButton;
