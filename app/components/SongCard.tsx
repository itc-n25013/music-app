// app/components/SongCard.tsx
import React from "react";
import { Song } from "@/lib/microcms";

export default function SongCard({ song }: { song: Song }) {
  const artistNames = song.artists.map((a) => a.name).join(", ");

  // YouTube検索URLを自動生成（画像がない代わりにすぐ聴ける導線を作る）
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    song.title + " " + artistNames,
  )}`;

  return (
    <div className="flex flex-col justify-between p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-300 transition-all h-full">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-900 leading-tight">
            {song.title}
          </h2>
        </div>

        <p className="text-sm font-medium text-gray-500 mb-4">{artistNames}</p>

        <div className="flex flex-wrap gap-1.5">
          {song.tags.map((tag) => (
            <span
              key={tag.id}
              className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-100"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      <a
        href={youtubeSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center w-full py-2 text-sm font-bold text-white bg-gray-900 rounded-lg hover:bg-red-600 transition-colors"
      >
        Listen on YouTube
      </a>
    </div>
  );
}
