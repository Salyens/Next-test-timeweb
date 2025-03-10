import Header from "@/components/Header/Header";
import { Suspense } from "react";
import { Metadata } from "next";
import MainPage from "@/components/pages/MainPage/MainPage";

export const metadata: Metadata = {
  title: "Номер",
  description:
    "Гостевой дом Кредо в Кисловодске предлагает уютные номера с современными удобствами. Насладитесь комфортом и гостеприимством в любое время года. Забронируйте ваш отдых в Кисловодске уже сегодня!",
  keywords:
    "Гостевой дом Кредо, Кисловодск, уютные номера, современный комфорт, отдых в Кисловодске, бронирование, гостеприимство, отдых в горах",
};

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <MainPage />
    </Suspense>
  );
}
