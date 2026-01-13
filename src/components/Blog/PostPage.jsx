import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client, urlFor } from './sanityClient'
import { PortableText } from '@portabletext/react'

export default function PostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      const query = `
        *[_type=="post" && slug.current==$slug][0]{
          title,
          body,
          mainImage,
          "categories": categories[]->{
            title
          }
        }
      `
      const data = await client.fetch(query, { slug })
      setPost(data)
    }
    fetchPost()
  }, [slug])

  if (!post) return <p>Loading post...</p>

  return (
    <section style={{ padding: '4rem 2rem' }}>
      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(1200).url()}
          alt={post.title}
          style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '12px', marginBottom: '2rem' }}
        />
      )}
      <h1>{post.title}</h1>
      <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
        Categories: {post.categories?.map(c => c.title).join(', ')}
      </p>
      <PortableText value={post.body} />
    </section>
  )
}
