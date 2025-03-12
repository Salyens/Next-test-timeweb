import Header from "@/components/Header";

export default function RoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header showBottom={false} />
      {children}
    </>
  );
}
