import React from "react";
import Container from "../Container";
import Title from "../Title";
import ReviewCarousel from "./ReviewCarousel";
import DivToScroll from "../DivToScroll";
import data from "@/data.json";

const Reviews = () => {
  const { reviews } = data;
  return (
    <Container className="mb-10">
      <DivToScroll name="reviews" />
      <Title title="Отзывы" />
      <div className="border-t border-gray-200 py-2"></div>
      <ReviewCarousel
        slides={reviews}
        options={{ loop: true }}
        // autoplay={true}
      />
    </Container>
  );
};

export default Reviews;
