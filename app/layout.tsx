// app/layout.tsx
import "./globals.css";
import Header from "./components/Header"; // 読み込み

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* 背景色はここで管理 */}
      <body className="bg-[#121212] text-white min-h-screen">
        <Header /> {/* ここに置くだけ！ */}
        {children}
      </body>
    </html>
  );
}
