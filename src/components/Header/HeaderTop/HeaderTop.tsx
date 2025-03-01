"use client";

import React, { useContext } from "react";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import Phone from "@/components/common/Phone";
import { RefContext } from "@/components/Context/RefContext";
import useDevice from "@/hooks/useDevice";
import Button from "@/components/Button";
import Placemark from "@/components/common/Placemark";

const HeaderTop = () => {
  const { isMobile } = useDevice();
  const { howToBookRef } = useContext(RefContext);

  const handleClick = (
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-2 lg:gap-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-4 text-[22px] font-medium leading-[25px]"
          >
            <Image
              src="/header/house.png"
              alt="phone"
              width={isMobile ? 40 : 70}
              height={isMobile ? 40 : 70}
              priority
            />
            <p className="text-xs lg:text-base flex flex-col">
              <span className="mr-1">Гостевой дом</span>
              <span>«Кредо»</span>
            </p>
          </Link>
          <div className="flex items-center gap-2">
            <Phone />
          </div>
        </div>

        <div className="flex items-center gap-2 hidden xl:flex">
          <Placemark />
        </div>

        <div className="flex items-center gap-2">
          <iframe
            src="https://yandex.ru/sprav/widget/rating-badge/69363274872"
            width="150"
            height="50"
          ></iframe>
          <Button
            className="w-full px-2 py-1 text-xs md:text-base"
            onClick={() => handleClick(howToBookRef)}
          >
            Забронировать
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HeaderTop;
