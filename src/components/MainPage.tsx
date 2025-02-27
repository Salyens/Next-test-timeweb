import Welcome from "./Welcome";
import Rooms from "./Rooms";
import About from "./About";
import Reviews from "./Reviews";
import Map from "./Map/Map";
import HowToBook from "./HowToBook";

const MainPage = () => {
  return (
    <>
      <Welcome />
      <Rooms />
      <HowToBook />
      <About />
      <Reviews />
      <Map />
    </>
  );
};

export default MainPage;
