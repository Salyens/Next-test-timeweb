import Image from "next/image";
import React from "react";
import Button from "../Button";
import Container from "../Container";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Container>
        <div className="flex items-center justify-between py-4">
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
            <p>
              Гостевой дом <br />
              «Кредо»
            </p>
          </Link>
          <div className="flex items-center gap-2">
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
            />
            <a href="tel:+79608848071">
              +7 (960) 884-80-71
            </a>
          </div>
          <iframe
            src="https://yandex.ru/sprav/widget/rating-badge/69363274872"
            width="150"
            height="50"
          ></iframe>
          <Button>Забронировать</Button>
        </div>
      </Container>
      <div className="bg-secondary">
        <Container>
          <div className="flex items-center gap-8 justify-center py-2">
            <Button>Номера</Button>
            <Button>О нас</Button>
            <Button>Контакты</Button>
            <Button>Отзывы</Button>
            <Button>Как забронировать</Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
