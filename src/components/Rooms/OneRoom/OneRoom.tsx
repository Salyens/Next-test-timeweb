import Button from "@/components/Button";
import { MotionDiv } from "@/components/MotionDiv";
import { Room } from "@/types";
import Image from "next/image";
import Link from "next/link";

const OneRoom = ({ room }: { room: Room }) => {
  return (
    <>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          id={room.id.toString()}
          href={`/room/${room.id}`}
          className="flex flex-col gap-2 font-bold p-4 border-2 border-secondary rounded-lg cursor-pointer"
        >
          <div className="relative w-full h-64">
            <Image
              src={room.mainImage}
              alt="room"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
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
