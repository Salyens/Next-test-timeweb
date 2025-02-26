import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const OneRoom = ({ room }: { room: any }) => {
  return (
    <div className="group flex flex-col gap-2 font-bold w-full md:w-[40%] lg:w-[30%] min-w-[300px] p-4 border cursor-pointer">
      <div className="relative w-full h-64">
        <Image
          src={room.image}
          alt="room"
          layout="fill"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-sm md:min-h-[50px]">
        {room.title}
      </p>
      <p className="text-xl">{room.price} руб.</p>
      <Button>Подробнее</Button>
    </div>
  );
};

export default OneRoom;
