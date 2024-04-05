import { CartProvider } from "@/contexts/cart-context";
import { Header } from "../components/Header";

export default function RootLayout({
  children,
}: Readonly<{ children: JSX.Element }>) {
  return (
    <CartProvider>
      <div className="container mx-auto">
        <Header />
        {children}
      </div>
    </CartProvider>
  );
}
