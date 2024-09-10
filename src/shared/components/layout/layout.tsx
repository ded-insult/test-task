import { Link, Outlet } from 'react-router-dom';

import { routes } from '@/shared/utils/constants/routes';

import s from './layout.module.css';

export function Layout() {
  return (
    <div className={s.main}>
      <header>
        <nav className={s.nav}>
          <Link to={routes.products('')}>Список товаров</Link>
          <Link to={routes.main()}>На главную страницу</Link>
          <Link to={routes.createProduct()}>Создать товар</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
