import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <main className="flex min-h-screen flex-col gap-8 py-12 px-8 lg:px-24">
              <div className="flex justify-between w-full gap-8 border-b border-muted border-spacing-4 py-4">
                <Link
                  href="/"
                  className={buttonVariants({
                    variant: "link",
                    className:
                      "scroll-m-20 text-[1.875rem] text-primary font-extrabold tracking-tight",
                  })}
                >
                  Hello Tanstack Query!!
                </Link>
                <ModeToggle />
              </div>

              {children}
            </main>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
