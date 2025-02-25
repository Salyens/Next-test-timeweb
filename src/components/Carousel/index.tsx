import React from "react";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel/EmblaCarousel";

const OPTIONS = {
  loop: true,
};

const SLIDES = [
  {
    src: "/welcome/1.jpg",
    alt: "carousel-1",
    title: "Гостевой дом Кредо",
    description: "Рады видеть гостей в любое время года! Отдыхайте с комфортом - выбирайте наши номера.",
  },
  {
    src: "/welcome/2.jpg",
    alt: "carousel-2",
    title: "Гостевой дом Кредо",
    description: "Рады видеть гостей в любое время года! Отдыхайте с комфортом - выбирайте наши номера.",
  },
  {
    src: "/welcome/3.jpg",
    alt: "carousel-3",
    title: "Гостевой дом Кредо",
    description: "Рады видеть гостей в любое время года! Отдыхайте с комфортом - выбирайте наши номера.",
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
