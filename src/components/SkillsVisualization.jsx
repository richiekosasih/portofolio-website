import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Zap,
  TrendingUp,
  Star,
  Award,
  Target,
  Layers,
} from 'lucide-react';

const SkillsVisualization = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [animatedValues, setAnimatedValues] = useState({});

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-purple-500',
      description: 'Building beautiful and interactive user interfaces',
      skills: [
        { name: 'HTML5', level: 90, icon: '🌐', experience: '2+ years' },
        { name: 'CSS3', level: 85, icon: '🎨', experience: '2+ years' },
        { name: 'JavaScript', level: 80, icon: '⚡', experience: '1+ years' },
        { name: 'React', level: 75, icon: '⚛️', experience: '1+ years' },
        {
          name: 'Tailwind CSS',
          level: 85,
          icon: '💨',
          experience: '8+ months',
        },
        { name: 'Three.js', level: 50, icon: '🎮', experience: '4+ months' },
      ],
    },
    backend: {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      description: 'Server-side development and database management',
      skills: [
        { name: 'Node.js', level: 45, icon: '🟢', experience: '6+ months' },
        { name: 'Express.js', level: 40, icon: '🚂', experience: '4+ months' },
        { name: 'MongoDB', level: 35, icon: '🍃', experience: '4+ months' },
        { name: 'PostgreSQL', level: 30, icon: '🐘', experience: '2+ months' },
        { name: 'REST APIs', level: 50, icon: '🔌', experience: '6+ months' },
        { name: 'GraphQL', level: 25, icon: '📊', experience: '2+ months' },
      ],
    },
    tools: {
      title: 'Tools & Technologies',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      description: 'Development tools and workflow optimization',
      skills: [
        { name: 'Git', level: 75, icon: '🔀', experience: '1+ years' },
        { name: 'VS Code', level: 95, icon: '📝', experience: '2+ years' },
        { name: 'Figma', level: 65, icon: '🎯', experience: '8+ months' },
        { name: 'Photoshop', level: 60, icon: '🖼️', experience: '1+ years' },
        { name: 'Docker', level: 30, icon: '🐳', experience: '2+ months' },
        { name: 'AWS', level: 20, icon: '☁️', experience: '1+ months' },
      ],
    },
    learning: {
      title: 'Currently Learning',
      icon: TrendingUp,
      color: 'from-pink-500 to-purple-500',
      description: 'Technologies I am actively studying and practicing',
      skills: [
        { name: 'TypeScript', level: 40, icon: '📘', experience: '3+ months' },
        { name: 'Next.js', level: 45, icon: '⏭️', experience: '2+ months' },
        {
          name: 'React Native',
          level: 25,
          icon: '📱',
          experience: '1+ months',
        },
        { name: 'Python', level: 35, icon: '🐍', experience: '2+ months' },
        {
          name: 'Machine Learning',
          level: 15,
          icon: '🤖',
          experience: '1+ months',
        },
        { name: 'Blockchain', level: 10, icon: '⛓️', experience: '1+ months' },
      ],
    },
  };

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const values = {};
        Object.values(skillCategories).forEach((category) => {
          category.skills.forEach((skill) => {
            values[skill.name] = skill.level;
          });
        });
        setAnimatedValues(values);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [inView]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const getSkillColor = (level) => {
    if (level >= 80) return 'from-green-500 to-emerald-500';
    if (level >= 60) return 'from-blue-500 to-cyan-500';
    if (level >= 40) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getSkillLabel = (level) => {
    if (level >= 80) return 'Expert';
    if (level >= 60) return 'Advanced';
    if (level >= 40) return 'Intermediate';
    return 'Beginner';
  };

  const currentCategory = skillCategories[selectedCategory];
  const Icon = currentCategory.icon;

  return (
    <section ref={ref} className='py-16'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        className='max-w-7xl mx-auto'
      >
        {/* Category Selector */}
        <motion.div variants={itemVariants} className='mb-12'>
          <div className='flex flex-wrap justify-center gap-4'>
            {Object.entries(skillCategories).map(([key, category]) => {
              const CategoryIcon = category.icon;
              return (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(key)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                    selectedCategory === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'glass border border-white/20 text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <CategoryIcon size={20} />
                  <span>{category.title}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Selected Category Display */}
        <motion.div
          key={selectedCategory}
          variants={itemVariants}
          className='glass rounded-3xl p-8 border border-white/10 mb-8'
        >
          <div className='flex items-center justify-center mb-6'>
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentCategory.color} flex items-center justify-center mr-4`}
            >
              <Icon size={32} className='text-white' />
            </div>
            <div className='text-center'>
              <h3 className='font-display text-3xl font-bold text-white mb-2'>
                {currentCategory.title}
              </h3>
              <p className='text-gray-300'>{currentCategory.description}</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className='grid md:grid-cols-2 gap-6'>
            {currentCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className='group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300'
              >
                {/* Skill Header */}
                <div className='flex items-center justify-between mb-4'>
                  <div className='flex items-center space-x-3'>
                    <span className='text-2xl'>{skill.icon}</span>
                    <div>
                      <h4 className='font-semibold text-white group-hover:text-purple-300 transition-colors'>
                        {skill.name}
                      </h4>
                      <p className='text-xs text-gray-400'>
                        {skill.experience}
                      </p>
                    </div>
                  </div>
                  <div className='text-right'>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getSkillColor(
                        skill.level
                      )}`}
                    >
                      {getSkillLabel(skill.level)}
                    </div>
                    <div className='text-sm text-gray-400 mt-1'>
                      {skill.level}%
                    </div>
                  </div>
                </div>

                {/* Skill Progress Bar */}
                <div className='relative'>
                  <div className='w-full bg-gray-700/50 rounded-full h-3 overflow-hidden'>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: inView
                          ? `${animatedValues[skill.name] || 0}%`
                          : 0,
                      }}
                      transition={{
                        delay: index * 0.1 + 0.5,
                        duration: 1.5,
                        ease: 'easeOut',
                      }}
                      className={`h-full bg-gradient-to-r ${getSkillColor(
                        skill.level
                      )} rounded-full relative overflow-hidden`}
                    >
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                          delay: index * 0.1 + 2,
                        }}
                        className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent'
                      />
                    </motion.div>
                  </div>

                  {/* Skill Level Indicator */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 1, duration: 0.3 }}
                    className={`absolute top-0 bg-gradient-to-r ${getSkillColor(
                      skill.level
                    )} w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold -mt-1.5 shadow-lg`}
                    style={{
                      left: `${skill.level}%`,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <Star size={12} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={itemVariants}
          className='grid md:grid-cols-3 gap-6'
        >
          <div className='glass rounded-2xl p-6 border border-white/10 text-center'>
            <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Award size={24} className='text-white' />
            </div>
            <h4 className='font-semibold text-white mb-2'>Total Skills</h4>
            <p className='text-3xl font-bold gradient-text'>24+</p>
            <p className='text-gray-400 text-sm'>Across multiple domains</p>
          </div>

          <div className='glass rounded-2xl p-6 border border-white/10 text-center'>
            <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Target size={24} className='text-white' />
            </div>
            <h4 className='font-semibold text-white mb-2'>Proficiency</h4>
            <p className='text-3xl font-bold gradient-text'>75%</p>
            <p className='text-gray-400 text-sm'>Average skill level</p>
          </div>

          <div className='glass rounded-2xl p-6 border border-white/10 text-center'>
            <div className='w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Layers size={24} className='text-white' />
            </div>
            <h4 className='font-semibold text-white mb-2'>Specialization</h4>
            <p className='text-3xl font-bold gradient-text'>Frontend</p>
            <p className='text-gray-400 text-sm'>Primary focus area</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsVisualization;
