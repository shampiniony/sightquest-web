import "./globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Header } from "@/modules/header/header";
import { Footer } from "@/modules/footer/footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "SightQuest",
  description: "Догонялки нового поколения",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen relative scroll-smooth bg-customSecondary font-sans antialiased",
          fontSans.variable
        )}
      > 
        <Header
          items={[{
            title:'Бета тест',
            to: '#form'
        }, 
        {
          title:'О проекте',
          to: '#about-project'
        },
        {
          title: 'Реализация',
          to: '#realization'
        } ]}
          initialIndex={2}
        />
          {children}
        <Footer/>
      </body>
    </html>
  );
}
