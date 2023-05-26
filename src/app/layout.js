import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "./provider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "ReUseIt",
  description: "Second Hand Products Selling and Buying Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
