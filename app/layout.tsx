import type { Metadata } from "next";
import { Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zygo — Tu asistente proactivo en cada chat",
  description:
    "Un asistente proactivo que vive en WhatsApp, iMessage y las apps de mensajería que ya usas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${geistMono.variable} ${nunito.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
