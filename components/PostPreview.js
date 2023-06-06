import React from 'react'

export default function PostPreview({post}) {
  return (
   <>
   <div className='postPreview'>
   <h3>{post.title}</h3>
   <p>{post.description}</p>
   </div>
   </>
  )
}
