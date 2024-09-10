import { FormEvent, useState } from 'react';

import { AddProduct, productActions } from '@/entities/product/store/slice';
import { Textfield } from '@/shared/components/textfield/textfield';
import { useAppDispatch } from '@/shared/utils/hooks/use-app-dispatch';

export function CreateForm() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<AddProduct>({
    _id: '',
    tags: [''],
  });

  const handleAddProduct = (e: FormEvent) => {
    e.preventDefault();
    dispatch(productActions.addProduct(formData));
  };

  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <Textfield
          label='ID товара'
          onChange={(e) => setFormData({ ...formData, _id: e.target.value })}
        />

        <Textfield
          label='Тэг товара'
          onChange={(e) => setFormData({ ...formData, tags: [e.target.value] })}
        />

        <button type='submit' onClick={handleAddProduct}>
          Отправить данные
        </button>
      </form>
    </div>
  );
}
