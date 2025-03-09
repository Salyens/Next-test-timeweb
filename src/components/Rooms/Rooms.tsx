import Title from "../Title";
import Container from "../Container";
import OneRoom from "./OneRoom";
import DivToScroll from "../DivToScroll";
import data from "@/data.json";
import { MotionDiv } from "../MotionDiv";

const Rooms = () => {
  const { rooms } = data;
  let delay = 0;
  
  return (
    <section>
      <Container className="relative">
        <DivToScroll name="rooms" />
        <Title title="Номера" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => {
            delay += 0.2;
            return (
              <MotionDiv
                key={room.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay }}
              >
                <OneRoom key={room.id} room={room} />
              </MotionDiv>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Rooms;
