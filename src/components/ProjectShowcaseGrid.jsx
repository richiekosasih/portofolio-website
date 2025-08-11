import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  Palette,
  Zap,
  Star,
  Code,
} from 'lucide-react';
import LiquidGlassButton from './LiquidGlassButton';

const ProjectShowcaseGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: '3D Portfolio Website',
      subtitle: 'Interactive React Portfolio',
      description:
        'Modern portfolio with 3D Earth model, liquid glass effects, and real-time interactions.',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      tags: ['React', 'Three.js', 'Framer Motion'],
      status: 'Coming Soon',
      image: '🌍',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      subtitle: 'Full-Stack Web Application',
      description:
        'Complete e-commerce solution with modern UI/UX and payment integration.',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      tags: ['React', 'Node.js', 'MongoDB'],
      status: 'Coming Soon',
      image: '🛒',
    },
    {
      id: 3,
      title: 'Creative Design Studio',
      subtitle: 'UI/UX Design Showcase',
      description:
        'Stunning design portfolio with smooth animations and creative layouts.',
      icon: Palette,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      tags: ['Figma', 'React', 'GSAP'],
      status: 'Coming Soon',
      image: '🎨',
    },
    {
      id: 4,
      title: 'Real-Time Chat App',
      subtitle: 'WebSocket Communication',
      description:
        'Modern chat application with real-time messaging and file sharing.',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      tags: ['Socket.io', 'React', 'Express'],
      status: 'Coming Soon',
      image: '💬',
    },
    {
      id: 5,
      title: 'AI-Powered Dashboard',
      subtitle: 'Data Analytics Platform',
      description:
        'Smart dashboard with AI-driven insights and interactive charts.',
      icon: Star,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      tags: ['React', 'D3.js', 'Python'],
      status: 'Coming Soon',
      image: '📊',
    },
    {
      id: 6,
      title: 'Mobile Game App',
      subtitle: 'React Native Game',
      description:
        'Engaging mobile game with smooth animations and leaderboards.',
      icon: Code,
      color: 'from-teal-500 to-blue-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-500/20',
      tags: ['React Native', 'Firebase', 'Redux'],
      status: 'Coming Soon',
      image: '🎮',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className='py-12 relative overflow-hidden'>
      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        className='max-w-7xl mx-auto px-6'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative group bg-white/5 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl p-6 backdrop-blur-xl overflow-hidden hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Status Badge */}
                <div className='absolute top-4 right-4'>
                  <span className='px-2 py-1 bg-yellow-500/30 text-yellow-200 dark:text-yellow-300 text-xs rounded-full border border-yellow-500/40 backdrop-blur-sm'>
                    {project.status}
                  </span>
                </div>

                {/* Project Icon */}
                <div className='relative z-10 mb-4'>
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className='text-xl'>{project.image}</span>
                  </div>
                  <Icon className='absolute -top-1 -right-1 w-5 h-5 text-white/50' />
                </div>

                {/* Content */}
                <div className='relative z-10'>
                  <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300'>
                    {project.title}
                  </h3>

                  <p className='text-gray-600 dark:text-gray-400 text-sm font-medium mb-2'>
                    {project.subtitle}
                  </p>

                  <p className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4'>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-1 mb-4'>
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='px-2 py-1 bg-gray-200/50 dark:bg-white/10 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-300/30 dark:border-white/20 backdrop-blur-sm'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className='flex space-x-2'>
                    <LiquidGlassButton
                      variant='glass'
                      size='sm'
                      onClick={() => {
                        alert(`${project.title} - Coming Soon! 🚀`);
                      }}
                      className='flex items-center space-x-2 flex-1 text-xs'
                    >
                      <ExternalLink size={12} />
                      <span>Live Demo</span>
                    </LiquidGlassButton>

                    <LiquidGlassButton
                      variant='glass'
                      size='sm'
                      onClick={() => {
                        alert(`${project.title} source code - Coming Soon! 💻`);
                      }}
                      className='flex items-center space-x-1 text-xs'
                    >
                      <Github size={12} />
                    </LiquidGlassButton>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-white/10 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10`}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        className='text-center mt-12'
      >
        <motion.div whileHover={{ scale: 1.05 }} className='inline-block'>
          <LiquidGlassButton
            variant='primary'
            size='lg'
            onClick={() => {
              alert('More projects coming soon! Stay tuned 🚀');
            }}
            className='inline-flex items-center space-x-2'
          >
            <Star size={20} />
            <span>View All Projects</span>
          </LiquidGlassButton>
        </motion.div>

        <p className='text-gray-400 text-sm mt-4'>
          🔥 More amazing projects are in development. Check back soon!
        </p>
      </motion.div>
    </section>
  );
};

export default ProjectShowcaseGrid;
