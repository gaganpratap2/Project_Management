import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import { ThemeProvider } from "@/provider/theme-provider";
// import NavBar from "@/src/componemts/navbar";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "APP NAME ",
  description: "ALL IN ONE AGENCY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

         <html lang="en" className="dark"
         suppressHydrationWarning
         >
          <body className={font.className}>
    <ThemeProvider
      attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
      >
      
       
        {children}
    </ThemeProvider>
      </body>
      
    </html>

   
  );
}
