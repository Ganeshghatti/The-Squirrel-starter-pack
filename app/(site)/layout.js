import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Squirrel | Starter Kit",
  description: "A starter kit for Next.js with Tailwind CSS and TypeScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
