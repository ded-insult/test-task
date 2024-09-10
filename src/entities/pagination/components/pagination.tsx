import { useAppDispatch } from '@/shared/utils/hooks/use-app-dispatch';
import { PRODUCT_PER_PAGE } from '@/shared/utils/constants/product-per-page';
import { useAppSelector } from '@/shared/utils/hooks/use-app-selector';

import { paginationAction } from '../store/slice';

import s from './pagination.module.css';

interface Props {
  pages: number;
}

export function Pagination(props: Props) {
  const { pages } = props;
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.pagination.page);

  const selectPage = (page: number) => () => {
    dispatch(paginationAction.setPage(page));
  };

  const totalPages = Array.from({
    length: Math.ceil(pages / PRODUCT_PER_PAGE),
  });

  return (
    <div className={s.pages}>
      {totalPages
        .map((_, index) => (
          <div onClick={selectPage(index + 1)} key={index}>
            {index + 1}
          </div>
        ))
        .splice(0, Number(page) + 3)}
    </div>
  );
}
