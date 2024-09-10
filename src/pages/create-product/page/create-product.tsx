import { CatsList } from '@/modules/cats-list';
import { PageBlock } from '@/shared/components/page-block/page-block';

import { CreateForm } from '../components/create-form';

function CreateProduct() {
  return (
    <PageBlock>
      <h1>Создать карточку продукта</h1>
      <CreateForm />
      <CatsList />
    </PageBlock>
  );
}

export default CreateProduct;
