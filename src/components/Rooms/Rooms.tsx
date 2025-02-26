import React from "react";
import Title from "../Title";
import Container from "../Container";
import OneRoom from "./OneRoom";

const rooms = [
  {
    id: 1,
    image: "/rooms/double.jpg",
    title:
      "Номер 2х-местный с раздельными кроватями (кухня и санузел в номере)",
    price: 3500,
  },
  {
    id: 2,
    image: "/rooms/double.jpg",
    title:
      "Номер 2х-местный с двухместной кроватью (кухня и санузел в номере)",
    price: 3500,
  },
  {
    id: 3,
    image: "/rooms/double.jpg",
    title: "Номер 3х-местный (кухня и санузел в номере)",
    price: 3500,
  },
  {
    id: 4,
    image: "/rooms/double.jpg",
    title:
      "Номер 4х-местный (с общей кухней и туалетом рядом с номером)",
    price: 3500,
  },
  {
    id: 5,
    image: "/rooms/double.jpg",
    title:
      "Номер 3х-местный (с общей кухней и личным санузлом)",
    price: 3500,
  },
  {
    id: 6,
    image: "/rooms/double.jpg",
    title: "Этаж для большой компании или семьи",
    price: 3500,
  },
];

const Rooms = () => {
  return (
    <Container>
      <Title title="Номера" />
      <div className="flex flex-wrap gap-4 justify-center">
        {rooms.map((room) => (
          <OneRoom key={room.id} room={room} />
        ))}
      </div>
    </Container>
  );
};

export default Rooms;
