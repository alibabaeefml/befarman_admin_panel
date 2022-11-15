import type { dynamicObject } from "@/types/common";
export declare enum FilterType {
    Greater = 'greater',
    Less = 'less',
    Between = 'between',
    Like = 'like',
    In = 'in'
}
export declare interface FilterObject {
  type: FilterType,
  val?: any,
  val1?: any,
  val2?: any,
}

const createFilterObject = (filters: FilterObject[]) : dynamicObject => {
  const filterObject: dynamicObject = {};
  for (const key in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, key)) {
      if (filters[key] && typeof filters[key]["type"] !== "undefined") {
        const filterService = new FilterService(filters[key]);
        const filterValue = filterService[filters[key]["type"]]();
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

class FilterService {
  filter;

  constructor (filter: FilterObject) {
    this.filter = filter;
  }

  greater(): string | null {
    let value = null;
    if (this.filter.val) {
      value = `(ge)${this.filter.val}`;
    }
    return value;
  }

  less(): string | null {
    let value = null;
    if (this.filter.val) {
      value = `(le)${this.filter.val}`;
    }
    return value;
  }

  between(): string | null {
    let value = null;
    if (this.filter.val1 && this.filter.val2) {
      value = `<${this.filter.val1},${this.filter.val2}>`;
    } else if (this.filter.val1) {
      this.filter.val = this.filter.val1;
      value = this.greater();
    } else if (this.filter.val2) {
      this.filter.val = this.filter.val2;
      value = this.less();
    }
    return value;
  }

  like(): string | null {
    let value = null;
    if (this.filter.val !== null) {
      value = `%${this.filter.val}%`;
    }
    return value;
  }

  in(): string | null {
    let value = null;
    if (this.filter.val) {
      if (Array.isArray(this.filter.val)) {
        value = this.filter.val.join(",");
      } else {
        value = `${this.filter.val}`;
      }
    }
    return value;
  }
}

export default createFilterObject;
