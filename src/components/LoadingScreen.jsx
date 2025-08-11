import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
    >
      <div className='text-center'>
        {/* Logo/Name */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='mb-8'
        >
          <h1 className='font-display text-6xl font-bold gradient-text mb-2'>
            Richie
          </h1>
          <p className='text-gray-300 text-xl font-light'> Web Developer</p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 4 }}
          className='flex items-center justify-center space-x-2'
        >
          <div className='flex space-x-1'>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: [1, 2, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
                className='w-1 h-8 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full'
              />
            ))}
          </div>
          <span className='ml-4 text-gray-300 text-lg loading-dots'>
            Loading
          </span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.2 }}
          className='mx-auto mt-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full'
          style={{ maxWidth: '300px' }}
        />

        {/* Simplified Floating Particles */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x:
                  Math.random() *
                  (typeof window !== 'undefined' ? window.innerWidth : 800),
                y:
                  typeof window !== 'undefined' ? window.innerHeight + 50 : 600,
                opacity: 0,
              }}
              animate={{
                y: -50,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2.5,
                delay: Math.random() * 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className='absolute w-1 h-1 bg-purple-400 rounded-full'
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
