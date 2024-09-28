import { RootState } from '@/app/store/store';

import { IProduct } from '..';

export const productList = (state: RootState) =>
  state.product?.data || ([] as IProduct[]);
export const errorMessage = (state: RootState) => state.product?.error || null;
export const loadingStatus = (state: RootState) => state.product.isLoading;
export const searchValue = (state: RootState) => state.product.searchValue;
