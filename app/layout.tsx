
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Bangers } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

const comic = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-comic",
});

export const metadata: Metadata = {
  title: "Julius | Spider-Man Portfolio",
  description: "Personal portfolio of Julius — IT Student and aspiring developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${comic.variable} min-h-screen bg-background text-foreground`}>
        <Navbar />
        <main className="container mx-auto px-4 py-8 max-w-5xl">
          {children}
        </main>
      </body>
    </html>
  );
}
