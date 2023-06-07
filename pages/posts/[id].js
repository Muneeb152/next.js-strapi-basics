import React from "react";

function PostPage({ post }) {
  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
      </header>
    </article>
  );
}

export async function getStaticProps({ params }) {
  // const postRes = await axios.get(`http://localhost:1337/api/posts-blogs/${params.id}`);
  let posts = [
    {
      id: 1,
      title: "my first blog post",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 2,
      title: "my second blog post",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 3,
      title: "my third blog post",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  const foundPost = posts.find((post) => post.id === parseInt(params.id, 10));
  console.log("Post found is:", foundPost);

  return {
    props: {
      //post: postRes.data,
      post: foundPost || null,
    },
  };
}

export async function getStaticPaths() {
  // const postRes = await axios.get("http://localhost:1337/api/posts-blogs/");
  // const paths = postRes.data.map();
  let posts = [
    {
      id: 1,
      title: "my first blog post",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 2,
      title: "my second blog post",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      id: 3,
      title: "my third blog post",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  const paths = posts.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default PostPage;
