"use client";

import Image from "next/image";
import React from "react";
import useDevice from "@/hooks/useDevice";

const WA = () => {
  const { isMobile } = useDevice();

  return (
    <a
      href="https://wa.me/79608848071"
      target="_blank"
      className="flex items-center gap-2"
    >
      <Image
        src="/icons/wa.png"
        alt="wa"
        width={isMobile ? 30 : 40}
        height={isMobile ? 30 : 40}
        className="bg-footer-icon rounded-full p-1"
      />
      <span>WhatsApp</span>
    </a>
  );
};

export default WA;
