import { Product } from '@/entities/product/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  ids: string[];
  favorites: Product[];
  isFilterOnlyFavorite: boolean;
}

const initialState: State = {
  ids: [],
  favorites: [],
  isFilterOnlyFavorite: false,
};

export const toggleFavoriteSice = createSlice({
  name: 'toggle favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }: PayloadAction<Product>) => {
      const isFavorite = state.favorites.some((cat) => cat._id === payload._id);

      const changeFavoriteList = () => {
        return isFavorite
          ? (state.favorites = state.favorites.filter(
              (cat) => cat._id !== payload._id
            ))
          : state.favorites.push(payload);
      };

      changeFavoriteList();
    },

    showOnlyFavorite: (state, { payload }: PayloadAction<boolean>) => {
      state.isFilterOnlyFavorite = payload;
    },
  },
});

export const { actions: favoriteActions, reducer: favoriteReducer } =
  toggleFavoriteSice;
