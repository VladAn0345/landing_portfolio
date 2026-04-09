import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Лэндинг",
  description: "Лэндинг с секциями",
};

// Стили для layout
const layoutStyles = {
  html: {
    margin: 0,
    padding: 0,
    scrollbarWidth: "thin" as const,
    scrollbarColor: "#1a2433 #fcfcfc" as const,
  },
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: "#fcfcfc",
    color: "#1A2433",
    fontFamily: "Inter, sans-serif",
  },
  scrollbar: `
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #fcfcfc;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #1a2433;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #1a2433;
      opacity: 0.9;
    }
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" style={layoutStyles.html}>
      <head>
        <style>{layoutStyles.scrollbar}</style>
      </head>
      <body className={inter.className} style={layoutStyles.body}>
        <Header />
        <div style={{ paddingTop: "120px" }}>{children}</div>
      </body>
    </html>
  );
}
