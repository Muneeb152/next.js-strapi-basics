import Navbar from "@/components/Navbar";
// import "@/styles/globals.css";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
