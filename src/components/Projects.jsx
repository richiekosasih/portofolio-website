import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ExternalLink,
  Github,
  Play,
  Code,
  Palette,
  Smartphone,
} from 'lucide-react';
import LiquidGlassButton from './LiquidGlassButton';
import ProjectShowcase from './ProjectShowcase';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: '3D Portfolio Website',
      description:
        'Interactive portfolio built with React, Three.js, and Framer Motion featuring 3D animations and immersive user experience.',
      image: '🌟',
      category: 'web',
      tags: ['React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      status: 'completed',
    },
    {
      id: 2,
      title: 'Task Manager App',
      description:
        'A beautiful and functional task management application with drag-and-drop functionality and real-time updates.',
      image: '📝',
      category: 'app',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      status: 'in-progress',
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description:
        'Modern e-commerce solution with shopping cart, payment integration, and admin dashboard.',
      image: '🛒',
      category: 'web',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'planned',
    },
    {
      id: 4,
      title: 'Weather App',
      description:
        'Beautiful weather application with animated backgrounds and detailed forecasts.',
      image: '🌤️',
      category: 'app',
      tags: ['React', 'Weather API', 'CSS Animations'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'completed',
    },
    {
      id: 5,
      title: 'Music Player',
      description:
        'Sleek music player with playlist management and audio visualizations.',
      image: '🎵',
      category: 'app',
      tags: ['JavaScript', 'Web Audio API', 'Canvas'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'in-progress',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description:
        'Content management system with markdown support and social features.',
      image: '📖',
      category: 'web',
      tags: ['React', 'GraphQL', 'Markdown', 'CMS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'planned',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'web', label: 'Web Apps', icon: Palette },
    { id: 'app', label: 'Mobile Apps', icon: Smartphone },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-emerald-500';
      case 'in-progress':
        return 'from-yellow-500 to-orange-500';
      case 'planned':
        return 'from-blue-500 to-purple-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return '✅ Completed';
      case 'in-progress':
        return '🚧 In Progress';
      case 'planned':
        return '📅 Planned';
      default:
        return 'Unknown';
    }
  };

  return (
    <section id='projects' className='py-20 relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900/30 via-purple-900/10 to-slate-900/30' />

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
            💼 My Work
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className='font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6'
          >
            Featured Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'
          >
            A showcase of my journey in web development, from learning projects
            to ambitious applications that push my skills forward
          </motion.p>
        </motion.div>

        {/* Enhanced Project Showcase */}
        <ProjectShowcase />

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='text-center mt-16'
        >
          <LiquidGlassButton
            onClick={() =>
              window.open('https://github.com/richiekosasih', '_blank')
            }
            variant='primary'
            size='lg'
            className='inline-flex items-center space-x-2'
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </LiquidGlassButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
