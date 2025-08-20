import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import SignOutBtn from "@/components/ui/signOutBtn";

import { isAuthenticated, signOut } from "@/lib/actions/auth.action";

export const metadata: Metadata = {
  title: "PrepWise",
  description: " An  AI-powered 🤖 platform for preparing for mock interviews, designed to simulate real interview environments where users can practice answering questions in real time. The application integrates voice and conversational AI via WebRTC and Vapi workflows, ensuring an interactive and immersive experience. Building such a system required seamlessly connecting multiple services: managing authentication and user data with Firebase, leveraging Gemini AI for dynamic question generation and feedback, and integrating Vapi for voice-based interview simulations. The result is a streamlined, professional platform that empowers users to prepare for interviews with greater confidence and realism.",
};

const RootLayout = async ({children}: {children: ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>

        <SignOutBtn logOut={signOut}/>
      </nav>

      {children}
    </div>
  );
}

export default RootLayout