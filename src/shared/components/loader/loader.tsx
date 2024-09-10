type Loader = 'page' | 'block';

interface Props {
  type: Loader;
}

export function Loader(props: Props) {
  const { type } = props;

  const loaderType: Record<Loader, string> = {
    page: 'Загрузка страницы',
    block: 'Загрузка контента',
  };

  return loaderType[type];
}
