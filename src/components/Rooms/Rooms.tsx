import Title from "../Title";
import Container from "../Container";
import OneRoom from "./OneRoom";
import data from "@/data.json";
import { MotionDiv } from "../MotionDiv";

const Rooms = () => {
  const { rooms } = data;
  let delay = 0;

  return (
    <section id="rooms">
      <Container className="relative">
        <Title title="Номера" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => {
            delay += 0.1;
            return (
              <MotionDiv
                key={room.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay }}
                viewport={{ once: true, amount: 0.2 }}
                id={`room-${room.id}`}
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
