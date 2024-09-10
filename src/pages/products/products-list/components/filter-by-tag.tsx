import { useCallback } from 'react';

import { SearchProduct } from '@/entities/product';
import { productActions } from '@/entities/product/store/slice';
import { useAppDispatch } from '@/shared/utils/hooks/use-app-dispatch';

export function FilterByTag() {
  const dispatch = useAppDispatch();

  const handl = useCallback(
    (value: string) => {
      dispatch(productActions.findByTag(value));
    },
    [dispatch]
  );

  return (
    <>
      <SearchProduct onChange={handl} />
    </>
  );
}
