import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Layout */
import { Navbar } from "./components/Navbar";

/* Home sections */
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/Aboutus";
import { Differentiation } from "./components/Differentiation";
import { PracticeAreas } from "./components/PracticeAreas";
import ClientShowcase from "./components/ClientShowcase";
import ContactForm from "./components/ContactForm";

/* Blog pages */
//import BlogPage from "./pages/BlogPage";


import TeamPage from "./pages/TeamPage";
import BlogSection from "./components/Blog/BlogSection";
import FeaturedBlogs from "./components/Blog/FeaturedBlogs";
import BlogPage from "./components/Blog/BlogPage";
import PostPage from "./components/Blog/PostPage";



const HomePage = ({ posts }) => (
  <>
    {/* Hero */}
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

    <section id="testimonials" className="pt-16">
      <FeaturedBlogs />
    </section>



    {/* Contact Form */}
    <section id="contact" className="pt-16">
      <ContactForm />
    </section>
  </>
);

export default function App({ posts }) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Home page */}
          <Route path="/" element={<HomePage posts={posts} />} />

          {/* Team page */}
          <Route
            path="/team"
            element={
              <div className="pt-16 max-w-7xl mx-auto px-6">
                <TeamPage />
              </div>
            }
          />

          <Route
            path="/blog"
            element={
              <div className="pt-16 max-w-7xl mx-auto px-6">
                <BlogSection />
              </div>
            }
          />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostPage />} />


        </Routes>
      </div>
    </Router>
  );
}
