import About from "@/components/About";
import HowToBook from "@/components/HowToBook";
import Reviews from "@/components/Reviews";
import Rooms from "@/components/Rooms";
import Welcome from "@/components/Welcome";
import Map from "@/components/Map/Map";

const MainPage = () => {
  return (
    <>
      <Welcome />
      <Rooms />
      <HowToBook />
      <About />
      <Reviews />
      <Map/>
    </>
  );
};

export default MainPage;
