import { ReactNode } from "react";
import type { Metadata } from "next";

import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

export const metadata: Metadata = {
  title: "PrepWise",
  description: " An  AI-powered 🤖 platform for preparing for mock interviews, designed to simulate real interview environments where users can practice answering questions in real time. The application integrates voice and conversational AI via WebRTC and Vapi workflows, ensuring an interactive and immersive experience. Building such a system required seamlessly connecting multiple services: managing authentication and user data with Firebase, leveraging Gemini AI for dynamic question generation and feedback, and integrating Vapi for voice-based interview simulations. The result is a streamlined, professional platform that empowers users to prepare for interviews with greater confidence and realism.",
};


const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
