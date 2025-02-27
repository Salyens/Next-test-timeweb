import React from "react";
import Title from "../Title";
import Container from "../Container";
import OneRoom from "./OneRoom";
import DivToScroll from "../DivToScroll";
import data from "@/data.json";

const Rooms = () => {
  const { rooms } = data;
  return (
    <Container>
      <DivToScroll name="rooms" />
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
