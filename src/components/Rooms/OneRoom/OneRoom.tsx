import Button from "@/components/Button";
import { Room } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OneRoom = ({ room }: { room: Room }) => {
  return (
    <Link
      href={`/room/${room.id}`}
      className="group flex flex-col gap-2 font-bold  p-4 border cursor-pointer"
    >
      <div className="relative w-full h-64">
        <Image
          src={room.mainImage}
          alt="room"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-sm md:min-h-[50px]">
        {room.title}
      </p>
      <p className="text-xl">{room.price} руб.</p>
      <Button>Подробнее</Button>
    </Link>
  );
};

export default OneRoom;
