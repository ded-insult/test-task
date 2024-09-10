import { memo } from 'react';

import s from './product.module.css';

interface Props {
  tags: string[];
}

export const ProductTag = memo(function ProductTag(props: Props) {
  const { tags } = props;

  const tagList = tags.map((tag) => (
    <div key={tag} className={s.tag}>
      {tag}
    </div>
  ));

  return <div className={s.tags}>{tagList}</div>;
});
