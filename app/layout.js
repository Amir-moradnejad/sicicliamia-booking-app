'use client'
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./components/nav";
import Head from "next/head";

// import Head from "./head"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <Head>
          <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-gray-200">
          <Nav />
          {/* <Head /> */}
          {children}
        </body>
      </html>
    </>
  );
}