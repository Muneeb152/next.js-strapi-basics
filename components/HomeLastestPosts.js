import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";

export default function HomeLastestPosts({ posts }) {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(posts.slice(0, 5));
  }, [posts]);

  function renderPostPreviews() {
    return latestPosts.map((post) => <PostPreview post={post} key={post.id} />);
  }

  return (
    <>
      <h2>Latest Posts</h2>
      {latestPosts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        renderPostPreviews()
      )}
    </>
  );
}
