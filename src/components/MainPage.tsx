import Welcome from "./Welcome";
import Rooms from "./Rooms";
import About from "./About";
import Reviews from "./Reviews";
import HowToBook from "./HowToBook";
import MapComponent from "./Map/Map";

const MainPage = () => {
  return (
    <>
      <Welcome />
      <Rooms />
      <HowToBook />
      <About />
      <Reviews />
      <MapComponent />
    </>
  );
};

export default MainPage;
