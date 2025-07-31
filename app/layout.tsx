import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";
import { GalleryHorizontal, Home, Phone, User } from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/ui/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Marvin's Portfolio",
  description: "Explore Marvin's portfolio showcasing expertise in Data Engineering and AI.",
  keywords: [
    "Marvin",
    "Portfolio",
    "Data Engineering",
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Software Development",
    "Web Development",
    "Programming",
  ],
  authors: [{ name: "Marvin" }],
  creator: "Marvin",   
};

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  // {
  //   name: "Projects",
  //   link: "#projects",
  //   icon: (
  //     <GalleryHorizontal className="h-4 w-4 text-neutral-500 dark:text-white" />
  //   ),
  // },
  {
    name: "Contact",
    link: "#contact",
    icon: <Phone className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <FloatingNav navItems={navItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
