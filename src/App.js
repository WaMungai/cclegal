import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Layout */
import { Navbar } from "./components/Navbar";

/* Home sections */
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/Aboutus";
import { Differentiation } from "./components/Differentiation";
import { PracticeAreas } from "./components/PracticeAreas";
import Partners from "./components/Partners";
import TeamMembers from "./components/TeamMembers";
import ClientShowcase from "./components/ClientShowcase";

/* Blog pages */
import BlogPage from "./components/Blog/BlogPage";
import BlogPost from "./components/Blog/BlogPost";
import { BlogSection } from "./components/Blog/BlogSection";
import ContactForm from "./components/ContactForm";




const App = ({ posts }) => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Home / Hero Section */}
        <section id="home" className="pt-16">
          <Hero />
        </section>

        {/* Practice Areas */}
        <section id="practiceareas" className="pt-16">
          <PracticeAreas />
        </section>

        {/* Why Us / Differentiation */}
        <section id="whyus" className="pt-16">
          <Differentiation />
        </section>

        {/* Testimonials / Client Showcase */}
        <section id="testimonials" className="pt-16">
          <ClientShowcase />
        </section>

        {/* Team */}
        <section id="team" className="pt-16">
          <Partners />
          <TeamMembers />
        </section>


        

         {/* Blog / Legal Insights */}
        <section id="blog" className="pt-16">
          <BlogSection posts={posts} />
        </section>

 {/* Blog / Legal Insights */}
        <section id="contact" className="pt-16">
          <ContactForm />
        </section>
       
      </div>
    </Router>
  );
};

export default App;

