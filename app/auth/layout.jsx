export const metadata = {
  title: "Squirrel | Starter Kit",
  description: "A starter kit for Next.js with Tailwind CSS and TypeScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
