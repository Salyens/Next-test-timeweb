import BackButton from "@/components/BackButton";
import Container from "@/components/Container";
import HowToBook from "@/components/HowToBook";
import RoomPage from "@/components/pages/RoomPage/RoomPage";
import data from "@/data.json";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
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
  const { id } = await params;
  const room = data.rooms.find(
    (room) => room.id === Number(id)
  );

  if (!room) return;

  return (
    <Container className="mb-10 mt-[90px] md:mt-[60px]">
      <BackButton roomId={room.id.toString()} />
      <RoomPage room={room} />
      <div className="border-t border-secondary">
        <HowToBook />
      </div>
    </Container>
  );
}
