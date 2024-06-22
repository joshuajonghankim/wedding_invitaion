import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "이성연과 김한은의 결혼식에 초대합니다",
  description: "Generated by Joshua Jonghan Kim",
  image: "/images/thumbnail.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
