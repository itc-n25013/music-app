// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import { Suspense } from "react"; // 1. Suspenseをインポート

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-[#121212] text-white min-h-screen">
        {/* 2. HeaderをSuspenseで囲む */}
        <Suspense fallback={<div className="h-20 bg-[#121212]" />}>
          <Header />
        </Suspense>

        {children}
      </body>
    </html>
  );
}
