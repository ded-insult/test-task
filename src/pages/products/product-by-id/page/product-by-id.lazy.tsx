import { lazy, Suspense } from 'react';

import { Loader } from '@/shared/components/loader/loader';

const ProductByIdChunk = lazy(() => import('./product-by-id'));

export function ProductByIdLazy() {
  return (
    <Suspense fallback={<Loader type='page' />}>
      <ProductByIdChunk />
    </Suspense>
  );
}
