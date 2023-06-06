import React from 'react'

export default function PostPreview({post}) {
  return (
   <>
   <h3>{post.title}</h3>
   <p>{post.description}</p>
   {/* <h3>My First Blog</h3>
   <p>Molestie. Aenean dolor lectus, scelerisque ut semper et, venenatis vel sem. Vivamus sit amet justo at lorem porttitor accumsan. Pellentesque maximus est ut diam vehicula lacinia. Maecenas rutrum mauris dapibus, egestas nunc blandit, molestie erat. Vestibulum in pulvinar felis. Donec egestas, sapien at ornare vulputate, dolor mi sollicitudin sapien, sed fermentum purus nisl eget tellus. Quisque volutpat aliquet mauris et aliquam. Phasellus sit amet gravida purus. Ut at eleifend sapien. Suspendisse imperdiet fermentum mauris. Donec vehicula est ac dui molestie, ut congue nulla suscipit. */}
   </>
  )
}
