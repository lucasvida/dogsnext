import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu/menu";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Dogs Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="pt-BR">
        <body>
          <Menu />
          {children}
        </body>
      </html>
    </>
  );
}
