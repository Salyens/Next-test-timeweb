"use client";
import React, { useEffect, useRef } from "react";

// Keep track of whether the map has been initialized globally
let isMapInitialized = false;
let mapInstance: any = null;

const LOCATION = {
  center: [43.89558, 42.709295],
  zoom: 16,
};

const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    // Clean up any existing map elements to prevent duplicates
    const cleanup = () => {
      const mapElements = document.querySelectorAll(
        ".ymaps-2-1-79-map"
      );
      mapElements.forEach((el) => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });

      if (mapInstance) {
        try {
          mapInstance.destroy();
        } catch (e) {
          console.error("Error destroying map:", e);
        }
        mapInstance = null;
      }
      isMapInitialized = false;
    };

    const loadYandexMaps = () => {
      // Check if the script already exists
      if (
        document.querySelector(
          'script[src*="api-maps.yandex.ru"]'
        )
      ) {
        // If script exists but map doesn't, initialize it
        // @ts-ignore
        if (window.ymaps && !isMapInitialized) {
          initializeMap();
        }
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/2.1/?apikey=795f408c-dd62-4023-83ef-5f2643286ed2&lang=ru_RU";
      script.type = "text/javascript";
      script.onload = () => {
        // Initialize the map once the script is loaded
        if (!isMapInitialized) {
          initializeMap();
        }
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapContainerRef.current) return;

      // @ts-ignore
      window.ymaps.ready(() => {
        // Skip if already initialized
        if (isMapInitialized || mapInstance) return;

        // Create the map
        // @ts-ignore
        mapInstance = new window.ymaps.Map(
          mapContainerRef.current,
          {
            center: LOCATION.center,
            zoom: LOCATION.zoom,
          }
        );

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

        mapInstance.geoObjects.add(placemark);

        // Open the balloon when the placemark is clicked
        placemark.events.add("click", function () {
          placemark.balloon.open();
        });

        isMapInitialized = true;
      });
    };

    // Clean up before initializing
    cleanup();
    loadYandexMaps();

    // Clean up when component unmounts
    return cleanup;
  }, []);

  return (
    <section id="map">
      <div
        ref={mapContainerRef}
        id="yandex-map"
        style={{ width: "100%", height: "400px" }}
      />
    </section>
  );
};

export default Map;
