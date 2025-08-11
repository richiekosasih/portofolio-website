import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import FloatingShapes from './components/FloatingShapes';
import ErrorBoundary from './components/ErrorBoundary';
import FloatingActionButton from './components/FloatingActionButton';
import ThemeSelector from './components/ThemeSelector';

// Context
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

const AppContent = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { theme, isDarkMode } = useTheme();

  React.useEffect(() => {
    // Optimized loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Reduced from 2500ms to 1200ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-br ${theme.background} transition-all duration-500`}
    >
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <LoadingScreen key='loading' />
        ) : (
          <motion.div
            key='content'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='relative z-10'
          >
            {/* 3D Background Canvas */}
            <div className='fixed inset-0 z-0'>
              <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                style={{ background: 'transparent' }}
                dpr={[1, 1.5]}
                performance={{ min: 0.8 }}
                onCreated={({ gl }) => {
                  gl.setClearColor('#000000', 0);
                  gl.antialias = false;
                }}
              >
                <Suspense
                  fallback={
                    <mesh>
                      <boxGeometry args={[0.1, 0.1, 0.1]} />
                      <meshBasicMaterial color='#6366f1' />
                    </mesh>
                  }
                >
                  <ambientLight intensity={isDarkMode ? 0.2 : 0.3} />
                  <pointLight
                    position={[10, 10, 10]}
                    intensity={isDarkMode ? 0.3 : 0.5}
                  />
                  <FloatingShapes />
                </Suspense>
              </Canvas>
            </div>

            {/* Particle Background */}
            <ParticleBackground />

            {/* Main Content */}
            <div className='relative z-20'>
              <Navigation />

              <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </main>

              <Footer />
            </div>

            {/* Theme Selector */}
            <ThemeSelector />

            {/* Floating Action Button */}
            <FloatingActionButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
