import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navBar">
      <div className="container">
        <Link href="/">
          <span className="title">Home</span>
        </Link>

        <ul>
          <li>
            <Link href="/posts">All Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
