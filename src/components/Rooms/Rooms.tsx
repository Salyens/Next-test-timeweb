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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <OneRoom key={room.id} room={room} />
        ))}
      </div>
    </Container>
  );
};

export default Rooms;
