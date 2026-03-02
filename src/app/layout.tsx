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
      <body suppressHydrationWarning className={`${inter.className} min-h-screen flex flex-col antialiased bg-[#fff8e7] text-slate-900 selection:bg-pink-300 selection:text-pink-900`}>
        <div className="flex-1 flex flex-col relative z-10 w-full overflow-x-hidden">
          {children}
        </div>
        <footer className="w-full py-8 text-center border-t-4 border-dashed border-red-300 bg-yellow-300 backdrop-blur-md mt-auto relative z-20 space-y-4">
          <p className="text-red-600 font-bold uppercase tracking-widest flex flex-col items-center justify-center gap-2">
            <span className="text-2xl pt-2">🤡</span>
            This website is satire and for entertainment purposes only.
          </p>
          <div className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            Powered by {' '}
            <a
              href="https://dijkstrainc.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-pink-600 underline underline-offset-4 decoration-2 transition-colors"
            >
              Dijkstra Incorporation
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
