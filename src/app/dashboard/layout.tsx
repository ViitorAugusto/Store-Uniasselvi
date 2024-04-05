import { SessionProvider } from "next-auth/react";
import Sidebar from "./side-bar";

export default function RootLayout({
    children,
}: Readonly<{ children: JSX.Element }>) {
    return (
        <SessionProvider>
            <div className="flex" style={{ minHeight: "100vh" }}>
                <Sidebar />
                <div className="flex-1">{children}</div>
            </div>
        </SessionProvider>
    );
}
