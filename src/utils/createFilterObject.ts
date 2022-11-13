import type { dynamicObject } from "@/types/common";
declare global {
  interface Window {
    greater: any;
    less: any;
    between: any;
    like: any;
    in: any;
  }
}
const createFilterObject = (filters: dynamicObject) => {
  const filterObject: dynamicObject = {};
  for (const key in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, key)) {
      if (filters[key] && typeof filters[key]["type"] !== "undefined") {
        let filterValue = window[filters[key]["type"]](filters[key]);
        if (filterValue) {
          filterObject[key] = filterValue;
        }
      } else if (typeof filters[key] !== "object") {
        filterObject[key] = filters[key];
      }
    }
  }
  const filtersData: dynamicObject = {};
  for (var filter in filterObject) {
    if (Object.prototype.hasOwnProperty.call(filterObject, filter)) {
      filtersData[`filters[${filter}]`] = filterObject[filter];
    }
  }
  return filtersData;
};
window["greater"] = function (filter: dynamicObject) {
  let value = null;
  if (filter.val) {
    value = `(ge)${filter.val}`;
  }
  return value;
};
window["less"] = function (filter: dynamicObject) {
  let value = null;
  if (filter.val) {
    value = `(le)${filter.val}`;
  }
  return value;
};
window["between"] = function (filter: dynamicObject) {
  let value = null;
  if (filter.val1 && filter.val2) {
    value = `<${filter.val1},${filter.val2}>`;
  } else if (filter.val1) {
    filter.val = filter.val1;
    value = window.greater(filter);
  } else if (filter.val2) {
    filter.val = filter.val2;
    value = window.less(filter);
  }
  return value;
};
window["like"] = function (filter: dynamicObject) {
  let value = null;
  if (filter.val !== null) {
    value = `%${filter.val}%`;
  }
  return value;
};
window["in"] = function (filter: dynamicObject) {
  let value = null;
  if (filter.val) {
    if (Array.isArray(filter.val)) {
      value = filter.val.join(",");
    } else {
      value = `${filter.val}`;
    }
  }
  return value;
};

export default createFilterObject;
