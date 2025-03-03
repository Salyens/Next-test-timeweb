import Head from "next/head";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import RefContextProvider from "@/components/Context/RefContext";
import "@/styles/index.scss";

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
      <body className="flex flex-col min-h-screen mt-[106px] md:mt-[70px]">
        <RefContextProvider>
          {children}
          <div className="mt-auto">
            <Footer />
          </div>
        </RefContextProvider>
      </body>
    </html>
  );
}
