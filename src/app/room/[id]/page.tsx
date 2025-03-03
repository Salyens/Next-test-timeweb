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
      <Link
        className="flex w-36"
        href={`/?roomId=${room.id}`}
      >
        <p className="underline mt-8 flex items-center gap-2 w-fit">
          <Image
            src="/icons/arrow-left.png"
            alt="arrow-left"
            width={20}
            height={20}
          />
          Назад
        </p>
      </Link>
      <RoomPage room={room} />
    </Container>
  );
}
