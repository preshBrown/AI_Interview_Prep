import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}

        <Toaster />
      </body>
    </html>
  );
}
// Hello, {{username}}!  let's prepare your interview. i'll ask you a few questions and generatea a perfect interview just for you. Are you Ready?