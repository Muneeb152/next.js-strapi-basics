import React from "react";
import Link from "next/link";

export default function PostPreview({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="postPreview" key={post.id}>
        <h3>{post.attributes.title}</h3>
        <p>{post.attributes.description}</p>
      </div>
    </Link>
  );
}
