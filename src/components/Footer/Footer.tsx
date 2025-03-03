import React from "react";
import Container from "../Container";
import DivToScroll from "../DivToScroll";
import Phone from "../common/Phone";
import WA from "../common/WA";
import VK from "../common/VK";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-text py-4 text-sm md:text-base">
      <DivToScroll name="contact" />
      <Container>
        <div className="flex flex-col gap-4 items-center pb-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Phone />
            </div>
            <WA />
            <VK />
          </div>
        </div>
      </Container>
      <div className="border-t border-gray-border"></div>
      <Container>
        <div className="flex justify-center gap-4 pt-2 md:pt-4">
          <div className="flex flex-col items-center justify-between gap-2">
            <p className="">Гостевой дом «Кредо»</p>
            <p className="text-sm">
              г. Кисловодск, ул. Суворова 10
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
