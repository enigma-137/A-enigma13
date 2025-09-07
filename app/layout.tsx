import { Special_Elite } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";
import { BookOpenText, Home, MailIcon } from "lucide-react";
import Link from "next/link";

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400", // Only one weight available
  variable: "--font-special-elite",
});

export const metadata: Metadata = {
  title: "Enigma",
  description: "It's Okay, Click the link...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${specialElite.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full md:max-w-4xl mx-auto p-2 rounded-lg bg-background shadow-sm">
            {children}
          </div>

          <nav className="fixed bottom-0 left-0 right-0 mx-auto bg-gradient-to-br from-background/90 to-muted text-muted-foreground w-max rounded-lg px-6 py-6 my-8 backdrop-blur-sm">
            <div className="flex justify-center space-x-8">
              <Link
                href="/"
                className="flex flex-col items-center justify-center text-sm hover:text-primary transition-colors"
              >
                <Home className="h-6 w-6 mb-1" aria-hidden="true" />
                Home
              </Link>

              <Link
                href="/blog"
                className="flex flex-col items-center justify-center text-sm hover:text-primary transition-colors"
              >
                <BookOpenText className="h-6 w-6 mb-1" aria-hidden="true" />
                Blog
              </Link>

              <Link
                href="/contact"
                className="flex flex-col items-center justify-center text-sm hover:text-primary transition-colors"
              >
                <MailIcon className="h-6 w-6 mb-1" aria-hidden="true" />
                Contact
              </Link>
            </div>
          </nav>
        </ThemeProvider>
      </body>
    </html>
  );
}
