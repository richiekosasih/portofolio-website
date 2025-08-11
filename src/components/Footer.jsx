import { motion } from 'framer-motion';
import {
  Heart,
  Code,
  Coffee,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowUp,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/richie', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/richie',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/richie_kosasih/',
      label: 'Instagram',
    },
    { icon: Mail, href: 'mailto:richie@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className='relative py-12 mt-20'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Main Footer Content */}
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className='font-display text-2xl font-bold gradient-text mb-2'>
                Richie Kosasih
              </h3>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Passionate web developer crafting digital experiences with
                modern technologies. Always learning, always creating.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='flex items-center space-x-2 text-sm text-gray-400'
            >
              <span>Made with</span>
              <Heart size={16} className='text-red-500 animate-pulse' />
              <span>and</span>
              <Coffee size={16} className='text-yellow-600' />
              <span>using</span>
              <Code size={16} className='text-blue-500' />
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='font-semibold text-white text-lg'
            >
              Quick Links
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='space-y-2'
            >
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className='block text-gray-400 hover:text-purple-300 transition-colors text-sm'
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Social Links & Contact */}
          <div className='space-y-4'>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='font-semibold text-white text-lg'
            >
              Let's Connect
            </motion.h4>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className='flex space-x-4'
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith('mailto:') ? '_self' : '_blank'
                    }
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className='p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all duration-300'
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className='text-gray-400 text-sm'
            >
              Open to opportunities and collaborations!
            </motion.p>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className='h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8'
        />

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className='text-gray-400 text-sm text-center md:text-left'
          >
            <p className='mb-2'>
              © {currentYear} Richie. All rights reserved. Built with React,
              Node.js & Tailwind CSS.
            </p>
            <p className='text-gray-500 text-xs'>
              Designed with passion for creating exceptional web experiences.
            </p>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className='flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-colors text-sm font-medium'
            aria-label='Back to top'
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </motion.button>
        </div>

        {/* Fun Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className='text-center mt-8'
        >
          <p className='text-gray-500 text-xs'>
            🎉 Thanks for scrolling all the way down! You're awesome! 🎉
          </p>
        </motion.div>

        {/* Floating Elements */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: 100,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                y: -50,
                scale: [0, 1, 0],
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                delay: Math.random() * 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className='absolute w-1 h-1 bg-purple-400/20 rounded-full'
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
