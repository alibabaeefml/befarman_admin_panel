export declare interface Paginate {
  page: number;
  pageStart: number;
  pageCount: number;
  itemsPerPage: number;
  pageStop: number;
  itemsLength: number;
}

export const defaultPaginate = {
  page: 0,
  pageStart: 0,
  pageCount: 0,
  itemsPerPage: 12,
  pageStop: 1,
  itemsLength: 1,
};
