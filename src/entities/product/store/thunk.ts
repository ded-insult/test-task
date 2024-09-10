import { createAsyncThunk } from '@reduxjs/toolkit';

import { Product } from '../types/types';
import { RootState } from '@/app/store/store';
import { PRODUCT_PER_PAGE } from '@/shared/utils/constants/product-per-page';

export const fetchProductsData = createAsyncThunk<Product[], void>(
  'fetch cats',
  async (_, thunkApi) => {
    const page = (state: RootState) => state.pagination.page;

    const skipCount = page(thunkApi.getState() as any);

    try {
      const data = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/cats?skip=${
          skipCount === 1 ? 0 : skipCount * PRODUCT_PER_PAGE
        }`
      ).then((res) => res.json());

      if (!data) {
        return thunkApi.rejectWithValue('Fetching error');
      }

      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);
