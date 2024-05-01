import { Inter } from "next/font/google";
import "./globals.css";
import {CssBaseline, CssVarsProvider} from "@mui/joy";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nathanael Gutierrez",
  description: "Personal website & blog",
};

export default function RootLayout({ children }) {
  return (
      <CssVarsProvider>
        <CssBaseline>
          <html lang="en">
            <body className={inter.className}>{children}</body>
          </html>
        </CssBaseline>
      </CssVarsProvider>
  );
}
