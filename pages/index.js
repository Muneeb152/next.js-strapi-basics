import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import HomeHeader from "@/components/HomeHeader";
import HomeLastestPosts from "@/components/HomeLastestPosts";

const inter = Inter({ subsets: ["latin"] });

function Home({ posts }) {
  return (
    <>
      {/* <h1>{posts[0].title}</h1>
      <h1>{posts[1].title}</h1> */}
      <HomeHeader />
      <HomeLastestPosts posts={posts} />
      {/* <h1>My First Blog Post</h1>
      <h1>My Second Blog Post</h1> */}
    </>
  );
}

export async function getStaticProps() {
  //const postRes = await axios.get("http://localhost:1337/api/posts-blogs/");
  //console.log("Response is:",postRes);
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
      ],
    },
  };
}

export default Home;
