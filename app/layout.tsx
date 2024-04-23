"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "../ui/SplashScreen";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "#c1c1c1",
          padding: 0,
          margin: 0,
        }}
      >
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
