import { Link } from 'react-router-dom';

import { routes } from '@/shared/utils/constants/routes';
import { PageBlock } from '@/shared/components/page-block/page-block';

function WrongPage() {
  return (
    <PageBlock>
      <Link to={routes.main()}>Перейти на главную страницу</Link>
      <h1>такой страницы не существует</h1>
    </PageBlock>
  );
}

export default WrongPage;
