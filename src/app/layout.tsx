import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import type { PropsWithChildren } from "react";

import Container from "@/components/Container";
import NavBar from "@/components/Nav/NavBar";

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeckCare - Landing",
  description:
    "Our mission is to advance neck rehabilitation through technology and education.",
};

type RootLayoutProps = PropsWithChildren;

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth md:scroll-auto">
      <body className={`${notoSans.className} antialiased min-w-96 box-border`}>
        <Container>
          <NavBar />
        </Container>
        <Container>{children}</Container>
      </body>
    </html>
  );
};

export default RootLayout;
