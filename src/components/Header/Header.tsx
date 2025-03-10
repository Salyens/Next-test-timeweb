"use client";

import Image from "next/image";
import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import Container from "../Container";
import classNames from "classnames";
import useDevice from "@/hooks/useDevice";
import HeaderTop from "./HeaderTop";
import { useSearchParams } from "next/navigation";
import { MotionDiv } from "../MotionDiv";
import scrollToElementById from "@/utils/helpers/scrollToElementById";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useDevice();
  const searchParams = useSearchParams();
  const menuRef = useRef<HTMLDivElement>(null);

  const variants = {
    open: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        stiffness: 40,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: isMobile
        ? "inset(0% 0% 100% 0%)"
        : "inset(0% 0% 0% 0%)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    const roomId = sessionStorage.getItem("roomId");
    const scrollToBooking = sessionStorage.getItem(
      "scrollToBooking"
    );
    if (roomId) {
      const roomElement = document.getElementById(roomId);

      if (roomElement) {
        scrollToElementById(`room-${roomId}`);
        sessionStorage.removeItem("roomId");
      }
    }
    if (scrollToBooking) {
      scrollToElementById("how-to-book");
      sessionStorage.removeItem("scrollToBooking");
    }
  }, [searchParams]);

  return (
    <header className="w-full relative z-50 left-0">
      <HeaderTop />
      <div
        className="bg-secondary min-h-[52px] flex items-center relative"
        ref={menuRef}
      >
        <Container
          className={isMobile ? "flex items-center" : ""}
        >
          <MotionDiv
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            className={classNames(
              "flex items-center lg:gap-8 gap-2 justify-center py-2 flex-col lg:flex-row lg:static absolute z-10 border-t border-gray-200 md:border-none text-sm font-bold tracking-[0.04em]",
              {
                "absolute top-full left-0 w-full bg-secondary":
                  isOpen,
                hidden: isMobile && !isOpen,
                flex: !isMobile || isOpen,
              }
            )}
          >
            <Link
              className="cursor-pointer text-white"
              href="#rooms"
            >
              Номера
            </Link>
            <Link
              className="cursor-pointer text-white"
              href="#about"
            >
              О нас
            </Link>
            <Link
              className="cursor-pointer text-white"
              href="#map"
            >
              Контакты
            </Link>
            <Link
              className="cursor-pointer text-white"
              href="#reviews"
            >
              Отзывы
            </Link>
            <Link
              className="cursor-pointer text-white"
              href="#how-to-book"
            >
              Как забронировать
            </Link>
          </MotionDiv>
          {isMobile && (
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="flex items-center mx-6"
            >
              <button onClick={() => setIsOpen(!isOpen)}>
                <Image
                  src="/icons/menu-burger.svg"
                  alt="menu"
                  width={24}
                  height={24}
                />
              </button>
            </MotionDiv>
          )}
        </Container>
      </div>
    </header>
  );
};

export default Header;
