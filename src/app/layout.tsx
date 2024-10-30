import React from "react";
import "./globals.css";
import {GlobalProvider} from "@/Context/GlobalContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <GlobalProvider>
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
        </GlobalProvider>

    );
}
