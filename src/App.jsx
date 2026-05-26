import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Metrics from './components/Metrics';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';

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
        <Metrics />
        <Certifications />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
