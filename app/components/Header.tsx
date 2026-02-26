// app/components/Header.tsx
"use client"; // 追加：入力を扱うためクライアントコンポーネントにします

import React from "react";
import { useRouter, useSearchParams } from "next/navigation"; // 追加

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 🔍 検索を実行する関数
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set("q", term); // URLに ?q=文字 を追加
    } else {
      params.delete("q"); // 空の時は削除
    }
    // URLを更新（ページ全体をリロードせずに中身だけ変える）
    router.replace(`/?${params.toString()}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#121212]/80 backdrop-blur-md">
      {/* max-w-[1650px] と px-6 md:px-16 を設定して、下のコンテンツと端を揃える */}
      <div className="max-w-[1650px] mx-auto px-6 md:px-16 h-20 flex items-center justify-between">
        {/* ロゴ */}
        <h1 className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer shrink-0">
          MUSIC APP
        </h1>

        {/* 検索バー */}
        <div className="relative flex-1 max-w-2xl mx-8">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="曲名、アーティストを検索..."
            // URLにある検索文字を初期値にする
            defaultValue={searchParams.get("q")?.toString()}
            // 💡 文字を打つたびに handleSearch を実行
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-gray-500"
          />
        </div>

        {/* 右側のアイコン */}
        <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/20 cursor-pointer hover:scale-105 transition-transform shrink-0" />
      </div>
    </header>
  );
}
