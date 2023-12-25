"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { Inter } from "next/font/google";
import { theme } from "./theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
