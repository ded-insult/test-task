import { Product } from '@/entities/product/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  id: string[];
  favorites: Product[];
  filterOnlyFavorite: boolean;
}

const initialState: State = {
  id: [],
  favorites: [],
  filterOnlyFavorite: false,
};

export const toggleFavoriteSice = createSlice({
  name: 'toggle favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }: PayloadAction<Product>) => {
      const isFavorite = state.favorites.some((cat) => cat._id === payload._id);

      const changeFavoriteList = () => {
        return isFavorite
          ? (state.favorites = state.favorites.filter((cat) => cat._id !== payload._id))
          : state.favorites.push(payload);
      };

      changeFavoriteList();

    },

    showOnlyFavorite: (state, { payload }: PayloadAction<boolean>) => {
      state.filterOnlyFavorite = payload;
    },
  },
});

export const { actions: favoriteActions, reducer: favoriteReducer } =
  toggleFavoriteSice;
