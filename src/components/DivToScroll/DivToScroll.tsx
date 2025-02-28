"use client";

import React, { useContext } from "react";
import { RefContext } from "../Context/RefContext";

interface DivToScrollProps {
  name: "rooms" | "about" | "reviews" | "contact" | "howToBook";
}

const DivToScroll: React.FC<DivToScrollProps> = ({
  name,
}) => {
  const { roomsRef, aboutRef, reviewsRef, contactRef, howToBookRef } = useContext(RefContext);

  const getRef = () => {
    switch (name) {
      case "rooms":
        return roomsRef;
      case "about":
        return aboutRef;
      case "reviews":
        return reviewsRef;
      case "contact":
        return contactRef;
      case "howToBook":
        return howToBookRef;
      default:
        return null;
    }
  };

  return <div ref={getRef()}></div>;
};

export default DivToScroll;
