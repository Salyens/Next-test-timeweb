import React from "react";
import Container from "../Container";
import Title from "../Title";
import Phone from "../common/Phone";

const HowToBook = () => {
  return (
    <section id="how-to-book">
      <Container>
        <Title title="Как забронировать" />
        <ul className="flex flex-col gap-4">
          <li className="flex flex-wrap items-center gap-1">
            <p className="inline">
              1. Позвоните нам по телефону
            </p>
            <Phone
              showIcon={false}
              className="underline text-secondary inline  px-2 py-1 text-sm lg:text-base"
            />
            <p className="inline">или напишите в</p>
            <a
              href="https://wa.me/79180000000"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-secondary inline"
            >
              Whatsapp
            </a>
            <p className="text-xs inline">
              (предоставляется скидка{" "}
              <span className="font-bold text-base">
                10%
              </span>
              )
            </p>
          </li>

          <li className="flex flex-wrap items-center gap-1">
            <p className="inline">
              2. Напишите нам вконтакте
            </p>
            <a
              href="https://vk.com/kredo_house_kislovodsk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-secondary inline px-2 py-1"
            >
              vk.com/kredo_house_kislovodsk
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default HowToBook;
