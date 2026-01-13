import React, { useEffect, useState } from 'react'
import { client } from './sanityClient'
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
            title,
            slug
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
    <section>
      <h1>Our Blog</h1>
      {posts.map(post => (
        <article key={post.slug.current} style={{ borderBottom: '1px solid #ccc', padding: '2rem 0' }}>
          <h2>{post.title}</h2>

          {/* Author */}
          {post.author && (
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              {post.author.image && (
                <img
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  style={{ width: 40, height: 40, borderRadius: '50%', marginRight: '0.5rem' }}
                />
              )}
              <span>By {post.author.name}</span>
            </div>
          )}

          {/* Categories */}
          {post.categories?.length > 0 && (
            <p>
              Categories: {post.categories.map(cat => cat.title).join(', ')}
            </p>
          )}

          {/* Published Date */}
          <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>

          {/* Post Body */}
          <PortableText value={post.body} />
        </article>
      ))}
    </section>
  )
}
