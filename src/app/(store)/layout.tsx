import { Header } from "../components/Header";

export default function RootLayout({
  children,
}: Readonly<{ children: JSX.Element }>) {
  return (
    <div className="container mx-auto">
      <Header />
      {children}
    </div>
  );
}
