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
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animatedValues, setAnimatedValues] = useState({});

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-purple-500',
      skills: [
        { name: 'HTML5', level: 85, icon: '🌐' },
        { name: 'CSS3', level: 80, icon: '🎨' },
        { name: 'JavaScript', level: 75, icon: '⚡' },
        { name: 'React', level: 70, icon: '⚛️' },
        { name: 'Tailwind CSS', level: 85, icon: '💨' },
        { name: 'Three.js', level: 45, icon: '🎮' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 40, icon: '🟢' },
        { name: 'Express.js', level: 35, icon: '🚂' },
        { name: 'MongoDB', level: 30, icon: '🍃' },
        { name: 'PostgreSQL', level: 25, icon: '🐘' },
        { name: 'REST APIs', level: 45, icon: '🔌' },
        { name: 'GraphQL', level: 20, icon: '📊' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', level: 70, icon: '🔀' },
        { name: 'VS Code', level: 90, icon: '📝' },
        { name: 'Figma', level: 60, icon: '🎯' },
        { name: 'Photoshop', level: 55, icon: '🖼️' },
        { name: 'Docker', level: 25, icon: '🐳' },
        { name: 'AWS', level: 15, icon: '☁️' },
      ],
    },
    {
      id: 'learning',
      title: 'Currently Learning',
      icon: TrendingUp,
      color: 'from-pink-500 to-purple-500',
      skills: [
        { name: 'TypeScript', level: 35, icon: '📘' },
        { name: 'Next.js', level: 40, icon: '⏭️' },
        { name: 'React Native', level: 20, icon: '📱' },
        { name: 'Python', level: 30, icon: '🐍' },
        { name: 'Machine Learning', level: 10, icon: '🤖' },
        { name: 'Blockchain', level: 5, icon: '⛓️' },
      ],
    },
  ];

  useEffect(() => {
    if (inView) {
      // Animate skill bars when section comes into view
      const timer = setTimeout(() => {
        const values = {};
        skillCategories.forEach((category) => {
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

  return (
    <section id='skills' className='py-20 relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900/20 via-purple-900/30 to-slate-900/20' />

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
            🛠️ Technical Skills
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className='font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6'
          >
            Skills & Expertise
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'
          >
            My technical journey and the tools I use to bring ideas to life.
            Always learning, always growing.
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='grid lg:grid-cols-2 gap-8'
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className='glass rounded-2xl p-8 border border-white/10 card-hover'
              >
                {/* Category Header */}
                <div className='flex items-center mb-6'>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                  >
                    <Icon size={24} className='text-white' />
                  </div>
                  <h3 className='font-display text-2xl font-bold text-white'>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className='space-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: inView
                          ? categoryIndex * 0.2 + skillIndex * 0.1
                          : 0,
                        duration: 0.5,
                      }}
                      className='group'
                    >
                      {/* Skill Header */}
                      <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center space-x-3'>
                          <span className='text-lg'>{skill.icon}</span>
                          <span className='font-medium text-white group-hover:text-purple-300 transition-colors'>
                            {skill.name}
                          </span>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <span
                            className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${getSkillColor(
                              skill.level
                            )} text-white font-medium`}
                          >
                            {getSkillLabel(skill.level)}
                          </span>
                          <span className='text-sm text-gray-400'>
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Skill Progress Bar */}
                      <div className='w-full bg-gray-700/50 rounded-full h-2 overflow-hidden'>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: inView
                              ? `${animatedValues[skill.name] || 0}%`
                              : 0,
                          }}
                          transition={{
                            delay: inView
                              ? categoryIndex * 0.2 + skillIndex * 0.1 + 0.5
                              : 0,
                            duration: 1.5,
                            ease: 'easeOut',
                          }}
                          className={`h-full bg-gradient-to-r ${getSkillColor(
                            skill.level
                          )} rounded-full relative`}
                        >
                          <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut',
                              delay: inView
                                ? categoryIndex * 0.2 + skillIndex * 0.1 + 2
                                : 0,
                            }}
                            className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0'
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Learning Goals */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='mt-16 text-center'
        >
          <motion.div
            variants={itemVariants}
            className='glass rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto'
          >
            <div className='flex items-center justify-center mb-6'>
              <Star className='text-yellow-400 mr-3' size={32} />
              <h3 className='font-display text-2xl font-bold text-white'>
                Learning Goals
              </h3>
            </div>

            <div className='grid md:grid-cols-3 gap-6'>
              {[
                { goal: 'Master React & Next.js', icon: '⚛️', progress: 65 },
                { goal: 'Learn Backend Development', icon: '🔧', progress: 35 },
                { goal: 'Build 10 Projects', icon: '🚀', progress: 40 },
              ].map((goal, index) => (
                <motion.div
                  key={goal.goal}
                  variants={itemVariants}
                  className='text-center'
                >
                  <div className='text-4xl mb-3'>{goal.icon}</div>
                  <h4 className='font-semibold text-white mb-2'>{goal.goal}</h4>
                  <div className='w-full bg-gray-700/50 rounded-full h-2 mb-2'>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: inView ? `${goal.progress}%` : 0 }}
                      transition={{ delay: 2 + index * 0.2, duration: 1 }}
                      className='h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full'
                    />
                  </div>
                  <span className='text-sm text-gray-400'>
                    {goal.progress}% Complete
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
