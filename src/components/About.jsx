import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Users, Rocket, Heart } from 'lucide-react';
import ProjectShowcaseGrid from './ProjectShowcaseGrid';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Rocket,
      title: 'Passionate Learner',
      description:
        'Always exploring new technologies and pushing boundaries in web development',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code,
      title: 'Clean Code Advocate',
      description:
        'Writing maintainable, scalable code that other developers love to work with',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'Creative Problem Solver',
      description:
        'Finding innovative solutions to complex challenges with artistic flair',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Users,
      title: 'Collaboration Focused',
      description:
        'Thriving in team environments and open to feedback and mentorship',
      color: 'from-orange-500 to-red-500',
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
    <section id='about' className='py-20 relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50' />

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
            🙋‍♂️ Get to know me
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className='font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6'
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'
          >
            A passionate web developer on an exciting journey to master the art
            of creating immersive digital experiences
          </motion.p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Personal Story */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className='space-y-6'
          >
            <motion.div
              variants={itemVariants}
              className='bg-white/10 dark:bg-white/5 rounded-2xl p-8 border border-white/30 dark:border-white/10 backdrop-blur-xl hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300'
            >
              <h3 className='font-display text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center'>
                <Heart className='mr-3 text-pink-500' size={28} />
                My Journey
              </h3>
              <div className='space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed'>
                <p>
                  Hello! I'm{' '}
                  <span className='text-purple-300 font-semibold'>Richie</span>,
                  an enthusiastic beginner in the world of web development. My
                  journey began with a curiosity about how websites work, and
                  it’s now evolved into a passion for building interactive,
                  user-friendly, and meaningful digital experiences.
                </p>
                <p>
                  Even though I’m still learning, I approach every project with
                  creativity, consistency, and a problem-solving mindset. I
                  believe great websites do more than look good — they create
                  real value, solve user problems, and foster connection.
                </p>
                <p>
                  Lately, I’ve also been diving into AI-powered tools and
                  exploring how artificial intelligence can make the web smarter
                  and more personalized. I’m especially interested in how AI and
                  3D web technologies can enhance user experience.
                </p>
                <p>
                  When I’m not coding, you’ll find me experimenting with visual
                  design trends, playing with Three.js, or exploring new ways to
                  grow as a developer. I’m always excited to learn, build, and
                  collaborate.
                </p>
              </div>
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              variants={itemVariants}
              className='bg-white/10 dark:bg-white/5 rounded-2xl p-6 border border-white/30 dark:border-white/10 backdrop-blur-xl hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300'
            >
              <h4 className='font-semibold text-gray-900 dark:text-white mb-4'>
                Currently Mastering
              </h4>
              <div className='flex flex-wrap gap-3'>
                {[
                  'React',
                  'Three.js',
                  'Tailwind CSS',
                  'JavaScript',
                  'Framer Motion',
                  'Node.js',
                ].map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className='grid grid-cols-1 md:grid-cols-2 gap-6'
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  className='bg-white/10 dark:bg-white/5 rounded-xl p-6 border border-white/30 dark:border-white/10 backdrop-blur-xl hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 card-hover group'
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${highlight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={24} className='text-white' />
                  </div>

                  <h4 className='font-semibold text-gray-900 dark:text-white text-lg mb-2'>
                    {highlight.title}
                  </h4>

                  <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed'>
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Project Showcase */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='mt-20'
        >
          <motion.div variants={itemVariants} className='text-center mb-12'>
            <motion.span
              variants={itemVariants}
              className='inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4'
            >
              🚀 Featured Projects
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className='font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6'
            >
              Project Showcase
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'
            >
              My amazing projects are coming soon! Stay tuned for interactive
              demos and live projects.
            </motion.p>
          </motion.div>
          <ProjectShowcaseGrid />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8'
        >
          {[
            { number: '6+', label: 'Months Learning', icon: '📚' },
            { number: '15+', label: 'Projects Built', icon: '💻' },
            { number: '100+', label: 'Hours Coding', icon: '⏰' },
            { number: '∞', label: 'Passion Level', icon: '🔥' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className='text-center bg-white/10 dark:bg-white/5 rounded-xl p-6 border border-white/30 dark:border-white/10 backdrop-blur-xl hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300'
            >
              <div className='text-3xl mb-2'>{stat.icon}</div>
              <div className='font-display text-3xl font-bold gradient-text mb-1'>
                {stat.number}
              </div>
              <div className='text-gray-600 dark:text-gray-400 text-sm'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: 360,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              delay: Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            className='absolute w-1 h-1 bg-purple-400/20 rounded-full'
          />
        ))}
      </div>
    </section>
  );
};

export default About;
