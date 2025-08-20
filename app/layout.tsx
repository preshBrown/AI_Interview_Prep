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
  description: " An  AI-powered 🤖 platform for preparing for mock interviews, designed to simulate real interview environments where users can practice answering questions in real time. The application integrates voice and conversational AI via WebRTC and Vapi workflows, ensuring an interactive and immersive experience. Building such a system required seamlessly connecting multiple services: managing authentication and user data with Firebase, leveraging Gemini AI for dynamic question generation and feedback, and integrating Vapi for voice-based interview simulations. The result is a streamlined, professional platform that empowers users to prepare for interviews with greater confidence and realism.",
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