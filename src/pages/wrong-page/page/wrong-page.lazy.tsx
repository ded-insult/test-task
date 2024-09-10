import { lazy, Suspense } from 'react';

import { Loader } from '@/shared/components/loader/loader';

export const WrongPageChunk = lazy(() => import('./wrong-page'));

export function WrongPageLazy() {
  return (
    <Suspense fallback={<Loader type='page' />}>
      <WrongPageChunk />
    </Suspense>
  );
}
