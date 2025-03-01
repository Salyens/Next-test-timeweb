import React from "react";
import Container from "../Container";
import Image from "next/image";
import DivToScroll from "../DivToScroll";
import Phone from "../common/Phone";
import Placemark from "../common/Placemark";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-text py-4">
      <DivToScroll name="contact" />
      <Container>
        <div className="flex flex-col gap-4 items-center pb-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Phone />
            </div>

            <a
              href="https://wa.me/79608848071"
              target="_blank"
              className="flex items-center gap-2"
            >
              <Image
                src="/icons/wa.png"
                alt="wa"
                width={40}
                height={40}
                className="bg-footer-icon rounded-full p-1"
              />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://vk.com/kredo_house_kislovodsk"
              target="_blank"
              className="flex items-center gap-2"
            >
              <Image
                src="/icons/vk.png"
                alt="vk"
                width={40}
                height={40}
                className="bg-footer-icon rounded-full p-1"
              />
              <span>ВКонтакте</span>
            </a>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-xs lg:text-base ">
                <Placemark />
              </div>
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
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
