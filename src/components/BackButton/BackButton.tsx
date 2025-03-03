"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const BackButton = ({ roomId }: { roomId: string }) => {
  const setSessionStorage = (id: string) => {
    sessionStorage.setItem("roomId", id);
  };

  return (
    <Link
      className="flex w-36"
      onClick={() => setSessionStorage(roomId)}
      href={`/?roomId=${roomId}`}
    >
      <p className="underline mt-8 flex items-center gap-2 w-fit">
        <Image
          src="/icons/arrow-left.png"
          alt="arrow-left"
          width={20}
          height={20}
        />
        Назад
      </p>
    </Link>
  );
};

export default BackButton;
