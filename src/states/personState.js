import { create } from 'zustand'
export const usePersonState = create((set) => ({
     person: {
          name: "nazmul hossain",
          email: "example@nazmul.co"
     },
     setPerson: (property, value) => set((state) => (
          {
               person: {
                    ...state.person,
                    [property]: value
               }
          }
     ))
}))