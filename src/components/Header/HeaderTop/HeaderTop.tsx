"use client";

import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import Phone from "@/components/common/Phone";
import Button from "@/components/Button";
import Placemark from "@/components/common/Placemark";
import { MotionDiv } from "@/components/MotionDiv";
import { usePathname, useRouter } from "next/navigation";
import scrollToElementById from "@/utils/helpers/scrollToElementById";

const HeaderTop = () => {
  const pathname = usePathname();
  const isRoomPage = pathname.includes("/room/");
  const router = useRouter();

  const handleClick = () => {
    if (isRoomPage) {
      router.push("/");
      sessionStorage.setItem("scrollToBooking", "true");
    } else {
      router.push("/");
      scrollToElementById("how-to-book");
    }
  };

  return (
    <MotionDiv
      className="border-b border-gray-200 fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm md:h-[70px] flex items-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center py-1 gap-2 lg:gap-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:w-full">
            <div className="flex items-center justify-between gap-2 w-full header-top">
              <Link
                href="/"
                className="flex items-center gap-4 text-[22px] font-medium leading-[25px]"
              >
                <div className="relative w-10 h-10 lg:w-14 lg:h-14">
                  <Image
                    src="/header/house.png"
                    alt="phone"
                    style={{ objectFit: "contain" }}
                    fill
                    sizes="(max-width: 1024px) 60px, 40px"
                    priority
                  />
                </div>
                <p className="text-xs lg:text-base flex flex-col">
                  <span className="mr-1">Гостевой дом</span>
                  <span>«Кредо»</span>
                </p>
              </Link>

              <div className="flex items-center gap-2 xl:gap-8 md:mx-auto">
                <Placemark className="hidden lg:flex" />
                <Phone />
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <iframe
                src="https://yandex.ru/sprav/widget/rating-badge/69363274872"
                width="150"
                height="50"
              ></iframe>
              <Button
                className="w-full px-2 py-1 text-xs md:text-base"
                onClick={() => handleClick()}
              >
                Забронировать
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </MotionDiv>
  );
};

export default HeaderTop;
