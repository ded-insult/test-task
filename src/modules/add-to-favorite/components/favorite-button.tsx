import { memo } from 'react';

import { useAppDispatch } from '@/shared/utils/hooks/use-app-dispatch';
import { useAppSelector } from '@/shared/utils/hooks/use-app-selector';
import { productList } from '@/entities/product/store/selectors';

import { favoriteActions } from '../store/slice';
import { favoriteList } from '../store/selectors';

import s from './favorite-filter.module.css';

interface Props {
  _id: string;
}

export const FavoriteButton = memo(function FavoriteButton(props: Props) {
  const { _id } = props;

  const dispatch = useAppDispatch();
  const cats = useAppSelector(productList);
  const favorite = useAppSelector(favoriteList);

  const catById = cats?.find((cat) => cat._id === _id);

  const handleFavorite = () => {
    dispatch(favoriteActions.toggleFavorite(catById!));
  };

  const likeStatus = favorite.some((cat) => cat._id === catById?._id)
    ? 'лайкнуто'
    : 'лайкнуть';

  return (
    <div onClick={handleFavorite} className={s.favorite}>
      {likeStatus}
    </div>
  );
});
