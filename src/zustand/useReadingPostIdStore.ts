import { create } from "zustand";

interface ReadingPostIdState {
  readingPostId: number | null;
  setReadingPostId: (id: number) => void;
}

export const useReadingPostIdStore = create<ReadingPostIdState>(set => ({
  readingPostId: null,
  setReadingPostId: (id: number) =>
    set(() => ({
      readingPostId: id
    })),
}));
