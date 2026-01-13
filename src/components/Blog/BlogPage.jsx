import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient, urlFor } from "./sanityClient";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`
        *[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          mainImage,
          category->{ title }
        }
      `)
      .then(setPosts);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold mb-12">Legal Insights & Updates</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post._id} className="border rounded-xl overflow-hidden">
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).width(600).height(400).url()}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">
              <span className="text-xs text-[#D4AF37] font-semibold uppercase">
                {post.category?.title}
              </span>

              <h3 className="text-lg font-semibold mt-2">
                {post.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {post.excerpt}
              </p>

              <Link
                to={`/blog/${post.slug.current}`}
                className="inline-block mt-4 text-sm font-semibold text-[#D4AF37]"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
