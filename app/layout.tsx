import { Header, Nav } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "System Dental",
    description: "Sistema gestão de consultório",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={`${inter.className} h-screen w-screen flex`}>
                <Nav />
                <div className="flex flex-col w-full h-full">
                    <Header />
                    <main className="h-full overflow-auto">{children}</main>
                </div>
            </body>
        </html>
    );
}
