// app/components/FilterSection.tsx
"use client";

import React from "react";

const CATEGORIES = ["すべて", "ジャンル", "年代", "ムード"];
const MOODS = ["Fire", "Drive", "Chill", "Study"];

export default function FilterSection() {
  return (
    <div className="space-y-6">
      {/* メインカテゴリータブ */}
      <div className="flex gap-8 border-b border-white/10 pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`pb-2 text-sm font-medium transition-all relative ${
              cat === "すべて"
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {cat}
            {/* 選択中の下線（青紫グラデーション） */}
            {cat === "すべて" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
            )}
          </button>
        ))}
      </div>

      {/* サブカテゴリー（ムードなど） */}
      <div className="flex gap-3 flex-wrap">
        {MOODS.map((mood) => (
          <button
            key={mood}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${
              mood === "Chill" // 仮でChillを選択中に
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
            }`}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}
