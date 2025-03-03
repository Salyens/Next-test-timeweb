"use client";

import Image from "next/image";
import React from "react";
import data from "@/data.json";
import classNames from "classnames";
import useDevice from "@/hooks/useDevice";

const Phone = ({
  className,
  showIcon = true,
}: {
  className?: string;
  showIcon?: boolean;
}) => {
  const { phone } = data.contact;
  const { isMobile } = useDevice();

  return (
    <a
      className={classNames(
        "flex items-center gap-2",
        className
      )}
      href={`tel:${phone}`}
    >
      {showIcon && (
        <div className="bg-footer-icon rounded-full p-2">
          <Image
            src="/icons/phone.png"
            alt="phone"
            width={isMobile ? 13 : 25}
            height={isMobile ? 13 : 25}
          />
        </div>
      )}
      {phone}
    </a>
  );
};

export default Phone;
