export default function RootLayout({
  children,
}: Readonly<{ children: JSX.Element }>) {
  return (
    <div className="flex mx-auto container h-screen " >
      <div className="flex-1">{children}</div>
    </div>
  );
}
