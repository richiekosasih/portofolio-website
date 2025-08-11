import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Mail,
  MessageCircle,
  Send,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Clock,
  Coffee,
  Heart,
} from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/richiekosasih',
      color: 'hover:bg-gray-700',
      description: 'Check out my code',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/richiekosasih/',
      color: 'hover:bg-blue-600',
      description: 'Professional network',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/richie_kosasih/',
      color: 'hover:bg-pink-500',
      description: 'Follow my journey',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:richiekosasih@gmail.com',
      color: 'hover:bg-red-600',
      description: 'Send me an email',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id='contact' className='py-20 relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900/20 to-blue-900/30' />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='text-center mb-16'
        >
          <motion.span
            variants={itemVariants}
            className='inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4'
          >
            💬 Get In Touch
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className='font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6'
          >
            Let's Connect!
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'
          >
            I'm always excited to discuss new opportunities, collaborate on
            projects, or just chat about web development and technology!
          </motion.p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Enhanced Contact Form */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className='space-y-8'
          >
            {/* Quick Info */}
            <motion.div
              variants={itemVariants}
              className='glass rounded-2xl p-8 border border-white/10'
            >
              <h3 className='font-display text-2xl font-bold text-white mb-6'>
                Let's Start a Conversation
              </h3>

              <div className='space-y-4 text-gray-300'>
                <div className='flex items-center space-x-3'>
                  <MapPin className='text-purple-400' size={20} />
                  <span>Melbourne, Australia </span>
                </div>

                <div className='flex items-center space-x-3'>
                  <Clock className='text-purple-400' size={20} />
                  <span>Available 9 AM - 6 PM (AEDT)</span>
                </div>

                <div className='flex items-center space-x-3'>
                  <Coffee className='text-purple-400' size={20} />
                  <span>Always ready for coffee chats!</span>
                </div>
              </div>

              <div className='mt-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg'>
                <p className='text-purple-300 text-sm leading-relaxed'>
                  <Heart className='inline mr-1' size={16} />
                  I'm actively looking for opportunities and would love to
                  contribute to meaningful projects.
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className='glass rounded-2xl p-8 border border-white/10'
            >
              <h3 className='font-display text-2xl font-bold text-white mb-6'>
                Connect With Me
              </h3>

              <div className='grid grid-cols-2 gap-4'>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target={
                        social.url.startsWith('mailto:') ? '_self' : '_blank'
                      }
                      rel='noopener noreferrer'
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white smooth-transition ${social.color}`}
                    >
                      <Icon size={32} className='mb-2' />
                      <span className='font-medium text-sm'>{social.name}</span>
                      <span className='text-xs text-gray-400 text-center mt-1'>
                        {social.description}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              variants={itemVariants}
              className='glass rounded-2xl p-8 border border-white/10'
            >
              <h3 className='font-display text-2xl font-bold text-white mb-6'>
                Fun Facts About Me
              </h3>

              <div className='space-y-3 text-gray-300 text-sm'>
                <div className='flex items-center space-x-3'>
                  <span>🎮</span>
                  <span>I love building interactive web experiences</span>
                </div>

                <div className='flex items-center space-x-3'>
                  <span>📚</span>
                  <span>Currently reading "Clean Code" by Robert Martin</span>
                </div>

                <div className='flex items-center space-x-3'>
                  <span>🎵</span>
                  <span>I code better with lo-fi music playing</span>
                </div>

                <div className='flex items-center space-x-3'>
                  <span>🌟</span>
                  <span>
                    Dream: Building apps that impact millions of users
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
