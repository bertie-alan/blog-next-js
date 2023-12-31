import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "@/components/Navbar";

const poppinsLight = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppinsLight.className}>
        {" "}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
