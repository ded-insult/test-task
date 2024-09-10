export const routes = {
  main: () => '/',
  products: (id: string) => `/products/${id}`,
  createProduct: () => '/create-product',
  wrong: () => '*',
} as const;
