import HeaderTop from "@/components/Header/HeaderTop";

export default function RoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderTop />
      {children}
    </>
  );
}
