import { create } from 'zustand';

type CartState = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export const useBurgerStore = create<CartState>()((set, get) => ({
  isOpen: false,
  setIsOpen: () => {
    set({ isOpen: !get().isOpen });
  },
}));
