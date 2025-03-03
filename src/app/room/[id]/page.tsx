import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import RoomPage from "@/components/pages/RoomPage/RoomPage";
import data from "@/data.json";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const room = data.rooms.find(
    (room) => room.id === Number(id)
  );

  if (!room) {
    notFound();
  }

  return {
    title: room.title,
    description: room.description,
    keywords: room.keywords,
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const room = data.rooms.find(
    (room) => room.id === Number(id)
  );

  if (!room) return;

  return (
    <Container className="mb-10">
      <BackButton roomId={room.id.toString()} />
      <RoomPage room={room} />
    </Container>
  );
}
