
import { create } from 'zustand'

export const useCountState = create((set) => ({
     count: 0,
     inc: () => set((state) => ({ count: state.count + 1 })),
     dec: () => set((state) => ({ count: state.count - 1 })),
}))