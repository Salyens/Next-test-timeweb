import Header from "@/components/Header";
import Head from "next/head";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import RefContextProvider from "@/components/Context/RefContext";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Гостевой дом Кредо",
  description: "Гостевой дом Кредо",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <body>
        <RefContextProvider>
          <Header />
          {children}
          {/* <Script
            src="https://api-maps.yandex.ru/2.1/?apikey=795f408c-dd62-4023-83ef-5f2643286ed2&lang=ru_RU"
            strategy="beforeInteractive"
          /> */}
          <Footer />
        </RefContextProvider>
      </body>
    </html>
  );
}
