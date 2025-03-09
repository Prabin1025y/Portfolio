import { create } from 'zustand'

type Store = {
  showMobileNav: boolean
  setShowMobileNav: (value: boolean)=> void 
}

const useStore = create<Store>()((set) => ({
  showMobileNav: false,
  setShowMobileNav : (value)=> set({showMobileNav: value})
}))
