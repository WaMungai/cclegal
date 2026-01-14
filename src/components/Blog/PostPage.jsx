import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { client, urlFor } from './sanityClient';
import { PortableText } from '@portabletext/react';

export default function PostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const query = `
        *[_type=="post" && slug.current==$slug][0]{
          title,
          body,
          mainImage,
          "author": author->{
            name,
            image
          },
          "categories": categories[]->{
            title
          },
          publishedAt
        }
      `;
      const data = await client.fetch(query, { slug });
      setPost(data);
    };
    fetchPost();
  }, [slug]);

  if (!post) return <p style={{ textAlign: 'center', marginTop: '4rem' }}>Loading post...</p>;

  return (
    <section
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '4rem 1.5rem',
        boxSizing: 'border-box',
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate('/blog')}
        style={{
          marginBottom: '2rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#005bb5')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0070f3')}
      >
        ← Back to Blog
      </button>

      {/* Main Image */}
      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(900).height(500).url()}
          alt={post.title}
          style={{
            width: '100%',
            maxHeight: '500px',
            objectFit: 'cover',
            borderRadius: '12px',
            marginBottom: '2rem',
          }}
        />
      )}

      {/* Title */}
      <h1 style={{ fontSize: '2.25rem', marginBottom: '1rem', lineHeight: '1.2' }}>{post.title}</h1>

      {/* Author Info */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
        }}
      >
        {post.author?.image && (
          <img
            src={urlFor(post.author.image).width(60).height(60).url()}
            alt={post.author.name}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        )}
        <div>
          <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1rem' }}>
            {post.author?.name || 'Unknown Author'}
          </p>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Categories */}
      {post.categories?.length > 0 && (
        <p
          style={{
            fontSize: '0.9rem',
            color: '#555',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          Categories: {post.categories.map(c => c.title).join(', ')}
        </p>
      )}

      {/* Body */}
      <div
        style={{
          lineHeight: '1.8',
          fontSize: '1.05rem',
          color: '#333',
        }}
      >
        <PortableText value={post.body} />
      </div>
    </section>
  );
}
