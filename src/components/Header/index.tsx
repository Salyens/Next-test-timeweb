"use client";

import Image from "next/image";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import Button from "../Button";
import Container from "../Container";
import classNames from "classnames";
import useDevice from "@/hooks/useDevice";
import { RefContext } from "../Context/RefContext";
import HeaderTop from "./HeaderTop";
import { useSearchParams } from "next/navigation";
import { MotionDiv } from "../MotionDiv";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useDevice();
  const searchParams = useSearchParams();

  const menuRef = useRef<HTMLDivElement>(null);
  const {
    roomsRef,
    aboutRef,
    reviewsRef,
    contactRef,
    howToBookRef,
  } = useContext(RefContext);

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
        roomElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        sessionStorage.removeItem("roomId");
      }
    }

    if (scrollToBooking) {
      howToBookRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      sessionStorage.removeItem("scrollToBooking");
    }
  }, [searchParams]);

  const handleClick = (
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className={classNames(
              "flex items-center lg:gap-8 gap-2 justify-center py-2 flex-col lg:flex-row lg:static absolute z-10 border-t border-gray-200 md:border-none",
              {
                "absolute top-full left-0 w-full bg-secondary":
                  isOpen,
                hidden: isMobile && !isOpen,
                flex: !isMobile || isOpen,
              }
            )}
          >
            <Button onClick={() => handleClick(roomsRef)}>
              Номера
            </Button>
            <Button onClick={() => handleClick(aboutRef)}>
              О нас
            </Button>
            <Button onClick={() => handleClick(contactRef)}>
              Контакты
            </Button>
            <Button onClick={() => handleClick(reviewsRef)}>
              Отзывы
            </Button>
            <Button
              onClick={() => handleClick(howToBookRef)}
            >
              Как забронировать
            </Button>
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
