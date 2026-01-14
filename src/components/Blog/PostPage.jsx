import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { client, urlFor } from './sanityClient';
import { PortableText } from '@portabletext/react';

export default function PostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      // Fetch current post
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

      if (data?.publishedAt) {
        // Previous post (earlier)
        const prevQuery = `
          *[_type=="post" && publishedAt < $date] | order(publishedAt desc)[0]{
            title,
            slug,
            mainImage
          }
        `;
        // Next post (later)
        const nextQuery = `
          *[_type=="post" && publishedAt > $date] | order(publishedAt asc)[0]{
            title,
            slug,
            mainImage
          }
        `;
        const prev = await client.fetch(prevQuery, { date: data.publishedAt });
        const next = await client.fetch(nextQuery, { date: data.publishedAt });
        setPrevPost(prev);
        setNextPost(next);
      }
    };
    fetchPost();
  }, [slug]);

  if (!post) return <p style={{ textAlign: 'center', marginTop: '4rem' }}>Loading post...</p>;

  return (
    <section
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '6rem 1.5rem 6rem', // top padding avoids navbar overlap, bottom padding for spacing
      }}
    >
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
            style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
          />
        )}
        <div>
          <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1rem' }}>{post.author?.name || 'Unknown Author'}</p>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#555' }}>
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Categories */}
      {post.categories?.length > 0 && (
        <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '2rem', flexWrap: 'wrap' }}>
          Categories: {post.categories.map(c => c.title).join(', ')}
        </p>
      )}

      {/* Body */}
      <div style={{ lineHeight: '1.8', fontSize: '1.05rem', color: '#333', marginBottom: '4rem' }}>
        <PortableText value={post.body} />
      </div>

      {/* Previous & Next Articles */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
          marginTop: '4rem', // space from post content
        }}
      >
        {/* Previous Post */}
        {prevPost && (
          <div
            onClick={() => navigate(`/blog/${prevPost.slug.current}`)}
            style={{
              flex: '1 1 45%',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              backgroundColor: '#f5f5f5',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 14px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            }}
          >
            {prevPost.mainImage && (
              <img
                src={urlFor(prevPost.mainImage).width(100).height(60).url()}
                alt={prevPost.title}
                style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
              />
            )}
            <span style={{ fontWeight: '600' }}>← {prevPost.title}</span>
          </div>
        )}

        {/* Next Post */}
        {nextPost && (
          <div
            onClick={() => navigate(`/blog/${nextPost.slug.current}`)}
            style={{
              flex: '1 1 45%',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
              justifyContent: 'flex-end',
              cursor: 'pointer',
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              backgroundColor: '#f5f5f5',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 14px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            }}
          >
            <span style={{ fontWeight: '600' }}>{nextPost.title} →</span>
            {nextPost.mainImage && (
              <img
                src={urlFor(nextPost.mainImage).width(100).height(60).url()}
                alt={nextPost.title}
                style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
