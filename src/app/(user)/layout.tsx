export default function RootLayout({
  children,
}: Readonly<{ children: JSX.Element }>) {
  return (
    <div className="flex mx-auto container h-screen font-roboto">
      <div className="flex-1">{children}</div>
    </div>
  );
}
