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
  title: "Zygo — El asistente personal a tu alcance",
  description:
    "Cuéntale tu vida por Telegram como a un colega y deja de apuntar cosas en notas que no abres jamás. Gym, gastos, recordatorios — se encarga él.",
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
