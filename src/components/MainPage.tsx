"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const MainPage = ({ posts }: { posts: any[] }) => {
  return (
    <div>
      <h1>Hello World</h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
      >
        <Image
          src="/next.svg"
          alt="Profile"
          width={1000}
          height={1000}
        />
      </motion.div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
