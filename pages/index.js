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
      <HomeHeader />
      <HomeLastestPosts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const postRes = await axios.get("http://127.0.0.1:1337/api/posts-blogs");
  return {
    props: {
      posts: postRes.data.data,
    },
  };
}

export default Home;
