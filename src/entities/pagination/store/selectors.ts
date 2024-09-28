import { RootState } from '@/app/store/store';

export const currentPage = (state: RootState) => state.pagination.page;
export const totalPagesCount = (state: RootState) => state.pagination?.data?.count || 0;
