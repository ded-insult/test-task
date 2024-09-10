import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProductsData } from './thunk';
import { Product } from '../types/types';

interface State {
  isLoading: boolean;
  data?: Product[];
  searchValue: string;
  error: unknown;
}

export interface AddProduct {
  _id: string;
  tags: string[];
}

const initialState: State = {
  isLoading: false,
  data: undefined,
  searchValue: '',
  error: undefined,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    findByTag: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
    deleteProduct: (state, { payload }: PayloadAction<string>) => {
      state.data = state.data?.filter((item) => item._id !== payload);
    },
    addProduct: (state, { payload }: PayloadAction<AddProduct>) => {
      // @ts-expect-error другие данные должен генерировать бекенд
      state.data?.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchProductsData.fulfilled,
      (state, { payload }: PayloadAction<Product[]>) => {
        state.isLoading = false;
        state.data = payload;
      }
    );
    builder.addCase(fetchProductsData.rejected, (state, payload) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

export const { actions: productActions, reducer: productReducer } =
  productSlice;
