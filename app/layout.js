import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
// app/layout.js
import './globals.css'; // This brings in Tailwind styles

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WealthMateAI",
  description: "AI powered Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="48x48" />
          <style>{`
            .logo {
              width: 150px;  
              height: auto; 
            }
          `}</style>
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made by Ananya, Devansh, Abhishek and Madhav</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
