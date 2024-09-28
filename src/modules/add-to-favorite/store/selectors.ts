import { RootState } from '@/app/store/store';

export const favoriteList = (state: RootState) => state.favoriteToggle.favorites;
export const filterOnlyFavorite = (state: RootState) => state.favoriteToggle.isFilterOnlyFavorite;
export const favoriteCatsList = (state: RootState) => state.favoriteToggle.favorites;
