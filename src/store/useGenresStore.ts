import { GENRES_DATA } from '@/sections/GenresSection/GenresContent/GenresContent';
import { ReactNode } from 'react';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type GenreType = {
  id: number;
  name: string;
  img: ReactNode;
};

type GenreState = {
  activeGenre: GenreType | null;
  changeGenre: (value: GenreType) => void;
};

export const useGenresStore = create<GenreState>()(
  immer((set) => ({
    activeGenre: null,
    changeGenre: (value) =>
      set((state) => {
        state.activeGenre = value;
      }),
  })),
);
