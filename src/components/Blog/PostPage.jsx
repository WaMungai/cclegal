import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { client, urlFor } from './sanityClient';
import { PortableText } from '@portabletext/react';

export default function PostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Fetch main post
  useEffect(() => {
    const fetchPost = async () => {
      const query = `
        *[_type == "post" && slug.current == $slug][0]{
          title,
          body,
          publishedAt,
          mainImage,
          "slug": slug.current,
          "author": author->{name, image},
          "categories": categories[]->{title}
        }
      `;
      const data = await client.fetch(query, { slug });
      setPost(data);
    };
    if (slug) fetchPost();
  }, [slug]);

  // Fetch related posts
  useEffect(() => {
    const fetchRelated = async () => {
      const query = `
        *[_type=="post" && slug.current != $slug] 
        | order(publishedAt desc)[0...3]{
          title,
          "slug": slug.current,
          mainImage,
          "author": author->{name, image},
          body
        }
      `;
      const data = await client.fetch(query, { slug });
      setRelatedPosts(data.filter(p => p.slug));
    };
    if (slug) fetchRelated();
  }, [slug]);

  if (!post)
    return <p style={{ textAlign: 'center', marginTop: '3rem' }}>Loading post...</p>;

  // PortableText components
  const portableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p style={{ marginBottom: '1rem' }}>{children}</p>;
      },
      h1: ({ children }) => <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '2rem 0 1rem' }}>{children}</h1>,
      h2: ({ children }) => <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '1.5rem 0' }}>{children}</h2>,
      h3: ({ children }) => <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', margin: '1rem 0' }}>{children}</h3>,
      h4: ({ children }) => <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '0.8rem 0' }}>{children}</h4>,
      blockquote: ({ children }) => (
        <blockquote
          style={{
            borderLeft: '4px solid #ccc',
            paddingLeft: '1rem',
            color: '#555',
            fontStyle: 'italic',
            margin: '1.5rem 0',
          }}
        >
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ul>,
      number: ({ children }) => <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1rem' }}>{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
      number: ({ children }) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
    },
    marks: {
      link: ({ value, children }) => {
        const href = value?.href || value?.url;
        if (!href) return <span>{children}</span>;
        const fullHref = href.startsWith('http') ? href : `https://${href}`;
        return (
          <a href={fullHref} target="_blank" rel="noopener noreferrer"
            style={{ color: '#0070f3', textDecoration: 'underline' }}>
            {children}
          </a>
        );
      },
    },
  };

  const truncateWords = (text, wordLimit = 20) => {
    if (!text) return '';
    const words = text.split(/\s+/);
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  const extractPlainText = (blocks) => {
    if (!blocks) return '';
    return blocks.map(block => block.children?.map(child => child.text).join(' ')).join(' ');
  };

  return (
   <section style={{ maxWidth: '850px', margin: '6rem auto 4rem', padding: '0 1rem', textAlign: 'left' }}>
    

     
     {/* Title */}
<h1 style={{ fontSize: '2.4rem', marginBottom: '1rem', lineHeight: '1.3', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{post.title}</h1>

      {post.mainImage && <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
        <img src={urlFor(post.mainImage).width(900).url()} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>}
      
      {/* Author & Date */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {post.author?.image && <img src={urlFor(post.author.image).width(50).height(50).url()} alt={post.author.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />}
        <div style={{ fontSize: '0.9rem', color: '#555' }}>
          By <strong>{post.author?.name}</strong> | {new Date(post.publishedAt).toLocaleDateString()}
        </div>
      </div>

      {/* Categories */}
      {post.categories?.length > 0 && <p style={{ fontSize: '0.85rem', color: '#777', marginBottom: '1.5rem' }}>Categories: {post.categories.map(c => c.title).join(', ')}</p>}

      {/* Main Image */}

      {/* Body */}

      <div className="blog-body">
        <PortableText value={post.body} components={portableTextComponents} />
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Related Posts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {relatedPosts.map(rp => (
              <div key={rp.slug} onClick={() => navigate(`/blog/${rp.slug}`)} style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.08)', cursor: 'pointer', overflow: 'hidden', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 18px rgba(0,0,0,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)'; }}>
                {rp.mainImage && <img src={urlFor(rp.mainImage).width(600).height(200).url()} alt={rp.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>{rp.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#444' }}>{truncateWords(extractPlainText(rp.body), 20)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}