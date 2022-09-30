import create from "zustand";

export default create((set) => ({
  bears: 0,
  count: 0,
  x: 0,
  increaseX: () => set((state) => ({ x: state.x + 1 })),
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
