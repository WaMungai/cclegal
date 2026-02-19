import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { client, urlFor } from './sanityClient'
import { PortableText } from '@portabletext/react'

export default function BlogPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)

  // ===============================
  // Fetch Main Post
  // ===============================
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)

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
      `

      const data = await client.fetch(query, { slug })
      setPost(data)
      setLoading(false)
    }

    if (slug) fetchPost()
  }, [slug])

  // ===============================
  // Fetch Related Posts
  // ===============================
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
      `
      const data = await client.fetch(query, { slug })
      setRelatedPosts(data.filter(p => p.slug))
    }

    if (slug) fetchRelated()
  }, [slug])

  // ===============================
  // Safe Excerpt Generator
  // ===============================
  const extractPlainText = (blocks) => {
    if (!blocks) return ''
    return blocks
      .map(block =>
        block.children?.map(child => child.text).join(' ')
      )
      .join(' ')
  }

  const truncateWords = (text, wordLimit = 20) => {
    if (!text) return ''
    const words = text.split(/\s+/)
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text
  }

  // ===============================
  // Portable Text Styling
  // ===============================
  const portableTextComponents = {
    marks: {
      link: ({ value, children }) => {
        const isExternal = value?.href?.startsWith('http')
        return (
          <a
            href={value?.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            style={{
              color: '#0070f3',
              textDecoration: 'underline',
              fontWeight: 500
            }}
          >
            {children}
          </a>
        )
      }
    },
    block: {
      normal: ({ children }) => (
        <p style={{ marginBottom: '1.3rem' }}>{children}</p>
      ),
      h2: ({ children }) => (
        <h2 style={{ margin: '2rem 0 1rem', fontSize: '1.7rem' }}>
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 style={{ margin: '1.5rem 0 0.75rem', fontSize: '1.3rem' }}>
          {children}
        </h3>
      )
    },
    list: {
      bullet: ({ children }) => (
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.2rem' }}>
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol style={{ paddingLeft: '1.5rem', marginBottom: '1.2rem' }}>
          {children}
        </ol>
      )
    },
    listItem: {
      bullet: ({ children }) => (
        <li style={{ marginBottom: '0.5rem' }}>{children}</li>
      ),
      number: ({ children }) => (
        <li style={{ marginBottom: '0.5rem' }}>{children}</li>
      )
    }
  }

  // ===============================
  // Loading & Not Found States
  // ===============================
  if (loading) {
    return (
      <p style={{ textAlign: 'center', marginTop: '3rem' }}>
        Loading post...
      </p>
    )
  }

  if (!post) {
    return (
      <p style={{ textAlign: 'center', marginTop: '3rem' }}>
        Post not found.
      </p>
    )
  }

  // ===============================
  // Render
  // ===============================
  return (
    <section
      style={{
        maxWidth: '850px',
        margin: '4rem auto',
        padding: '0 1rem'
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate('/blog')}
        style={{
          marginBottom: '2rem',
          padding: '0.6rem 1.5rem',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: '#0070f3',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        ← Back to Blog
      </button>

      {/* Title */}
      <h1 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>
        {post.title}
      </h1>

      {/* Author */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1.5rem'
        }}
      >
        {post.author?.image && (
          <img
            src={urlFor(post.author.image).width(50).height(50).url()}
            alt={post.author.name}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        )}
        <div style={{ fontSize: '0.9rem', color: '#555' }}>
          By <strong>{post.author?.name}</strong> |{' '}
          {new Date(post.publishedAt).toLocaleDateString()}
        </div>
      </div>

      {/* Categories */}
      {post.categories?.length > 0 && (
        <p
          style={{
            fontSize: '0.85rem',
            color: '#777',
            marginBottom: '1.5rem'
          }}
        >
          Categories: {post.categories.map(c => c.title).join(', ')}
        </p>
      )}

      {/* Main Image */}
      {post.mainImage && (
        <div
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '2rem'
          }}
        >
          <img
            src={urlFor(post.mainImage).width(900).url()}
            alt={post.title}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>
      )}

      {/* Body */}
      <div
        style={{
          textAlign: 'left',
          lineHeight: '1.9',
          fontSize: '1.1rem',
          color: '#222',
          marginBottom: '4rem'
        }}
      >
        <PortableText
          value={post.body}
          components={portableTextComponents}
        />
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
            Related Posts
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}
          >
            {relatedPosts.map(rp => (
              <div
                key={rp.slug}
                onClick={() => navigate(`/blog/${rp.slug}`)}
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  boxShadow:
                    '0 4px 10px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition:
                    'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform =
                    'translateY(-4px)'
                  e.currentTarget.style.boxShadow =
                    '0 8px 18px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform =
                    'translateY(0)'
                  e.currentTarget.style.boxShadow =
                    '0 4px 10px rgba(0,0,0,0.08)'
                }}
              >
                {rp.mainImage && (
                  <img
                    src={urlFor(rp.mainImage)
                      .width(600)
                      .height(200)
                      .url()}
                    alt={rp.title}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                )}

                <div style={{ padding: '1rem' }}>
                  <h3>{rp.title}</h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      marginTop: '0.5rem',
                      color: '#444'
                    }}
                  >
                    {truncateWords(
                      extractPlainText(rp.body),
                      20
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
