import AllPosts from "@/components/AllPosts";
import React from "react";
import axios from "axios";

function Posts({ posts }) {
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
}

export default Posts;

export async function getStaticProps() {
  const postRes = await axios.get("http://127.0.0.1:1337/api/posts-blogs");
  return {
    props: {
      posts: postRes.data.data,
    },
  };
}
