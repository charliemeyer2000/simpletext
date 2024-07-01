import type {Metadata} from "next";
import "@/styles/globals.css";
import {ThemeProvider} from "@/lib/providers/themeProvider";


export const metadata: Metadata = {
  title: "simpletext",
  description: "Stupidly simple SMS for the NextJS developer.",
  icons: {
    "icon": "/png/logo.png"
  },
  openGraph: {
    images: ['/png/logo.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen bg-background font-sans text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
