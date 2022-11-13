import type { dynamicObject } from "@/types/common";
import createFilterObject from "@/utils/createFilterObject";
export const setQueries = ({ filters, sorts, pagination, relation }:dynamicObject) => {
  let Query = {};
  if (typeof filters === "object") {
    filters = createFilterObject(filters);
    Query = { ...Query, ...filters };
  }

  if (sorts) {
    sorts = sorts ? { "sorts[]": sorts } : {};
    Query = { ...Query, ...sorts };
  }

  if (typeof pagination === "object") {
    pagination = {
      per_page: pagination.itemsPerPage,
      page: pagination.page,
    };
    Query = { ...Query, ...pagination };
  }
  if (typeof relation === "object") {
    relation = {
      rel_id: relation.id,
      rel_type: relation.scheme,
    };
    Query = { ...Query, ...relation };
  }

  return Query;
};

export const setPagination = (paginate:dynamicObject) => ({
  page: paginate.current_page,
  pageStop: paginate.to,
  pageStart: paginate.from,
  pageCount: paginate.last_page,
  itemsLength: paginate.total,
  itemsPerPage: paginate.per_page,
});
