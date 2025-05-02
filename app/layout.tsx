import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import {Toaster} from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: '--font-poppins', 
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export const metadata: Metadata = {
  title: "Seminar Hall Booking System AJIET",
  description: "Seminar Hall Booking System AJIET developed by the development team dept of CSE AJIET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <AuthProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-white text-gray-900 tracking-tight`}
        >
          <Toaster position="bottom-right"/>
          {children}
        </body>
      </AuthProvider>
      
    </html>
  );
}
