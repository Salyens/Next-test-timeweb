import React from "react";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel/EmblaCarousel";

const OPTIONS = {
  loop: true,
  easing: "ease-in-out",
  duration: 40,
};

const SLIDES = [
  {
    src: "/welcome/1.jpg",
    alt: "carousel-1",
    title: "Гостевой дом Кредо",
    description:
      "Ждём вас в любое время года! Выбирайте уютные номера для комфортного отдыха.",
  },
  {
    src: "/welcome/2.jpg",
    alt: "carousel-2",
    title: "Парк Кисловодска",
    description:
      "До Нарзанной галереи – всего 10 минут пешком. Можно добраться и на автобусе!",
  },
  {
    src: "/welcome/3.jpg",
    alt: "carousel-3",
    title: "Зона барбекю",
    description:
      "Мангал и беседка для вкусного отдыха на свежем воздухе.",
  },
  {
    src: "/welcome/4.jpg",
    alt: "carousel-4",
    title: "Номера",
    description:
      "Уют, комфорт и чистота. Всегда свежее белье и продуманные удобства для вашего отдыха.",
  },
];

const Carousel = () => {
  return (
    <EmblaCarousel
      slides={SLIDES}
      options={OPTIONS}
      autoplay={true}
    />
  );
};

export default Carousel;
