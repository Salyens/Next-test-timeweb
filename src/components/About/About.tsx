import React from "react";
import Container from "../Container";
import Title from "../Title";
import Image from "next/image";
import { MotionDiv } from "../MotionDiv";

const About = () => {
  return (
    <section id="about">
      <Container className="flex flex-col gap-4 mb-4">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Title title="О нас" />

          <div className="relative w-full h-[50vh]">
            <Image
              src="/about/1.jpg"
              alt="room"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 font-bold">
            <p>
              Гостевой Дом Кредо расположен во второй
              курортной зоне, на тихой улице. До Колоннады,
              Нарзанной галереи, входа в Национальный парк
              700 метров.
            </p>
            <p>
              Для вашего удобства и комфортного отдыха все
              номера оснащены кухней и санузлом. Рядом
              магазины, Кисловодская ярмарка,
              Свято-Никольский собор, Мечеть. Во дворе
              садовая мебель, мангал. Парковка уличная,
              рядом с домом.
            </p>
          </div>
        </MotionDiv>
      </Container>
    </section>
  );
};

export default About;
