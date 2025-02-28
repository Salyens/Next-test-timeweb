"use client";

import React from "react";
import PhotoCarousel from "./PhotoCarousel";

const OPTIONS = {
  loop: true,
};

const SLIDES = [
  {
    id: 1,
    src: "/welcome/1.jpg",
    alt: "carousel-1",
    title: "Гостевой дом Кредо",
    description:
      "Рады видеть гостей в любое время года! Отдыхайте с комфортом - выбирайте наши номера.",
  },
  {
    id: 2,
    src: "/welcome/2.jpg",
    alt: "carousel-2",
    title: "Гостевой дом Кредо",
    description:
      "Рады видеть гостей в любое время года! Отдыхайте с комфортом - выбирайте наши номера.",
  },
  {
    id: 3,
    src: "/welcome/3.jpg",
    alt: "carousel-3",
    title: "Гостевой дом Кредо",
    description:
      "Рады видеть гостей в любое время года! Отдыхайте с комфортом - выбирайте наши номера.",
  },
  {
    id: 4,
    src: "/welcome/1.jpg",
    alt: "carousel-4",
    title: "Гостевой дом Кредо",
    description:
      "Рады видеть гостей в любое время года! Отдыхайте с комфортом - выбирайте наши номера.",
  },
  {
    id: 5,
    src: "/welcome/2.jpg",
    alt: "carousel-5",
    title: "Гостевой дом Кредо",
    description:
      "Рады видеть гостей в любое время года! Отдыхайте с комфортом - выбирайте наши номера.",
  },
  {
    id: 6,
    src: "/welcome/3.jpg",
    alt: "carousel-6",
    title: "Гостевой дом Кредо",
    description:
      "Рады видеть гостей в любое время года! Отдыхайте с комфортом - выбирайте наши номера.",
  },
  {
    id: 7,
    src: "/welcome/1.jpg",
    alt: "carousel-7",
    title: "Гостевой дом Кредо",
  },
  {
    id: 8,
    src: "/welcome/2.jpg",
    alt: "carousel-8",
    title: "Гостевой дом Кредо",
  },
  {
    id: 9,
    src: "/welcome/3.jpg",
    alt: "carousel-9",
    title: "Гостевой дом Кредо",
  },
];

const RoomPhotoCarousel = () => {
  return (
    <PhotoCarousel
      slides={SLIDES}
      options={OPTIONS}
    />
  );
};

export default RoomPhotoCarousel;
