import { ReactNode } from 'react';

import s from './page-block.module.css';

interface Props {
  children: ReactNode;
}

export function PageBlock(props: Props) {
  const { children } = props;

  return <main className={s.main}>{children}</main>;
}
