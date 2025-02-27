import Image from "next/image";
import React from "react";
import data from "@/data.json";
import classNames from "classnames";

const Phone = ({
  className,
  showIcon = true,
}: {
  className?: string;
  showIcon?: boolean;
}) => {
  const { phone } = data.contact;
  return (
    <a
      className={classNames(
        "flex items-center gap-2",
        className
      )}
      href={`tel:${phone}`}
    >
      {showIcon && (
        <Image
          src="/header/phone.png"
          alt="phone"
          width={40}
          height={40}
        />
      )}
      {phone}
    </a>
  );
};

export default Phone;
