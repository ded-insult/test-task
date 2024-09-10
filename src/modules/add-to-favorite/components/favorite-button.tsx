import { memo } from 'react';

import { useAppDispatch } from '@/shared/utils/hooks/use-app-dispatch';
import { useAppSelector } from '@/shared/utils/hooks/use-app-selector';

import { favoriteActions } from '../store/slice';

import s from './favorite-filter.module.css';

interface Props {
  _id: string;
}

export const FavoriteButton = memo(function FavoriteButton(props: Props) {
  const { _id } = props;
  const dispatch = useAppDispatch();
  const cats = useAppSelector((state) => state.product?.data || []);
  const fav = useAppSelector((state) => state.favoriteToggle.favorites);

  const catById = cats?.find((cat) => cat._id === _id);

  const handleFavorite = () => {
    dispatch(favoriteActions.toggleFavorite(catById!));
  };

  const likeStatus = fav.some((cat) => cat._id === catById?._id)
    ? 'лайкнуто'
    : 'лайкнуть';

  return (
    <div onClick={handleFavorite} className={s.favorite}>
      {likeStatus}
    </div>
  );
});
