import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient } from "./sanityClient";

export function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`
        *[_type == "post"] | order(publishedAt desc)[0...4] {
          _id,
          title,
          "slug": slug.current,
          excerpt,
          category->{
            title
          }
        }
      `)
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <section id="blog" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-[#101527]">
              Legal Insights & Updates
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Practical legal commentary, regulatory updates, and insights
              aligned with the challenges our clients face.
            </p>
          </div>

          <Link
            to="/blog"
            className="mt-6 md:mt-0 inline-block font-semibold text-[#D4AF37] hover:underline"
          >
            View All Insights →
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
            >
              {/* Category */}
              {post.category?.title && (
                <span className="text-xs uppercase tracking-wide text-[#D4AF37] font-semibold">
                  {post.category.title}
                </span>
              )}

              {/* Title */}
              <h3 className="mt-3 text-lg font-semibold text-[#101527] leading-snug">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                {post.excerpt}
              </p>

              {/* CTA */}
              <Link
                to={`/blog/${post.slug}`}
                className="inline-block mt-5 font-semibold text-[#101527] hover:text-[#D4AF37]"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
