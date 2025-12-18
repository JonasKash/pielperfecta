import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rutina Matinal 3 Minutos - Elimina Acné y Espinillas",
  description: "El método simple de solo 3 minutos matinales que te da una rutina de skincare perfecta y elimina acné y espinillas para siempre",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  themeColor: "#10b981",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}


