// app/page.tsx
import React from "react";
import { getSongs } from "@/lib/microcms";
import SongGrid from "./components/SongGrid";
import FilterSection from "./components/FilterSection";
import ArtistScroll from "./components/ArtistScroll";
import ChartScroll from "./components/ChartScroll";

export default async function HomePage() {
const songs = await getSongs();

// 最初の10曲だけを表示（あなたの案の「固定10曲」用）
const displaySongs = songs.slice(0, 10);

return (
<main className="max-w-[1600px] mx-auto px-6 md:px-10 py-12 space-y-16">
{/_ 1. タブ・フィルタセクション _/}
<section>
<FilterSection />
</section>

      {/* 2. メインの曲グリッド（10曲固定） */}
      <section>
        <h2 className="text-2xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent tracking-tight">
          おすすめの曲
        </h2>
        <SongGrid songs={displaySongs} />
      </section>

      {/* 3. アーティストセクション */}
      <section>
        <h2 className="text-2xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent tracking-tight">
          注目のアーティスト
        </h2>
        <ArtistScroll />
      </section>

      {/* 4. トップチャート（これも同じ要領で作れます） */}
      <section>
        <h2 className="text-2xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent tracking-tight">
          トップチャート
        </h2>
        <ChartScroll />
      </section>
    </main>

);
}
