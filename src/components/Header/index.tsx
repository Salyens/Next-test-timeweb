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
import Link from "next/link";
import classNames from "classnames";
import useDevice from "@/hooks/useDevice";
import { RefContext } from "../Context/RefContext";
import Phone from "../common/Phone";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useDevice();
  const menuRef = useRef<HTMLDivElement>(null);
  const { roomsRef, aboutRef, reviewsRef, contactRef } =
    useContext(RefContext);

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

  const handleClick = (
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
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
            <a
              onClick={() => handleClick(contactRef)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Image
                src="/header/place.png"
                alt="mail"
                width={40}
                height={40}
              />
              г. Кисловодск, ул. Суворова 10
            </a>
          </div>

          <div className="flex items-center gap-2">
            <iframe
              src="https://yandex.ru/sprav/widget/rating-badge/69363274872"
              width="150"
              height="50"
            ></iframe>
            <Button>Забронировать</Button>
          </div>
        </div>
      </Container>
      <div
        className="bg-secondary min-h-[52px] flex items-center relative"
        ref={menuRef}
      >
        <Container
          className={isMobile ? "flex items-center" : ""}
        >
          <div
            className={classNames(
              "flex items-center lg:gap-8 gap-2 justify-center py-2 flex-col lg:flex-row lg:static absolute z-10",
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
            <Button>Как забронировать</Button>
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
