'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import {CssBaseline, CssVarsProvider} from "@mui/joy";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
      <CssVarsProvider>
        <CssBaseline>
          <html lang="en">
          <head>
              <title>Nathanael Gutierrez</title>
          </head>
            <body className={inter.className}>{children}</body>
          </html>
        </CssBaseline>
      </CssVarsProvider>
  );
}
