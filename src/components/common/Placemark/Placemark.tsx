import React from "react";
import Image from "next/image";
import useDevice from "@/hooks/useDevice";
import classNames from "classnames";

const Placemark = ({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) => {
  return (
    <div
      className={classNames(
        "flex items-center gap-2",
        className
      )}
    >
      <div
        className={classNames(
          "relative w-10 h-10",
          imgClassName
        )}
      >
        <Image
          src="/icons/placemark.png"
          alt="mail"
          style={{ objectFit: "contain" }}
          fill
          sizes="(max-width: 1024px) 15px, 40px"
        />
      </div>
      <span>г. Кисловодск, ул. Суворова 10</span>
    </div>
  );
};

export default Placemark;
