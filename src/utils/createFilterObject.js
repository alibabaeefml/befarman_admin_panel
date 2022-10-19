const createFilterObject = (filters) => {
  const filterObject = {};
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
  const filtersData = {};
  for (var filter in filterObject) {
    if (Object.prototype.hasOwnProperty.call(filterObject, filter)) {
      filtersData[`filters[${filter}]`] = filterObject[filter];
    }
  }
  return filtersData;
};
window["greater"] = function (filter) {
  let value = null;
  if (filter.val) {
    value = `(ge)${filter.val}`;
  }
  return value;
};
window["less"] = function (filter) {
  let value = null;
  if (filter.val) {
    value = `(le)${filter.val}`;
  }
  return value;
};
window["between"] = function (filter) {
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
window["like"] = function (filter) {
  let value = null;
  if (filter.val !== null) {
    value = `%${filter.val}%`;
  }
  return value;
};
window["in"] = function (filter) {
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
