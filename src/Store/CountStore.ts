import { create } from "zustand";

interface CounStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCountStore = create<CounStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => (state.count > 0 ? {count: state.count - 1} : {count: 0})),
}))

export default useCountStore;
