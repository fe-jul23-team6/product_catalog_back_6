'use strict';

export type Category = 'phones' | 'tablets' | 'accessories';
export type OrderDirection = 'ASC' | 'DESC';

export type QueryModel = {
  sortBy?: string,
  limit?: number,
  page?: number,
  category?: Category,
  orderDir?: OrderDirection,
};
