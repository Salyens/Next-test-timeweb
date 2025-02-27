import React from "react";
import Container from "../Container";
import Title from "../Title";
import Phone from "../common/Phone";

const HowToBook = () => {
  return (
    <Container>
      <Title title="Как забронировать" />
      <ul className="flex flex-col gap-4">
        <li className="flex flex-wrap items-center gap-1">
          <p className="inline">
            1. Свяжитесь с нами по телефону
          </p>
          <Phone
            showIcon={false}
            className="underline text-secondary inline"
          />
          <p className="text-xs inline">
            (предоставляется скидка{" "}
            <span className="font-bold text-base">10%</span>
            )
          </p>
        </li>

        <li className="flex flex-wrap items-center gap-1">
          <p className="inline">2. Через сайт</p>
          <a
            href="https://ostrovok.ru/hotel/russia/kislovodsk/mid10591005/kredo_private_house"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-secondary inline"
          >
            Ostrovok.ru
          </a>
        </li>

        <li className="flex flex-wrap items-center gap-1">
          <p className="inline">
            3. Напишите нам вконтакте
          </p>
          <a
            href="https://vk.com/kredo_house_kislovodsk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-secondary inline"
          >
            vk.com/kredo_house_kislovodsk
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default HowToBook;
