import React from "react";
import Welcome from "./Welcome";
import Rooms from "./Rooms";
import About from "./About";
import Reviews from "./Reviews";
// import Map from "./Map/Map";
import Script from "next/script";
import Map from "./Map/Map";

const MainPage = () => {
  return (
    <>
      <Welcome />
      <Rooms />
      <About />
      <Reviews />
      <Map />
    </>
  );
};

export default MainPage;
