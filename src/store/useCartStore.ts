import { toast } from 'react-toastify';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartItem = {
  id: string;
  title: string;
  price: string;
  image: string;
};

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existing = get().items.find((i) => i.id === item.id);

        if (existing) {
          toast.error('Данный товар уже в корзине');
        } else {
          set({ items: [...get().items, item] });
          toast.success('Товар успешно добавлен в корзину');
        }
      },
      removeItem: (id) => set({ items: get().items.filter((item) => item.id !== id) }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    },
  ),
);
