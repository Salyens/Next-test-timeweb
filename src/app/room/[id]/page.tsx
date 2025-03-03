import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import RoomPage from "@/components/pages/RoomPage/RoomPage";
import data from "@/data.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const room = data.rooms.find(
    (room) => room.id === Number(id)
  );

  if (!room) {
    notFound();
  }

  return (
    <Container className="mb-10">
      <BackButton roomId={room.id.toString()} />
      <RoomPage room={room} />
    </Container>
  );
}
