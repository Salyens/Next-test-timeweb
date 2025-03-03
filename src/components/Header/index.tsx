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
import {
  useSearchParams,
} from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useDevice();

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

  const searchParams = useSearchParams();

  useEffect(() => {
    const roomId = sessionStorage.getItem("roomId");
    if (roomId) {
      const roomElement = document.getElementById(roomId);
      if (roomElement) {
        roomElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
      sessionStorage.removeItem("roomId");
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
          <div
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
          </div>
          {isMobile && (
            <button
              className="mx-6"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Image
                src="/icons/menu-burger.svg"
                alt="menu"
                width={24}
                height={24}
              />
            </button>
          )}
        </Container>
      </div>
    </header>
  );
};

export default Header;
