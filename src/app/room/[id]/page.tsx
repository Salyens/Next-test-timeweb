import Container from "@/components/Container";
import RoomPhotoCarousel from "@/components/RoomPhotoCarousel";
import data from "@/data.json";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const room = data.rooms.find(
    (room) => room.id === Number(id)
  );

  return (
    <Container className="mb-10">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold py-2 md:py-6">
        {room?.title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <p className="font-bold">В номере</p>
          <ul>
            {room?.facilities.map((facility) => (
              <li className="text-sm ml-2" key={facility}>
                - {facility}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <RoomPhotoCarousel />
        </div>
      </div>
    </Container>
  );
}
