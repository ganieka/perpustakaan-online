import { Inter } from "next/font/google";
import "../../public/css/globals.css";
import styles from '../../public/css/styles.module.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Perpustakaan",
  description: "Perpustakaan Online Favorit Anda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
