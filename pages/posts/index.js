import AllPosts from "@/components/AllPosts";
import React from "react";
import axios from "axios";

function Posts({posts}) {
  return <>
  <AllPosts posts={posts}/>
  </>
}

export default Posts;

export async function getStaticProps() {
    const postRes = await axios.get("https://dummyjson.com/posts");
    console.log("post:", postRes);
    return {
      props: {
        // posts: postRes.data,
        posts: [
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
        ],
      },
    };
  }
  