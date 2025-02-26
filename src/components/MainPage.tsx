import React from "react";
import Welcome from "./Welcome";
import Rooms from "./Rooms";
import About from "./About";
import Reviews from "./Reviews";

const MainPage = () => {
  return (
    <>
      <Welcome />
      <Rooms />
      <About />
      <Reviews />
    </>
  );
};

export default MainPage;
