import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Is Durga Prasai In Jail Today?",
  description: "Live satirical tracker. For entertainment purposes only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-[#050505] text-white selection:bg-white/20 selection:text-white`}>
        <div className="flex-1 flex flex-col relative z-10 w-full overflow-x-hidden">
          {children}
        </div>
        <footer className="w-full py-8 text-center border-t border-white/5 bg-black/80 backdrop-blur-md mt-auto relative z-20">
          <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
            This website is satire and for entertainment purposes only.
          </p>
        </footer>
      </body>
    </html>
  );
}
