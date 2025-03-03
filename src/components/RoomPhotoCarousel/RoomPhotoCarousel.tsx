"use client";

import PhotoCarousel from "./PhotoCarousel";
const OPTIONS = {
  loop: true,
};

const RoomPhotoCarousel = ({ slides }: { slides: string[] }) => {
  return (
    <PhotoCarousel slides={slides} options={OPTIONS} />
  );
};

export default RoomPhotoCarousel;
