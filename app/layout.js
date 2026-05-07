import { Inter, JetBrains_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/scss/theme.scss";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Faiz Siddique — Full Stack Web Developer Portfolio",
  description:
    "Premium portfolio of Faiz Siddique, a Full Stack Web Developer specializing in MERN stack, React, Next.js, and modern web experiences. Available for freelance projects.",
  keywords: [
    "Faiz Siddique",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "MERN Stack",
    "Portfolio",
    "Frontend Developer",
  ],
  authors: [{ name: "Faiz Siddique" }],
  openGraph: {
    title: "Faiz Siddique — Full Stack Web Developer",
    description:
      "I build modern, scalable and visually powerful web experiences.",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
