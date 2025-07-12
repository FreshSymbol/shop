import type { TFilterParams } from './types';

export const getQuery = ({
  category,
  page,
  limit,
  sort,
  order,
}: TFilterParams): string =>
  `products?${category ? `category=${category}` : ''}&_page=${page}${
    limit ? `&_limit=${limit}` : ''
  }${sort ? `&_sort=${sort}` : ''}${order ? `&_order=${order}` : ''}`.trim();

export const showPagination = (
  currentPage: number,
  lastPage: number,
  visiblePages: number = 5
): number[] => {
  const pagination = [];
  const divPages = Math.floor(visiblePages / 2);

  let startPage = Math.max(1, currentPage - divPages);
  let endPage = Math.min(lastPage, currentPage + divPages);

  if (startPage === 1) {
    endPage = Math.min(visiblePages, lastPage);
  } else if (endPage === lastPage) {
    startPage = Math.max(1, lastPage - visiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pagination.push(i);
  }

  return pagination;
};
