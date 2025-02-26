import React from "react";
import Container from "../Container";
import Title from "../Title";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <Title title="О нас" />
      <div className="relative w-full h-[50vh]">
        <Image
          src="/about/1.jpg"
          alt="room"
          layout="fill"
          className="object-cover"
        />
      </div>
    </Container>
  );
};

export default About;
