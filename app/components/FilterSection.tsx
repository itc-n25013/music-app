// app/components/FilterSection.tsx
"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const CATEGORIES = ["すべて", "ジャンル", "年代", "ムード"];

// スクショの「タグ名」と完全に一致させています
const SUB_FILTERS: Record<string, { id: string; name: string }[]> = {
  すべて: [
    { id: "all", name: "All" },
    { id: "Fire", name: "Fire" },
    { id: "Chill", name: "Chill" },
    { id: "Hip-Hop", name: "Hip-Hop" },
    { id: "Rap", name: "Rap" },
  ],
  ジャンル: [
    { id: "Hip-Hop", name: "Hip-Hop" },
    { id: "Trap", name: "Trap" },
    { id: "Drill", name: "Drill" },
    { id: "R&B", name: "R&B" },
    { id: "Rock", name: "Rock" },
    { id: "Pop", name: "Pop" },
    { id: "Reggae", name: "Reggae" },
    { id: "Dance", name: "Dance" },
    { id: "Funk", name: "Funk" },
    { id: "Club", name: "Club" },
    { id: "Rap", name: "Rap" },
  ],
  年代: [
    { id: "1990", name: "1990s" },
    { id: "2000", name: "2000s" },
    { id: "2010", name: "2010s" },
    { id: "2020", name: "2020s" },
  ],
  ムード: [
    { id: "Fire", name: "Fire" },
    { id: "Drive", name: "Drive" },
    { id: "Chill", name: "Chill" },
  ],
};

export default function FilterSection() {
  const [activeCategory, setActiveCategory] = useState("すべて");
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag") || "all";

  const handleTagChange = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (tag === "all") {
      params.delete("tag");
    } else {
      // 💡 microCMSのタグ名と正確に照合するため、そのままセット
      params.set("tag", tag);
    }
    router.replace(`/?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      {/* 1. メインカテゴリータブ */}
      <div className="flex gap-8 border-b border-white/10 pb-2 overflow-x-auto no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-2 text-sm font-medium transition-all relative whitespace-nowrap ${
              activeCategory === cat
                ? "text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
            )}
          </button>
        ))}
      </div>

      {/* 2. サブカテゴリー（スクショの内容を反映） */}
      <div className="flex gap-3 flex-wrap">
        {SUB_FILTERS[activeCategory].map((item) => (
          <button
            key={item.id}
            onClick={() => handleTagChange(item.id)}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all border ${
              currentTag === item.id
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 border-transparent"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border-white/5"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
