import { useCallback } from 'react';

import { FavoriteFilter } from '@/modules/add-to-favorite';
import { favoriteActions } from '@/modules/add-to-favorite/';
import { useAppDispatch } from '@/shared/utils/hooks/use-app-dispatch';

export function FilteredByFavorite() {
  const dispatch = useAppDispatch();

  const handleShow = useCallback(() => {
    dispatch(favoriteActions.showOnlyFavorite(true));
  }, [dispatch]);

  const handlehide = useCallback(() => {
    dispatch(favoriteActions.showOnlyFavorite(false));
  }, [dispatch]);

  return (
    <>
      <FavoriteFilter onFiltered={handleShow} onNonFiltered={handlehide} />
    </>
  );
}
