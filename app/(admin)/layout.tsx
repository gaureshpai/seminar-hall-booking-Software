import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-white text-gray-900 tracking-tight`}
      >
        {children}
      </body>
    </html>
  );
}
