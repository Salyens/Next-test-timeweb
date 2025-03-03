"use client";

import { useRef } from "react";
import Title from "../Title";
import Container from "../Container";
import OneRoom from "./OneRoom";
import DivToScroll from "../DivToScroll";
import data from "@/data.json";
import { MotionDiv } from "../MotionDiv";
import { useInView } from "framer-motion";

const Rooms = () => {
  const { rooms } = data;
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  let delay = 0;
  return (
    <Container className="relative">
      <DivToScroll name="rooms" />
      <Title title="Номера" />
      <div className="absolute top-0 left-0 w-full h-full" ref={ref}></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => {
          delay += 0.2;
          return (
            <MotionDiv
              key={room.id}
              initial={{ opacity: 0 }}
              animate={
                isInView ? { opacity: 1 } : { opacity: 0 }
              }
              transition={{ duration: 0.5, delay }}
            >
              <OneRoom key={room.id} room={room} />
            </MotionDiv>
          );
        })}
      </div>
    </Container>
  );
};

export default Rooms;
