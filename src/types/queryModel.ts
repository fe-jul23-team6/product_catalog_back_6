export type Category = 'phones' | 'tablets' | 'accessories';

export type QueryModel = {
  limit?: number,
  page?: number,
  category?: Category;
};
