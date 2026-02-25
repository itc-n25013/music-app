// app/components/SongGrid.tsx
import React from "react";
import { Song, Artist, Tag } from "@/lib/microcms";

type Props = {
songs: Song[];
};

export default function SongGrid({ songs }: Props) {
return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
{/_ .slice(0, 12) を追加して 4x3 の12枚に固定 _/}
{songs.slice(0, 12).map((song) => (
<div
key={song.id}
/_ flex flex-col justify-between h-full を追加してボタンの高さを揃える _/
className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group shadow-2xl flex flex-col justify-between h-full" >
<div>
<h3 className="text-xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors line-clamp-1">
{song.title}
</h3>

            <p className="text-gray-400 mb-4 text-sm">
              {song.artists?.map((a: Artist) => a.name).join(", ")}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {Array.isArray(song.tags) &&
                song.tags.map((tag: Tag) => (
                  <span
                    key={tag.id}
                    className="bg-white/5 text-gray-400 text-[10px] px-2 py-1 rounded-md border border-white/5"
                  >
                    {tag.name}
                  </span>
                ))}
            </div>
          </div>

          <a
            href={song.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 rounded-xl bg-white/10 text-white text-center font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all border border-white/10 shadow-lg"
          >
            Listen on YouTube
          </a>
        </div>
      ))}
    </div>

);
}
