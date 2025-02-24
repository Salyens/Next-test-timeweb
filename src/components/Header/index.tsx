import Image from "next/image";
import React from "react";
import Button from "../Button";
import Container from "../Container";

const Header = () => {
  return (
    <Container>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4 text-[22px] font-medium leading-[25px]">
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
        </div>
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
          <p>+7 (960) 884-80-71</p>
        </div>
        <div className="flex items-center gap-2">
          Рейтинг на Ostrovok.ru - 9.0
        </div>
        <Button>Забронировать</Button>
      </div>
    </Container>
  );
};

export default Header;
