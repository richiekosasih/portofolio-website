import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

import LiquidGlassButton from './LiquidGlassButton';

// Typewriter Effect Component
const TypewriterText = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const phrases = [
      'Full-Stack Developer',
      'React & Node.js Specialist',
      'UI/UX Enthusiast',
      'Problem Solver & Innovator',
    ];

    const currentText = phrases[currentPhrase];

    if (currentIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCurrentIndex(0);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentPhrase]);

  return (
    <span className='min-h-[1.2em] inline-block'>
      {text}
      <span className='animate-pulse'>|</span>
    </span>
  );
};

// Simple animated background shapes
const FloatingShapes = () => {
  return (
    <>
      {/* Floating geometric shapes */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse' />
        <div className='absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000' />
        <div className='absolute bottom-40 left-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-2000' />
        <div className='absolute bottom-20 right-10 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-3000' />
      </div>
    </>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='home'
      ref={containerRef}
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Animated Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-slate-900/20' />

      {/* Simple Background Effects */}
      <FloatingShapes />

      {/* Professional Grid Pattern */}
      <div className='absolute inset-0 opacity-20 pointer-events-none'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className='relative z-10 max-w-6xl mx-auto px-6 text-center'
      >
        <div className='hero-content'>
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-6'
          >
            <span className='inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4'>
              👋 Welcome!
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6'
          >
            <span className='iam-home-ligth-mode'>Hi, I'm </span>
            <span className='gradient-text glow-text'>Richie Kosasih</span>
          </motion.h1>

          {/* Subtitle with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8 max-w-4xl mx-auto'
          >
            <TypewriterText />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed'
          >
            Full-Stack Developer with expertise in React, Node.js, and modern
            web technologies. I create scalable applications and exceptional
            user experiences that drive business success. Ready to contribute to
            your team's growth and innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
          >
            <LiquidGlassButton
              onClick={scrollToProjects}
              variant='primary'
              size='lg'
              className='flex items-center space-x-2'
            >
              <span>View My Work</span>
              <ExternalLink size={20} />
            </LiquidGlassButton>

            <LiquidGlassButton
              onClick={scrollToContact}
              variant='glass'
              size='lg'
              className='flex items-center space-x-2'
            >
              <span>Get In Touch</span>
              <Mail size={20} />
            </LiquidGlassButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='flex justify-center space-x-6 mb-16'
          >
            {[
              {
                icon: Github,
                href: 'https://github.com/richiekosasih',
                label: 'GitHub',
              },
              {
                icon: Linkedin,
                href: 'https://linkedin.com/in/richiekosasih',
                label: 'LinkedIn',
              },
              {
                icon: Mail,
                href: 'mailto:richiekosasih@gmail.com',
                label: 'Email',
              },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith('mailto:') ? '_self' : '_blank'
                  }
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className='p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white hover:bg-purple-500/20 smooth-transition'
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className='flex flex-col items-center'
          >
            <p className='text-gray-400 text-sm mb-4'>Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className='p-2 rounded-full border border-gray-600'
            >
              <ArrowDown size={20} className='text-gray-400' />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute w-2 h-2 bg-purple-400/30 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
