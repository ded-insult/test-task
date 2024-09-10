import { createAsyncThunk } from '@reduxjs/toolkit';

import { PaginationCount } from './slice';

export const getProductsTotalCount = createAsyncThunk<PaginationCount, void>(
  'fetch cats total count',
  async (_, thunkApi) => {
    try {
      const data = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/count`
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
