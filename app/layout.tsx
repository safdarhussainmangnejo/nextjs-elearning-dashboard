import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "./theme/ThemeContext";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Layout from "./theme/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elearning Dashboard",
  description: "Developed by Safdar Hussain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
          {children}
          </Layout>
        </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
