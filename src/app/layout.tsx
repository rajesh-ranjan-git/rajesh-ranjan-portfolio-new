import type { Metadata } from "next";
import "./globals.css";
import TitleManager from "@/components/title-manager/titleManager";

export const metadata: Metadata = {
  title: "Rajesh Ranjan | Full Stack Developer",
  description:
    "Highly skilled and experienced Full Stack Developer with an excellent background in software engineering specializing in building exceptional mobile applications, websites, and everything in between. Well versed with backend technologies, multiple databases and mobile app development. Let's discuss your project needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TitleManager />
        {children}
      </body>
    </html>
  );
}
