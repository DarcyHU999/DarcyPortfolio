// frontend/pages/index.tsx
import Navbar from './navbar';
import Hero from './hero';
import Projects from './projects';
import Skills from './skills';
import About from './about';
import Contact from './contact';
import Resume from './resume'

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contact />
    <Resume />
  </>
);

export default Home;
