// src/components/BlogSection.jsx
import React from "react";
import { motion } from "framer-motion";

// Example data (replace with CMS data later)
const blogPosts = [
  {
    title: "Navigating Corporate Restructuring in Kenya",
    excerpt:
      "Understand the key steps and legal considerations when restructuring your business in Kenya.",
    category: "Corporate",
    link: "/blog/corporate-restructuring",
    image: "/assets/blog/corporate.jpg",
  },
  {
    title: "Employment Contracts: Common Pitfalls",
    excerpt:
      "Learn the common mistakes employers and employees make in employment contracts and how to avoid them.",
    category: "Employment",
    link: "/blog/employment-contracts",
    image: "/assets/blog/employment.jpg",
  },
  {
    title: "Data Protection Compliance in Kenya",
    excerpt:
      "A guide for businesses on staying compliant with Kenya’s data protection laws and regulations.",
    category: "Technology & Data Protection",
    link: "/blog/data-protection",
    image: "/assets/blog/data-protection.jpg",
  },
  {
    title: "Resolving Commercial Disputes Efficiently",
    excerpt:
      "Tips and strategies for mitigating risks and resolving disputes outside of court.",
    category: "Litigation",
    link: "/blog/commercial-disputes",
    image: "/assets/blog/litigation.jpg",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Legal Insights & Blog
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {blogPosts.map((post, i) => (
          <motion.a
            key={i}
            href={post.link}
            className="block rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-gray-50"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs text-[#D4AF37] font-semibold">
                {post.category}
              </span>
              <h3 className="font-semibold mt-2 text-lg">{post.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/blog"
          className="inline-block bg-[#D4AF37] text-[#101527] px-6 py-3 rounded font-semibold shadow hover:bg-[#c29d2f] transition"
        >
          View All Insights
        </a>
      </div>
    </section>
  );
}
