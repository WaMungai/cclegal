import React, { useEffect, useState } from 'react'
import { client, urlFor } from './sanityClient'
import { PortableText } from '@portabletext/react'

export default function BlogSection() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `
        *[_type == "post"]{
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
          body
        } | order(publishedAt desc)
      `
      const data = await client.fetch(query)
      setPosts(data)
    }

    fetchPosts()
  }, [])

  if (!posts.length) return <p>Loading blog posts...</p>

  return (
    <section style={{ padding: '4rem 2rem', background: '#f9f9f9' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Blog</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            {/* Author Image */}
            {post.author?.image && (
              <img
                src={urlFor(post.author.image).width(600).height(300).url()}
                alt={post.author.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            )}

            <div style={{ padding: '1rem 1.5rem' }}>
              <h2 style={{ margin: '0 0 0.5rem 0' }}>{post.title}</h2>

              {/* Author & Categories */}
              <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.5rem' }}>
                By <strong>{post.author?.name}</strong> | Categories: {post.categories?.map(c => c.title).join(', ')}
              </p>

              {/* Published Date */}
              <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '1rem' }}>
                Published: {new Date(post.publishedAt).toLocaleDateString()}
              </p>

              {/* Post Excerpt */}
              <PortableText value={post.body.slice(0, 200)} /> {/* optional snippet */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
