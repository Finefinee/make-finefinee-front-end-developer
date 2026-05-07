import { create } from "zustand";

interface ReadingState {
  isReading: boolean;
  toggleReading: () => void;
}

export const useReadingStore = create<ReadingState>(set => ({
  isReading: false,
  toggleReading: () =>
    set(state => ({
      isReading: !state.isReading,
    })),
}));
