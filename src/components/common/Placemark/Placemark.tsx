import React from "react";
import Image from "next/image";
import useDevice from "@/hooks/useDevice";
import classNames from "classnames";

const Placemark = ({
  className,
}: {
  className?: string;
}) => {
  const { isMobile } = useDevice();
  return (
    <div
      className={classNames(
        "flex items-center gap-2",
        className
      )}
    >
      <Image
        src="/icons/placemark.png"
        alt="mail"
        width={isMobile ? 15 : 40}
        height={isMobile ? 15 : 40}
        className="bg-footer-icon rounded-full p-1"
      />
      <span>г. Кисловодск, ул. Суворова 10</span>
    </div>
  );
};

export default Placemark;
