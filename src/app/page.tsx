import MainPage from "@/components/MainPage";
import Header from "@/components/Header";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <MainPage />
    </Suspense>
  );
}
