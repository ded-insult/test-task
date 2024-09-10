import { ChangeEvent } from 'react';

import { Textfield } from '@/shared/components/textfield/textfield';

interface Props {
  onChange?: (value: string) => void;
}

export function SearchProduct(props: Props) {
  const { onChange } = props;

  const handleChange = (value: ChangeEvent<HTMLInputElement>) => {
    onChange?.(value.target.value);
  };

  return (
    <Textfield
      onChange={handleChange}
      label='Поиск по тэгу'
      placeholder='Введите тэг для поиска'
    />
  );
}
