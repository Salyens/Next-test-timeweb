"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
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
    </div>
  );
}
