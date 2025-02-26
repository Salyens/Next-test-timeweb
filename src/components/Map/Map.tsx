"use client";
import React, { useEffect } from "react";

const LOCATION = {
  center: [43.89558, 42.709295],
  zoom: 16,
};

const Map = () => {
  useEffect(() => {
    const loadYandexMaps = () => {
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=795f408c-dd62-4023-83ef-5f2643286ed2&lang=ru_RU";
      script.type = "text/javascript";
      script.onload = () => {
        // Initialize the map once the script is loaded
        // @ts-ignore
        window.ymaps.ready(() => {
          // @ts-ignore
          const map = new window.ymaps.Map("yandex-map", {
            center: LOCATION.center,
            zoom: LOCATION.zoom,
          });

          // Add a placemark
          // @ts-ignore
          const placemark = new window.ymaps.Placemark(
            LOCATION.center,
            {
              hintContent: "Кисловодск, ул. Суворова 10",
              balloonContent: "Кисловодск, ул. Суворова 10",
            },
            {
              preset: "islands#icon",
              iconColor: "blue",
            }
          );

          map.geoObjects.add(placemark);

          // Open the balloon when the placemark is clicked
          placemark.events.add("click", function () {
            placemark.balloon.open();
          });
        });
      };
      document.head.appendChild(script);
    };

    loadYandexMaps();
  }, []);

  return (
    <div
      id="yandex-map"
      style={{ width: "100%", height: "400px" }}
    />
  );
};

export default Map;
