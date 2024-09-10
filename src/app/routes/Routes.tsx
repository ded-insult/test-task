import { Routes as AllRoutes, Route } from 'react-router-dom';

import { routes } from '@/shared/utils/constants/routes';
import { Layout } from '@/shared/components/layout/layout';
import { WrongPage } from '@/pages/wrong-page';
import { ProductById } from '@/pages/products/product-by-id';
import { ProductList } from '@/pages/products/products-list';
import { CreateProduct } from '@/pages/create-product';

export function Routes() {
  return (
    <AllRoutes>
      <Route
        element={<Layout />}
        path={routes.main()}
        children={[
          <Route
            key={routes.products(':id')}
            path={routes.products(':id')}
            element={<ProductById />}
          />,
          <Route
            key={routes.products('')}
            path={routes.products('')}
            element={<ProductList />}
          />,
          <Route
            key={routes.createProduct()}
            path={routes.createProduct()}
            element={<CreateProduct />}
          />,
        ]}
      />
      <Route element={<WrongPage />} path={routes.wrong()} />,
    </AllRoutes>
  );
}
