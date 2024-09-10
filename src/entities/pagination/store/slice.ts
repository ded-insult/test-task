import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductsTotalCount } from './thunk';

export interface PaginationCount {
  count: number;
}

interface State {
  isLoading: boolean;
  error: unknown;
  page: number;
  data?: PaginationCount;
}

const initialState: State = {
  isLoading: false,
  page: 1,
  error: undefined,
  data: {} as PaginationCount,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsTotalCount.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getProductsTotalCount.fulfilled,
      (state, { payload }: PayloadAction<PaginationCount>) => {
        state.isLoading = false;
        state.data = payload;
      }
    );
    builder.addCase(getProductsTotalCount.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { actions: paginationAction, reducer: paginationReducer } =
  paginationSlice;
