import type { Metadata } from "next";
import "./globals.css";
import { Inter, Overpass } from "next/font/google";
import config from "@/portfolio.config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.name}`,
    default: `I'm Martin Leo, a full-stack developer based in Sweden`,
  },
  authors: [{ name: config.name, url: config.url }],
  creator: config.name,
  description: "Portfolio page for Martin Leo, a developer from Swweden",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${inter.className} ${overpass.className} m-0 p-0 bg-[#EAE4CA] text-[#5C6A72] dark:bg-[#333C43] dark:text-[#D3C6AA]  selection:bg-[#DF69BA] dark:selection:bg-[#83C092] dark:selection:text-[#333C43]`}
      >
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
