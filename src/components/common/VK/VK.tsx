"use client";

import Image from "next/image";
import React from "react";
import useDevice from "@/hooks/useDevice";

const WA = () => {
  const { isMobile } = useDevice();

  return (
    <a
      href="https://vk.com/kredo_house_kislovodsk"
      target="_blank"
      className="flex items-center gap-2"
    >
      <Image
        src="/icons/vk.png"
        alt="vk"
        width={isMobile ? 30 : 40}
        height={isMobile ? 30 : 40}
        className="bg-footer-icon rounded-full p-1"
      />
      <span>ВКонтакте</span>
    </a>
  );
};

export default WA;
