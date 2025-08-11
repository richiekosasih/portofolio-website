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
  Eye,
  Star,
  Calendar,
  Users,
  TrendingUp,
} from 'lucide-react';

const ProjectShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: '3D Interactive Portfolio',
      description:
        'A modern, interactive portfolio website built with React, Three.js, and Framer Motion. Features 3D animations, smooth scrolling, and responsive design.',
      longDescription:
        'This portfolio represents the culmination of my learning journey in modern web development. Built from scratch using React and Three.js, it features interactive 3D elements, smooth animations powered by Framer Motion, and a fully responsive design. The project showcases my skills in frontend development, 3D graphics, and modern UI/UX design principles.',
      image: '🌟',
      category: 'web',
      tags: [
        'React',
        'Three.js',
        'Tailwind CSS',
        'Framer Motion',
        'JavaScript',
      ],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      status: 'completed',
      date: 'December 2024',
      duration: '3 weeks',
      challenges: [
        'Learning Three.js from scratch',
        'Optimizing 3D performance',
        'Creating smooth animations',
      ],
      features: [
        '3D floating elements',
        'Interactive navigation',
        'Responsive design',
        'Dark theme',
        'Smooth scrolling',
      ],
      technologies: {
        frontend: ['React', 'Three.js', 'Framer Motion'],
        styling: ['Tailwind CSS', 'CSS3'],
        tools: ['Vite', 'ESLint', 'Git'],
      },
      metrics: {
        views: '1.2k',
        stars: '25',
        forks: '8',
      },
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A beautiful and functional task management application with drag-and-drop functionality, real-time updates, and collaborative features.',
      longDescription:
        'A comprehensive task management solution designed for teams and individuals. Features include drag-and-drop task organization, real-time collaboration, deadline tracking, and progress visualization. Built with modern React patterns and a Node.js backend.',
      image: '📝',
      category: 'app',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      status: 'in-progress',
      date: 'January 2024',
      duration: '4 weeks (ongoing)',
      challenges: [
        'Real-time synchronization',
        'Drag-and-drop implementation',
        'User authentication',
      ],
      features: [
        'Drag-and-drop interface',
        'Real-time collaboration',
        'Task scheduling',
        'Progress tracking',
        'Team management',
      ],
      technologies: {
        frontend: ['React', 'React DnD', 'Socket.io-client'],
        backend: ['Node.js', 'Express', 'Socket.io'],
        database: ['MongoDB', 'Mongoose'],
      },
      metrics: {
        views: '850',
        stars: '18',
        forks: '5',
      },
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      description:
        'Modern e-commerce solution with shopping cart, payment integration, inventory management, and admin dashboard.',
      longDescription:
        'A full-featured e-commerce platform with a focus on user experience and admin functionality. Includes product catalog, shopping cart, secure payment processing, order management, and comprehensive admin dashboard.',
      image: '🛒',
      category: 'web',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      status: 'planned',
      date: 'February 2024',
      duration: '6 weeks (planned)',
      challenges: [
        'Payment integration',
        'Inventory management',
        'SEO optimization',
      ],
      features: [
        'Product catalog',
        'Shopping cart',
        'Payment processing',
        'Order tracking',
        'Admin dashboard',
      ],
      technologies: {
        frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        backend: ['Next.js API', 'Prisma'],
        database: ['PostgreSQL'],
        payment: ['Stripe'],
      },
      metrics: {
        views: '0',
        stars: '0',
        forks: '0',
      },
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'web', label: 'Web Apps', icon: Palette },
    { id: 'app', label: 'Applications', icon: Smartphone },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

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
    <section className='relative'>
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
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              whileHover={{ y: -10 }}
              className={`glass rounded-2xl overflow-hidden border border-white/20 card-hover group cursor-pointer ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              onClick={() => setSelectedProject(project)}
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
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
                    title='View Details'
                  >
                    <Eye size={20} />
                  </motion.button>
                  <motion.a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
                    title='View Live'
                    onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => e.stopPropagation()}
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

                {/* Metrics */}
                <div className='flex items-center space-x-4 mb-4 text-xs text-gray-500'>
                  <div className='flex items-center space-x-1'>
                    <Eye size={12} />
                    <span>{project.metrics.views}</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Star size={12} />
                    <span>{project.metrics.stars}</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <TrendingUp size={12} />
                    <span>{project.metrics.forks}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className='px-2 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded text-xs text-purple-300'
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className='px-2 py-1 bg-gray-500/20 border border-gray-500/30 rounded text-xs text-gray-400'>
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='glass rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='p-8'>
                {/* Header */}
                <div className='flex justify-between items-start mb-6'>
                  <div>
                    <h2 className='font-display text-3xl font-bold text-white mb-2'>
                      {selectedProject.title}
                    </h2>
                    <div className='flex items-center space-x-4 text-sm text-gray-400'>
                      <div className='flex items-center space-x-1'>
                        <Calendar size={14} />
                        <span>{selectedProject.date}</span>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <Users size={14} />
                        <span>{selectedProject.duration}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className='text-gray-400 hover:text-white transition-colors text-2xl'
                  >
                    ×
                  </button>
                </div>

                {/* Description */}
                <p className='text-gray-300 leading-relaxed mb-8'>
                  {selectedProject.longDescription}
                </p>

                {/* Features & Challenges */}
                <div className='grid md:grid-cols-2 gap-8 mb-8'>
                  <div>
                    <h3 className='font-semibold text-white mb-4'>
                      Key Features
                    </h3>
                    <ul className='space-y-2'>
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className='flex items-center space-x-2 text-gray-300 text-sm'
                        >
                          <span className='text-green-400'>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className='font-semibold text-white mb-4'>
                      Challenges Overcome
                    </h3>
                    <ul className='space-y-2'>
                      {selectedProject.challenges.map((challenge, index) => (
                        <li
                          key={index}
                          className='flex items-center space-x-2 text-gray-300 text-sm'
                        >
                          <span className='text-yellow-400'>⚡</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className='mb-8'>
                  <h3 className='font-semibold text-white mb-4'>
                    Technologies Used
                  </h3>
                  <div className='space-y-4'>
                    {Object.entries(selectedProject.technologies).map(
                      ([category, techs]) => (
                        <div key={category}>
                          <h4 className='text-purple-300 text-sm font-medium mb-2 capitalize'>
                            {category}
                          </h4>
                          <div className='flex flex-wrap gap-2'>
                            {techs.map((tech) => (
                              <span
                                key={tech}
                                className='px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300'
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className='flex space-x-4'>
                  <motion.a
                    href={selectedProject.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium btn-glow'
                  >
                    <ExternalLink size={18} />
                    <span>View Live</span>
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='flex items-center space-x-2 px-6 py-3 border-2 border-purple-500 rounded-full text-purple-300 font-medium hover:bg-purple-500/20'
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShowcase;
