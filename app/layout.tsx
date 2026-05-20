// app/layout.tsx
import { CartProvider } from "./context/CartContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body>
        {/* Аппликейшнийг бүхэлд нь сагсны context-оор ороож байна */}
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
