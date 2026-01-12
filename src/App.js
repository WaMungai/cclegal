import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/Aboutus';
import { Differentiation } from './components/Differentiation';
import { PracticeAreas } from './components/PracticeAreas';
import Partners from './components/Partners';
import TeamMembers from './components/TeamMembers';
import ClientShowcase from './components/ClientShowcase';
import BlogSection from './components/BlogSection';


const App = () => (
  <>
    <Navbar />
    <Hero />
    <AboutUs />
    <Differentiation />
    <PracticeAreas />
    <Partners />
    <TeamMembers />
    <ClientShowcase />
    <BlogSection />
    
  </>
);

export default App;


