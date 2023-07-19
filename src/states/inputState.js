import { create } from 'zustand'

export const useInputState = create((set) => ({
     input: '',
     setInput: (value) => set((state) => ({ input: value }))
}))