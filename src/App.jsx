import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';

// Below-the-fold sections — code-split for a lighter initial bundle.
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const Pending = () => <div className="min-h-[40vh]" aria-hidden />;

export default function App() {
  return (
    <div className="relative min-h-screen">
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Suspense fallback={<Pending />}>
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
