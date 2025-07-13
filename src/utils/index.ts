import type { TFilterParams } from './types';

export const getQuery = (filterParams: TFilterParams): string => {
  const query = Object.entries(filterParams)
    .filter(([_, value]) => value !== '' && value !== undefined)
    .map(([key, value]) => {
      if (value) return `_${key}=${String(value)}`;
    });

  return `products?${query.join('&')}`;
};

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
