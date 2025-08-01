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

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='flex flex-wrap justify-center gap-4 mb-12'
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white glow-box'
                    : 'glass border border-white/20 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={18} />
                <span>{category.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={filter}
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className={`glass rounded-2xl overflow-hidden border border-white/20 card-hover group ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Project Image/Icon */}
                <div className='relative h-48 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center'>
                  <div className='text-6xl group-hover:scale-110 transition-transform duration-300'>
                    {project.image}
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {getStatusText(project.status)}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className='absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500'>
                      ⭐ Featured
                    </div>
                  )}

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4'>
                    <motion.a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
                      title='View Live'
                    >
                      <ExternalLink size={20} />
                    </motion.a>

                    <motion.a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
                      title='View Code'
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className='p-6'>
                  <h3 className='font-display text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                    {project.title}
                  </h3>

                  <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className='px-2 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded text-xs text-purple-300'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='text-center mt-16'
        >
          <motion.a
            href='https://github.com/richie'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg btn-glow smooth-transition'
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
