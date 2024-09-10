import { useEffect } from 'react';

import { PageBlock } from '@/shared/components/page-block/page-block';
import { getProductsTotalCount, Pagination } from '@/entities/pagination';
import { useAppSelector } from '@/shared/utils/hooks/use-app-selector';
import { useAppDispatch } from '@/shared/utils/hooks/use-app-dispatch';
import { CatsList } from '@/modules/cats-list';

import { FilteredByFavorite } from '../components/filter-by-favorite';
import { FilterByTag } from '../components/filter-by-tag';

function Productlist() {
  const dispatch = useAppDispatch();
  const pagesCount = useAppSelector(
    (state) => state.pagination?.data?.count || 0
  );
  const isShowFavorite = useAppSelector(
    (state) => state.favoriteToggle.filterOnlyFavorite
  );

  useEffect(() => {
    dispatch(getProductsTotalCount());
    // т.к. дожен отработать только при инициализации компонента
    // eslint-disable-next-line
  }, []);

  return (
    <PageBlock>
      <FilterByTag />
      <FilteredByFavorite />
      <CatsList />
      {!isShowFavorite && <Pagination pages={pagesCount} />}
    </PageBlock>
  );
}

export default Productlist;
