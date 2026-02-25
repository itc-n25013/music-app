// app/page.tsx
import { getSongs } from "@/lib/microcms";
import SongGrid from "./components/SongGrid";
import FilterSection from "./components/FilterSection";
import Header from "./components/Header";
import ArtistScroll from "./components/ArtistScroll";
import ChartScroll from "./components/ChartScroll";

export const forceDynamic = "force-dynamic";

// app/page.tsx

export default async function HomePage() {
  const allSongs = await getSongs();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header は layout.tsx にあるので、ここでは不要（消したままでOK！） */}

      <main className="max-w-[1590px] mx-auto px-6 md:px-12 py-12 space-y-24">
        {/* 1. おすすめの曲（ここを一番上に移動） */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-xl font-black tracking-[0.2em] text-gray-300 uppercase border-l-4 border-blue-500 pl-4">
                RECOMMENDED SONGS
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-black text-blue-500 tracking-tighter">
                {allSongs.length} SONGS FOUND
              </span>
            </div>
          </div>

          <FilterSection />
          <SongGrid songs={allSongs} />
        </section>

        {/* 2. 注目アーティスト（二番目に移動） */}
        <section>
          <h2 className="text-xl font-black mb-8 tracking-[0.2em] text-gray-300 uppercase border-l-4 border-blue-600 pl-4">
            Featured Artists
          </h2>
          <ArtistScroll />
        </section>

        {/* 3. トップチャート（三番目に移動） */}
        <section>
          <h2 className="text-xl font-black mb-8 tracking-[0.2em] text-gray-300 uppercase border-l-4 border-purple-600 pl-4">
            Top Charts
          </h2>
          <ChartScroll />
        </section>
      </main>

      <footer className="py-20 text-center text-gray-600 text-xs tracking-[0.5em] uppercase">
        © 2026 Music App Portfolio
      </footer>
    </div>
  );
}
