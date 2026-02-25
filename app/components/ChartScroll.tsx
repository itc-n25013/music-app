// app/components/ChartScroll.tsx
import React from "react";

// チャートのデータ（見た目を確認するための仮データです）
const CHARTS = [
  {
    id: "c1",
    title: "Global Top 50",
    description: "今世界で一番聴かれている曲",
    color: "from-purple-600 to-blue-600",
  },
  {
    id: "c2",
    title: "Hip-Hop Classic",
    description: "時代を作った伝説のラップ",
    color: "from-red-500 to-orange-500",
  },
  {
    id: "c3",
    title: "Chill Vibes",
    description: "深夜に一人で聴きたいセット",
    color: "from-teal-500 to-emerald-500",
  },
  {
    id: "c4",
    title: "90's Gold",
    description: "あの頃のヒット曲が勢揃い",
    color: "from-yellow-500 to-orange-600",
  },
];

// app/components/ChartScroll.tsx

export default function ChartScroll() {
  return (
    /* 1. px-6 -mx-6 と pt-4 を追加：左右の余白を確保しつつ、上に膨らむスペースを作る */
    <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-6 -mx-6 scrollbar-hide">
      {CHARTS.map((chart) => (
        <div
          key={chart.id}
          /* 2. hover:scale を少し強め(1.05)にし、hover:-translate-y-1 で上に浮かせる */
          /* 3. shadow-2xl で浮遊感を強調 */
          className={`min-w-[300px] h-44 rounded-[1.98rem] p-8 flex flex-col justify-end text-white bg-gradient-to-br ${chart.color} 
          shadow-lg hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden group`}
        >
          {/* 背景の装飾 */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />

          <h3 className="text-2xl font-black italic tracking-wider leading-none">
            {chart.title}
          </h3>
          <p className="text-sm opacity-90 mt-2 font-medium">
            {chart.description}
          </p>
        </div>
      ))}
    </div>
  );
}
