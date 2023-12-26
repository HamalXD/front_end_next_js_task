"use client";

import "swiper/swiper-bundle.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { Inter } from "next/font/google";
import { theme } from "../theme";
import NavBar from "@src/components/navbar/NavBar";
import { Footer } from "@src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Online Store</title>
        <meta title="description" content="Buy Online"></meta>
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <NavBar />
            {children}
            <Footer />
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
