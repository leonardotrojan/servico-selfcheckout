import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./[slug]/menu/contexts/cart";
import { Toaster } from "@/components/ui/sonner";


const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FSW Donalds",
  description: "Bora finalizar esse projeto lindo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} antialiased bg-zinc-900`}>
        <CartProvider>
          <div className="min-h-screen w-full flex justify-center">
            <div className="w-[480px] min-h-screen">
              {children}
            </div>
          </div>
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
