import RefContextProvider from "@/components/Context/RefContext";
import HeaderTop from "@/components/Header/HeaderTop";

export default function RoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RefContextProvider>
      <HeaderTop />
      {children}
    </RefContextProvider>
  );
}
