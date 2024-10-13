
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { BookOpenText, Home, MailIcon, PencilIcon } from "lucide-react";
import Link from "next/link";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Enigma",
  description: "Looks like a portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900/100 `}
      >
        <div className="bg-gray-900 w-full max-w-6xl mx-auto p-1 rounded-lg shadow-lg">
          {children}
        </div>

        <nav className="fixed bottom-0 left-0 right-0 mx-auto bg-gradient-to-br from-black/90 to-gray-900  text-gray-300 w-max rounded-lg px-6 py-4 my-8">
          <div className="flex justify-center space-x-8">

            <Link
              href="/"
              className="flex flex-col items-center justify-center text-sm hover:text-sky-600"
            >
              <Home className="h-6 w-6 mb-1" aria-hidden="true" />
              Home
            </Link>

            <Link
              href="/blog"
              className="flex flex-col items-center justify-center text-sm hover:text-sky-600"
            >
              <BookOpenText className="h-6 w-6 mb-1" aria-hidden="true" />
              Blog
            </Link>


            <Link
              href="/contact"
              className="flex flex-col items-center justify-center text-sm hover:text-sky-600"
            >
              <MailIcon className="h-6 w-6 mb-1" aria-hidden="true" />
              Contact
            </Link>
          </div>
        </nav>

      </body>
    </html>
  );
}
