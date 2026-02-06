import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Differentiation } from "./components/Differentiation";
import { PracticeAreas } from "./components/PracticeAreas";
import ClientShowcase from "./components/ClientShowcase";
import BlogSection from "./components/Blog/BlogSection";
import FeaturedBlogs from "./components/Blog/FeaturedBlogs";
import BlogPage from "./components/Blog/BlogPage";
import PostPage from "./components/Blog/PostPage";
import Footer from "./components/Footer";
import BookConsultation from "./components/BookConsultation";
import Partners from "./components/Partners";
import { useEffect } from "react";
import { AboutUs } from "./components/Aboutus";

// Scroll helper
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Home page component with scroll-on-mount logic
const HomePage = ({ posts }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
    }
  }, [location.state]);

  return (
    <>
      {/* Hero */}
      <section id="home" className="pt-16">
        <Hero />
      </section>

       {/* Hero */}
      <section id="aboutus" className="pt-16">
        <AboutUs />
      </section>

      {/* Why Us / Differentiation */}
      <section id="whyus" className="pt-16">
        <Differentiation />
      </section>

      {/* Practice Areas */}
      <section id="practiceareas" className="pt-16">
        <PracticeAreas />
      </section>

      {/* Partners */}
      <section id="partners" className="pt-16">
        <Partners />
      </section>

      {/* Client Showcase */}
      <section id="clients" className="pt-16">
        <ClientShowcase />
      </section>

      {/* Featured Blogs */}
      <section id="blogs" className="pt-16">
        <FeaturedBlogs />
      </section>

      {/* Contact Form */}
      <section id="" className="pt-16">
        <BookConsultation />
      </section>

      {/* Footer */}
      <section id="footer" className="pt-16">
        <Footer />
      </section>
    </>
  );
};

export default function App({ posts }) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Home page */}
          <Route path="/" element={<HomePage posts={posts} />} />

          {/* Blog section page */}
          <Route
            path="/blog"
            element={
              <div className="pt-16 max-w-7xl mx-auto px-6">
                <BlogSection />
              </div>
            }
          />

          {/* Individual blog post */}
          <Route path="/blog/:slug" element={<PostPage />} />

          {/* Blog page */}
          <Route path="/blogpage" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}
