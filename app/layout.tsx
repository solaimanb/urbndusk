import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";
import { CounterStoreProvider } from "@/components/providers/counter-store-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "URBNDUSK",
  description: "Redefining elegance with a modern twist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        <CounterStoreProvider>{children}</CounterStoreProvider>
        <Footer />
      </body>
    </html>
  );
}
