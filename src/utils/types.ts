export type TProduct = {
  id: string;
  price: number;
  category: string;
  title: string;
  description?: string;
};

export type TFilterParams = {
  category: string;
  page: number;
  limit: string;
  sort: string;
  order: string;
};

export type TProductBasket = Omit<TProduct, 'category' | 'description'>;

export type TResponse = {
  totalCount: string;
  products: TProduct[];
};
