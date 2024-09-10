import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { productReducer } from '@/entities/product';
import { favoriteReducer } from '@/modules/add-to-favorite';
import { paginationReducer } from '@/entities/pagination';

const rootReducer = combineReducers({
  product: productReducer,
  favoriteToggle: favoriteReducer,
  pagination: paginationReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
