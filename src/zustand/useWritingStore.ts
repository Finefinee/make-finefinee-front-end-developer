import { create } from "zustand";

interface WritingState {
  isWriting: boolean;
  toggleWriting: () => void;
}

export const useWritingStore = create<WritingState>(set => ({
  isWriting: false,
  toggleWriting: () =>
    set(state => ({
      isWriting: !state.isWriting,
    })),
}));