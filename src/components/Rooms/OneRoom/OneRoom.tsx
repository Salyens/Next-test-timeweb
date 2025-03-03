import Button from "@/components/Button";
import { MotionDiv } from "@/components/MotionDiv";
import { Room } from "@/types";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const OneRoom = ({ room }: { room: Room }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <>
      <div ref={ref}></div>

      <MotionDiv
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Link
          id={room.id.toString()}
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
      </MotionDiv>
    </>
  );
};

export default OneRoom;
