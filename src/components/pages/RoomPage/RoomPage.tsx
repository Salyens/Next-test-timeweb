import RoomPhotoCarousel from "@/components/RoomPhotoCarousel";
import { Room } from "@/types";
import React from "react";

const RoomPage = ({ room }: { room: Room }) => {
  return (
    <>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold py-2 md:py-6">
        {room?.title}
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl font-bold lg:text-end pb-2">
        {room?.price} руб/сутки
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <p className="font-bold">В номере</p>
          <ul>
            {room?.facilities.map((facility) => (
              <li className="text-sm ml-2" key={facility}>
                - {facility}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <RoomPhotoCarousel />
        </div>
      </div>
    </>
  );
};

export default RoomPage;
