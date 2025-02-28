import { Metadata } from "next";
import RefContextProvider from "@/components/Context/RefContext";
import HeaderTop from "@/components/Header/HeaderTop";

export const metadata: Metadata = {
  title: "Номер",
  description: "Номер",
};

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
