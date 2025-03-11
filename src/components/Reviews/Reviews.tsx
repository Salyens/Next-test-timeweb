import React from "react";
import Container from "../Container";
import Title from "../Title";
import ReviewCarousel from "./ReviewCarousel";
import data from "@/data.json";

const options = {
  loop: true,
  easing: "ease-in-out",
  duration: 30,
};

const Reviews = () => {
  const { reviews } = data;
  return (
    <section id="reviews">
      <Container className="mb-10">
        <Title title="Отзывы" />
        <div className="border-t-2 border-secondary py-2"></div>
        <ReviewCarousel
          slides={reviews}
          options={options}
          autoplay={true}
        />
      </Container>
    </section>
  );
};

export default Reviews;
