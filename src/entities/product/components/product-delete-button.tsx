import { memo, useCallback } from 'react';

import { useAppDispatch } from '@/shared/utils/hooks/use-app-dispatch';

import { productActions } from '../store/slice';

import s from './product.module.css';

interface Props {
  _id: string;
}

export const ProductDeleteButton = memo(function ProductDeleteButton(
  props: Props
) {
  const { _id } = props;

  const dispatch = useAppDispatch();

  const handleDelete = useCallback(() => {
    dispatch(productActions.deleteProduct(_id));
  }, [dispatch, _id]);

  return (
    <button onClick={handleDelete} className={s.deleteBtn}>
      Удалить карточку
    </button>
  );
});
