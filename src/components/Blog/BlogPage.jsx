import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { client, urlFor } from './sanityClient'
import { PortableText } from '@portabletext/react'

export default function BlogPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPost = async () => {
      const query = `
        *[_type == "post" && slug.current == $slug][0]{
          title,
          body,
          publishedAt,
          mainImage,
          "author": author->{name, image},
          "categories": categories[]->{title}
        }
      `
      const data = await client.fetch(query, { slug })
      setPost(data)
    }
    fetchPost()
  }, [slug])

  useEffect(() => {
    const fetchRelated = async () => {
      const query = `
        *[_type=="post" && slug.current != $slug] | order(publishedAt desc)[0...3]{
          title,
          slug,
          mainImage,
          "author": author->{name, image},
          body
        }
      `
      const data = await client.fetch(query, { slug })
      setRelatedPosts(data)
    }
    fetchRelated()
  }, [slug])

  const truncateWords = (text, wordLimit = 20) => {
    if (!text) return ''
    const words = text.split(/\s+/)
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text
  }

  if (!post) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading post...</p>

  return (
    <section style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 1rem' }}>
      {/* Back Button */}
      <button
        onClick={() => navigate('/blog')}
        style={{
          marginBottom: '2rem',
          padding: '0.5rem 1.5rem',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: '#0070f3',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        &larr; Back to Blog
      </button>

      {/* Post Title */}
      <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{post.title}</h1>

      {/* Author & Date */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.75rem' }}>
        {post.author?.image && (
          <img
            src={urlFor(post.author.image).width(50).height(50).url()}
            alt={post.author.name}
            style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
          />
        )}
        <div style={{ fontSize: '0.9rem', color: '#555' }}>
          By <strong>{post.author?.name}</strong> | {new Date(post.publishedAt).toLocaleDateString()}
        </div>
      </div>

      {/* Categories */}
      {post.categories?.length > 0 && (
        <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1.5rem' }}>
          Categories: {post.categories.map(c => c.title).join(', ')}
        </p>
      )}

      {/* Main Image (maintains aspect ratio) */}
      {post.mainImage && (
        <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <img
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.title}
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Post Body */}
      <div style={{ lineHeight: '1.8', fontSize: '1rem', color: '#333', marginBottom: '4rem' }}>
        <PortableText value={post.body} />
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Related Posts</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {relatedPosts.map(rp => (
              <div
                key={rp.slug.current}
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={() => navigate(`/blog/${rp.slug.current}`)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)'
                }}
              >
                {/* Post Image */}
                {rp.mainImage && (
                  <div style={{ width: '100%', overflow: 'hidden', flexShrink: 0 }}>
                    <img
                      src={urlFor(rp.mainImage).width(600).height(200).url()}
                      alt={rp.title}
                      style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                )}

                <div style={{ padding: '1rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>{rp.title}</h3>

                  {/* Author */}
                  {rp.author && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      {rp.author.image && (
                        <img
                          src={urlFor(rp.author.image).width(30).height(30).url()}
                          alt={rp.author.name}
                          style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                      )}
                      <span style={{ fontSize: '0.8rem', color: '#555' }}>{rp.author.name}</span>
                    </div>
                  )}

                  {/* Excerpt */}
                  <p style={{ fontSize: '0.85rem', color: '#333', flexGrow: 1 }}>
                    {truncateWords(
                      rp.body
                        ? rp.body.map(b => b.children.map(c => c.text).join(' ')).join(' ')
                        : '',
                      20
                    )}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/blog/${rp.slug.current}`)
                    }}
                    style={{
                      marginTop: '0.5rem',
                      padding: '0.4rem 1rem',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: '#0070f3',
                      color: '#fff',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      fontSize: '0.85rem'
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
