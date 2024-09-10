import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import { fetchProductsData, Product } from '@/entities/product';
import type { IProduct } from '@/entities/product';
import { FavoriteButton } from '@/modules/add-to-favorite';
import { useAppDispatch } from '@/shared/utils/hooks/use-app-dispatch';
import { useAppSelector } from '@/shared/utils/hooks/use-app-selector';
import { Loader } from '@/shared/components/loader/loader';
import { ProductDeleteButton } from '@/entities/product';

import s from './cats.module.css';

export function CatsList() {
  const [_, setParam] = useSearchParams();

  const dispatch = useAppDispatch();
  const cats = useAppSelector(
    (state) => state.product?.data || ([] as IProduct[])
  );
  const showOnlyFavorite = useAppSelector(
    (state) => state.favoriteToggle.filterOnlyFavorite
  );
  const favoriteCats = useAppSelector(
    (state) => state.favoriteToggle.favorites
  );
  const isError = useAppSelector((state) => state.product?.error || null);
  const isLoading = useAppSelector((state) => state.product.isLoading);
  const page = useAppSelector((state) => state.pagination.page);
  const searchvalue = useAppSelector((state) => state.product.searchValue);

  const filterByTagCats = cats.filter((cat) =>
    cat.tags.some((tag) =>
      tag.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    )
  );

  const filteredCats = showOnlyFavorite ? favoriteCats : filterByTagCats;

  useEffect(() => {
    dispatch(fetchProductsData());
    setParam({
      page: page.toString(),
    });
  }, [dispatch, page]);

  if (isLoading) return <Loader type='block' />;

  if (isError) return 'Произошла ошибка';

  // TODO: карточки не удаляются в избранном т.к. идет работа со стором, а не с эндпоинтами от сервера
  return (
    <div className={s.cards}>
      {filteredCats.map((cat: Pick<IProduct, 'tags' | '_id'>) => (
        <Product
          cat={cat}
          key={cat._id}
          actions={
            <>
              <FavoriteButton _id={cat._id} />
              <ProductDeleteButton _id={cat._id} />
            </>
          }
        />
      ))}
    </div>
  );
}
