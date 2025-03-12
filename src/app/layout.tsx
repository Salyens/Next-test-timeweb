import Head from "next/head";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import "@/styles/index.css";

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
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className="flex flex-col min-h-screen">
        {children}
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
