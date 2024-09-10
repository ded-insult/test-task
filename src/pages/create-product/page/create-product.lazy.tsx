import { lazy, Suspense } from 'react';

import { Loader } from '@/shared/components/loader/loader';

const CreateProductChunk = lazy(() => import('./create-product'));

export function CreateProductLazy() {
  return (
    <Suspense fallback={<Loader type='page' />}>
      <CreateProductChunk />
    </Suspense>
  );
}
