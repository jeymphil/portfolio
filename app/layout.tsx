// layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/Theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/ui/ModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeymphil",
  description: "Portfolio of Jay Mar Phill Engracia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preload" href="/engraciass.png" as="image" />
      <body
        className={`${inter.className} relative bg-radial-black-transparent dark:bg-radial-white-transparent`}
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-20"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="fixed mt-20 ml-5 z-10">
            <ModeToggle />
          </div>
          <main className="p-5">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
