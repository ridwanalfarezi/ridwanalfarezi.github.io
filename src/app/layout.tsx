import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ridwan Alfarezi",
  description:
    "Frontend Engineer from Indonesia building reliable web products with React, Next.js, TypeScript, and modern full-stack tooling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNavbar navItems={navItems} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
