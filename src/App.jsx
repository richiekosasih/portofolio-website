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

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Optimized loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Reduced from 2500ms to 1200ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <div className='relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
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
                    <ambientLight intensity={0.3} />
                    <pointLight position={[10, 10, 10]} intensity={0.5} />
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  );
}

export default App;
