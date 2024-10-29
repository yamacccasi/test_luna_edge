import React from "react";
import "./globals.css";
import {StepProvider} from "@/Context/StepContext"; // Импорт глобальных стилей

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <StepProvider>
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
        </StepProvider>
    );
}
