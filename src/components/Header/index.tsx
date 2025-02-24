"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";
import Container from "../Container";
import Link from "next/link";
import classNames from "classnames";
import useDevice from "@/hooks/useDevice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useDevice();
  const menuRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <Container>
        <div className="flex items-center justify-between py-4 sm:flex-row flex-col gap-4">
          <Link
            href="/"
            className="flex items-center gap-4 text-[22px] font-medium leading-[25px]"
          >
            <Image
              src="/header/house.png"
              alt="phone"
              width={70}
              height={70}
            />
            <p className="hidden md:block">
              Гостевой дом <br />
              «Кредо»
            </p>
          </Link>
          <div className="flex items-center gap-2 hidden xl:flex">
            <Image
              src="/header/place.png"
              alt="mail"
              width={40}
              height={40}
            />
            <p>г. Кисловодск, ул. Суворова 10 </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/header/phone.png"
              alt="phone"
              width={40}
              height={40}
              className="hidden sm:block"
            />
            <a href="tel:+79608848071">
              +7 (960) 884-80-71
            </a>
          </div>
          <iframe
            src="https://yandex.ru/sprav/widget/rating-badge/69363274872"
            width="150"
            height="50"
            className="hidden sm:block"
          ></iframe>
          <Button>Забронировать</Button>
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
            <Button onClick={() => setIsOpen(false)}>
              Номера
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              О нас
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Контакты
            </Button>
            <Button onClick={() => setIsOpen(false)}>
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
    </>
  );
};

export default Header;
