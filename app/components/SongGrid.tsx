// app/components/SongGrid.tsx
import React from "react";
import { Song } from "@/lib/microcms";

type Props = {
  songs: Song[];
};

export default function SongGrid({ songs }: Props) {
  return (
    /* xl:gap-8 にして、カード同士の間隔を少し広げると密度が上がって見えます */
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
      {songs.slice(0, 12).map((song) => (
        <div
          key={song.id}
          /* p-8 にしてカードの中の余白を贅沢に使う */
          className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group shadow-2xl flex flex-col justify-between h-full"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors line-clamp-1 tracking-tight">
              {song.title}
            </h3>

            <p className="text-gray-400 mb-6 text-sm font-medium">
              {song.artists?.map((a) => a.name).join(", ")}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {song.tags?.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-white/5 text-gray-400 text-[10px] px-3 py-1 rounded-full border border-white/5 uppercase tracking-widest"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          <a
            href={song.youtubeUrl}
            target="_blank"
            className="block w-full py-4 rounded-2xl bg-white/10 text-white text-center font-black text-sm hover:bg-white hover:text-black transition-all border border-white/10"
          >
            LISTEN NOW
          </a>
        </div>
      ))}
    </div>
  );
}
