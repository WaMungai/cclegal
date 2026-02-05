import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar  from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Differentiation } from "./components/Differentiation";
import { PracticeAreas } from "./components/PracticeAreas";
import ClientShowcase from "./components/ClientShowcase";
import TeamPage from "./pages/TeamPage";
import BlogSection from "./components/Blog/BlogSection";
import FeaturedBlogs from "./components/Blog/FeaturedBlogs";
import BlogPage from "./components/Blog/BlogPage";
import PostPage from "./components/Blog/PostPage";
import Footer from "./components/Footer";
import BookConsultation from "./components/BookConsultation";



const HomePage = ({ posts }) => (
  <>
    {/* Hero */}
    <section id="home" className="pt-16">
      <Hero />
    </section>

     {/* Why Us / Differentiation */}
    <section id="whyus" className="pt-16">
      <Differentiation />
    </section>

    {/* Practice Areas */}
    <section id="practiceareas" className="pt-16">
      <PracticeAreas />
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
      <BookConsultation />
    </section>

    <section id="contact" className="pt-16">
      <Footer />
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
