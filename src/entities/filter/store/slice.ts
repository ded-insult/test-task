import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  isOnlyFavorite: boolean;
}

const initialState: State = {
  isOnlyFavorite: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleIsOnlyFavorite: (state, { payload }: PayloadAction<boolean>) => {
      state.isOnlyFavorite = payload;
    },
  },
});

export const { actions: filterActions, reducer: filterReducer } = filterSlice;
