// lib/microcms.ts
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_ID!,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
});

export type Artist = {
  id: string;
  name: string;
};

export type Tag = {
  id: string;
  name: string;
};

export type Song = {
  id: string;
  title: string;
  artists: Artist[];
  tags: Tag[];
  youtubeUrl: string;
};

// songsデータ取得関数
export const getSongs = async (): Promise<Song[]> => {
  const data = await client.get<{ contents: Song[] }>({
    endpoint: "songs",
    queries: { limit: 12 }, // ← ここに limit: 12 を追加！
    customRequestInit: {
      cache: "no-store",
    },
  });
  return data.contents;
};
