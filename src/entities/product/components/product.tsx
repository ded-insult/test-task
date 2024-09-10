import { memo, MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/shared/utils/constants/routes';

import { ProductTag } from './product-tag';
import { Product as IProduct } from '../types/types';

import s from './product.module.css';

interface Props {
  actions?: ReactNode;
  cat: Pick<IProduct, 'tags' | '_id'>;
}

export const Product = memo(function Product(props: Props) {
  const { cat, actions } = props;

  const handleActionsClick = (event: MouseEvent) => {
    event.preventDefault();
  };

  return (
    <Link to={routes.products(cat._id)} className={s.card} key={cat._id}>
      <ProductTag tags={cat.tags} />

      {/* Для наполнения контентом */}
      {cat.tags.length === 2 && (
        <>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          cumque dicta tempore cupiditate sit soluta vero tempora modi ipsum,
          fugit aliquid quidem pariatur enim odio autem maiores possimus.
          Obcaecati, error. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Repudiandae molestiae velit consequuntur dolor, ipsam odit animi
          suscipit ut. Voluptatem qui quam dolor? Voluptatibus, animi
          praesentium voluptatem nemo commodi in voluptas?
        </>
      )}

      <div className={s.actions} onClick={handleActionsClick}>
        {actions}
      </div>
    </Link>
  );
});
