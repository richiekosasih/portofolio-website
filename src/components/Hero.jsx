import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

// 3D Floating Orb Component
const FloatingOrb = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color='#8b5cf6'
        roughness={0.4}
        metalness={0.6}
        transparent
        opacity={0.8}
      />
    </mesh>
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

      {/* 3D Canvas */}
      <div className='absolute inset-0 z-0'>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingOrb />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
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
            I'm <span className='gradient-text glow-text'>Richie</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8 max-w-4xl mx-auto'
          >
            3D Web Developer & Creative Problem Solver
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed'
          >
            Creating immersive web experiences with modern technologies.
            Passionate about React, Three.js, and bringing ideas to life through
            code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg btn-glow smooth-transition flex items-center space-x-2'
            >
              <span>View My Work</span>
              <ExternalLink size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className='px-8 py-4 border-2 border-purple-500 rounded-full text-purple-300 font-semibold text-lg hover:bg-purple-500/20 smooth-transition'
            >
              Get In Touch
            </motion.button>
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
                href: 'https://github.com/richie',
                label: 'GitHub',
              },
              {
                icon: Linkedin,
                href: 'https://linkedin.com/in/richie',
                label: 'LinkedIn',
              },
              { icon: Mail, href: 'mailto:richie@example.com', label: 'Email' },
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
