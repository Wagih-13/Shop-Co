import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css";
import "./globalStyle.scss";
import Footer from "./components/footer/Footer";

const cairo = Cairo({
  subsets: ["arabic"], // Specify the necessary subsets
});

export const metadata: Metadata = {
  title: "Shop-Co",
  description:
    "Discover the best deals and featured products in our online store. Shop now for a unique experience with fast shipping, secure payment options, and continuous support. Join us and enjoy unparalleled shopping with a wide range of high-quality products. Get special discounts, shop now, and be part of our family!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.className} `}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
