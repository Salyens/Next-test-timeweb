import React from "react";
import Container from "../Container";
import Image from "next/image";
import DivToScroll from "../DivToScroll";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-text py-4">
      <DivToScroll name="contact" />
      <Container>
        <div className="flex flex-col gap-4 items-center pb-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <a
                className="text-xs lg:text-base flex items-center gap-2"
                href="tel:+79608848071"
              >
                <Image
                  src="/header/phone.png"
                  alt="phone"
                  width={40}
                  height={40}
                />
                +7 (960) 884-80-71
              </a>
            </div>
            <div className="flex items-center gap-2">
              <p className="flex items-center gap-2 text-xs lg:text-base ">
                <Image
                  src="/header/place.png"
                  alt="mail"
                  width={40}
                  height={40}
                />
                г. Кисловодск, ул. Суворова 10{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-gray-border"></div>
      <Container>
        <div className="flex justify-center gap-4 pt-4">
          <div className="flex items-center justify-between">
            <p className="text-sm">Гостевой дом «Кредо»</p>
          </div>
          <div className="flex items-center justify-between">
            <a href="https://wa.me/79608848071" target="_blank">
              <Image
                src="/icons/wa.png"
                alt="phone"
                width={40}
                height={40}
                className="bg-footer-icon rounded-full p-1"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
