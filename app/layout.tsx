import type { Metadata } from "next";
import { Nunito } from "next/font/google";
// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// styles
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VivaTrip - Tu próxima aventura comienza aquí",
  description: "Descubre destinos increíbles, planifica tu viaje perfecto y vive experiencias inolvidables con VivaTrip. Encuentra las mejores ofertas en vuelos, hoteles y tours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang = "en">
      <body className = {`bg-primary text-tertiary overflow-x-hidden ${nunito.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
