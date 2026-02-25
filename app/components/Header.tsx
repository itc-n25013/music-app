// app/components/Header.tsx
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#121212]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* ロゴ：青から紫のグラデーション */}
        <h1 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
          MUSIC APP
        </h1>

        {/* 検索バー */}
        <div className="relative flex-1 max-w-md mx-8">
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="曲名、アーティスト、タグを検索..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-white placeholder:text-gray-500"
          />
        </div>

        {/* 右側のアイコン的なもの（仮） */}
        <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/20 cursor-pointer hover:opacity-80 transition-opacity" />
      </div>
    </header>
  );
}
