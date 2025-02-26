import React from "react";
import Welcome from "./Welcome";
import Rooms from "./Rooms";
import About from "./About";
import Reviews from "./Reviews";
// import Map from "./Map/Map";
import Script from "next/script";

const MainPage = () => {
  return (
    <>
      <Welcome />
      <Rooms />
      <About />
      <Reviews />
      {/* <Script
        src="https://api-maps.yandex.ru/v3/?apikey=c8efdf97-cb56-4062-ac67-2f5c7b9305fe&lang=en_US"
        strategy="beforeInteractive"
      />
      <div style={{ width: "100svw", height: "100svh" }}>
        <Map />
      </div> */}
    </>
  );
};

export default MainPage;
