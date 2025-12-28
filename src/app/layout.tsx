import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Saiful Islam | Software Developer & ML Engineer",
  description: "Portfolio of Saiful Islam - A passionate software developer specializing in Machine Learning, Full Stack Development, and innovative solutions. Based in Bangladesh.",
  keywords: ["Saiful Islam", "Software Developer", "Machine Learning", "Full Stack", "Bangladesh", "Portfolio", "Web Developer", "AI Engineer"],
  authors: [{ name: "Saiful Islam" }],
  openGraph: {
    title: "Saiful Islam | Software Developer & ML Engineer",
    description: "Explore the portfolio of Saiful Islam - Software Developer & ML Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
