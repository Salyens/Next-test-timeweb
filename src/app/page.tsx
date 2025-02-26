import MainPage from "@/components/MainPage";
import "../styles/index.scss";
import Script from "next/script";
// import Map from "@/components/Map";

const Home = async () => {
  return (
    <>
      {/* <Script
        src="https://api-maps.yandex.ru/v3/?apikey=c8efdf97-cb56-4062-ac67-2f5c7b9305fe&lang=en_US"
        strategy="beforeInteractive"
      />
      <Map /> */}
      <MainPage />
    </>
  );
};

export default Home;
