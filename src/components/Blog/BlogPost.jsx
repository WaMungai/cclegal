import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "./sanityClient";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "post" && slug.current == $slug][0] {
          title,
          mainImage,
          body
        }
        `,
        { slug }
      )
      .then(setPost);
  }, [slug]);

  if (!post) return null;

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold">{post.title}</h1>

      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(900).url()}
          alt={post.title}
          className="w-full my-8 rounded-lg"
        />
      )}

      <div className="prose max-w-none">
        {post.body?.map((block, i) =>
          block._type === "block" ? (
            <p key={i}>{block.children[0].text}</p>
          ) : null
        )}
      </div>
    </article>
  );
}
