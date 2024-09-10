import { lazy, Suspense } from 'react';

import { Loader } from '@/shared/components/loader/loader';

const ProductListChunk = lazy(() => import('./products-list'));

export function ProductListLazy() {
  return (
    <Suspense fallback={<Loader type='page' />}>
      <ProductListChunk />
    </Suspense>
  );
}
