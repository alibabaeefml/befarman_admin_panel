export default interface Paginate {
    page: number,
    pageStart: number,
    pageCount: number,
    itemsPerPage: number,
    pageStop: number,
    itemsLength: number
}

export const defaultPaginate = {
    page: 1,
    pageStart: 1,
    pageCount: 1,
    itemsPerPage: 12,
    pageStop: 1,
    itemsLength: 1
}