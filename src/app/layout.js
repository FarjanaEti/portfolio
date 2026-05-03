import { Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Farjana Eti - Portfolio",
  description: "Farjana Eti - User Interface Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
