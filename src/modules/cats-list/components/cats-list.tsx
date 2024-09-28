import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

import {
  errorMessage,
  loadingStatus,
  productList,
  searchValue,
  fetchProductsData,
  Product,
  ProductDeleteButton,
} from '@/entities/product';
import {
  favoriteCatsList,
  filterOnlyFavorite,
  FavoriteButton,
} from '@/modules/add-to-favorite';
import { useAppDispatch } from '@/shared/utils/hooks/use-app-dispatch';
import { useAppSelector } from '@/shared/utils/hooks/use-app-selector';
import { Loader } from '@/shared/components/loader/loader';
import { currentPage } from '@/entities/pagination';
import type { IProduct } from '@/entities/product';

import s from './cats.module.css';

export function CatsList() {
  const [_, setParam] = useSearchParams();
  const dispatch = useAppDispatch();
  const cats = useAppSelector(productList);
  const showOnlyFavorite = useAppSelector(filterOnlyFavorite);
  const favoriteCats = useAppSelector(favoriteCatsList);
  const isError = useAppSelector(errorMessage);
  const isLoading = useAppSelector(loadingStatus);
  const page = useAppSelector(currentPage);
  const searchvalue = useAppSelector(searchValue);

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
