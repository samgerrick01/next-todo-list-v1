import "./global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Simple Todo List",
  description: "By: Sam Gerrick De Silva",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-white" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
