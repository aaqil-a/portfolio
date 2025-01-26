import type { Metadata } from "next";
import { Inter, Kadwa } from "next/font/google";
import "./globals.css";
import 'animate.css';

const kadwa = Kadwa({
    weight: "400",
    variable: "--font-kadwa",
    subsets: ["latin"],
});

const inter = Inter({
    weight: ["300","400", "500", "700", "800", "900"],
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Aaqil's Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
            className={`${kadwa.variable} ${inter.variable} font-kadwa antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
