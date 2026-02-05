import React, { useEffect, useState } from 'react'
import { client, urlFor } from './sanityClient'
import { useNavigate } from 'react-router-dom'

export default function BlogSection() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `
        *[_type == "post"] | order(publishedAt desc){
          title,
          slug,
          publishedAt,
          "author": author->{
            name,
            image
          },
          "categories": categories[]->{
            title
          },
          body,
          mainImage
        }
      `
      const data = await client.fetch(query)
      setPosts(data)
    }
    fetchPosts()
  }, [])

  // Helper to truncate words
  const truncateWords = (text, wordLimit = 25) => {
    if (!text) return ''
    const words = text.split(/\s+/)
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text
  }

  if (!posts.length) return <p>Loading blog posts...</p>

  return (
    <section style={{ padding: '4rem 2rem', background: '#f9f9f9' }}>
      <h1 className="text-3xl font-semibold text-center mb-12">Legal Insights</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {posts.map(post => (
          <div
            key={post.slug.current}
            style={{
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onClick={() => navigate(`/blog/${post.slug.current}`)}
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
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).width(600).height(300).url()}
                alt={post.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            )}

            <div style={{ padding: '1rem 1.5rem' }}>
              <h2 style={{ margin: '0 0 0.5rem 0' }}>{post.title}</h2>

              {/* Author */}
              {post.author && (
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  {post.author.image && (
                    <img
                      src={urlFor(post.author.image).width(40).height(40).url()}
                      alt={post.author.name}
                      style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '0.5rem', objectFit: 'cover' }}
                    />
                  )}
                  <span style={{ fontSize: '0.85rem', color: '#555' }}>By <strong>{post.author.name}</strong></span>
                </div>
              )}

              {/* Categories */}
              {post.categories?.length > 0 && (
                <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '0.5rem' }}>
                  Categories: {post.categories.map(c => c.title).join(', ')}
                </p>
              )}

              {/* Published Date */}
              <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '1rem' }}>
                Published: {new Date(post.publishedAt).toLocaleDateString()}
              </p>

              {/* Post Excerpt */}
              <p style={{ fontSize: '0.9rem', color: '#333' }}>
                {truncateWords(
                  post.body
                    ? post.body.map(block => block.children.map(c => c.text).join(' ')).join(' ')
                    : '',
                  30
                )}
              </p>

              {/* Read More */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigate(`/blog/${post.slug.current}`)
                }}
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: '#101527',
                  color: '#fff',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
