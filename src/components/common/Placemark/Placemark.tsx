import React from "react";
import Image from "next/image";

const Placemark = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/icons/placemark.png"
        alt="mail"
        width={40}
        height={40}
        className="bg-footer-icon rounded-full p-1"
      />
      <span>г. Кисловодск, ул. Суворова 10</span>
    </div>
  );
};

export default Placemark;
