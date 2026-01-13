import React, { useEffect, useState } from 'react'
import { client, urlFor } from './sanityClient'
import { useNavigate } from 'react-router-dom'
import { PortableText } from '@portabletext/react'


export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await client.fetch(`*[_type=="category"]{title, slug}`)
      setCategories(data)
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      const query = selectedCategory
        ? `*[_type=="post" && $cat in categories[]->slug.current]{title, slug, body, mainImage, "categories": categories[]->}`
        : `*[_type=="post"]{title, slug, body, mainImage, "categories": categories[]->}`
      const data = await client.fetch(query, { cat: selectedCategory })
      setPosts(data)
    }
    fetchPosts()
  }, [selectedCategory])

  return (
    <section style={{ padding: '4rem 2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>All Blog Posts</h1>

      {/* Category Filter */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', gap: '1rem' }}>
        <button onClick={() => setSelectedCategory(null)} style={{ padding: '0.5rem 1rem' }}>
          All
        </button>
        {categories.map(cat => (
          <button key={cat.slug.current} onClick={() => setSelectedCategory(cat.slug.current)} style={{ padding: '0.5rem 1rem' }}>
            {cat.title}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {posts.map(post => (
          <div
            key={post.slug.current}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#fff',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
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
            {post.mainImage && (
              <img
                src={urlFor(post.mainImage).width(600).height(300).url()}
                alt={post.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            )}
            <div style={{ padding: '1rem 1.5rem' }}>
              <h2>{post.title}</h2>
              <p style={{ fontSize: '0.85rem', color: '#555' }}>
                Categories: {post.categories?.map(c => c.title).join(', ')}
              </p>
              <PortableText value={post.body.slice(0, 150)} />
              <button
                onClick={() => navigate(`/blog/${post.slug.current}`)}
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: '#0070f3',
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
