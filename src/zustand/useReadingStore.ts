import { create } from "zustand";

interface Reading {
  isReading: boolean;
  toggleReading: () => void;
}

export const useReadingStore = create<Reading>(set => ({
  isReading: false,
  toggleReading: () =>
    set(state => ({
      isReading: !state.isReading,
    })),
}));
