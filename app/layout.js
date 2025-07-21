import { Outfit } from "next/font/google";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Frontend Practice",
  description: "Just Practice using tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfitFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}