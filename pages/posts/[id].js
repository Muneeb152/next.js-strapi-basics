import React from "react";
import MarkdownIt from "markdown-it";
import axios from "axios";

function PostPage({ post }) {
  const md = new MarkdownIt({});
  const htmlContent = md.render(post.attributes.content);
  return (
    <article>
      <header>
        <h1>{post.attributes.title}</h1>
        <h2>{post.attributes.description}</h2>
      </header>
      <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
    </article>
  );
}

export async function getStaticProps({ params }) {
  const postRes = await axios.get(
    `http://127.0.0.1:1337/api/posts-blogs/${params.id}`
  );
  return {
    props: {
      post: postRes.data.data,
    },
  };
}

export async function getStaticPaths() {
  const postRes = await axios.get("http://127.0.0.1:1337/api/posts-blogs");

  const paths = postRes.data.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default PostPage;
