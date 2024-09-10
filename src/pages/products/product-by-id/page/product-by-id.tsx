import { Link, useParams } from 'react-router-dom';

import { PageBlock } from '@/shared/components/page-block/page-block';
import { routes } from '@/shared/utils/constants/routes';

function ProductById() {
  const { id } = useParams<'id'>();

  return (
    <PageBlock>
      <h1>
        Здесь должен быть <strong>кот</strong> по ID: {id}
      </h1>

      <h2>Но в API нет эндпоинта :( </h2>

      <Link to={routes.main()}>
        <button>перейти на главную страницу</button>
      </Link>
    </PageBlock>
  );
}

export default ProductById;
