import Header from "@/components/Header";
import Head from "next/head";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import RefContextProvider from "@/components/Context/RefContext";

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
          <Footer />
        </RefContextProvider>
      </body>
    </html>
  );
}
