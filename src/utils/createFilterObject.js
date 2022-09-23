const createFilterObject = filters => {
    const filterObject = {};
    for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
            if (filters[key] && typeof filters[key]["type"] !== "undefined") {
                let filterValue = window[filters[key]["type"]](filters[key]);
                if (filterValue) {
                    filterObject[key] = filterValue;
                }
            } else if (typeof filters[key] !== 'object') {
                filterObject[key] = filters[key];
            }
        }
    }
    const filtersData = {};
    for (var filter in filterObject) {
        if (filterObject.hasOwnProperty(filter)) {
            filtersData[`filters[${filter}]`] = filterObject[filter];
        }
    }
    return filtersData;
};
window["between"] = function(filter) {
    let value = null;
    if (filter.val1 && filter.val2) {
        value = `<${filter.val1},${filter.val2}>`;
    } else if (filter.val1) {
        filter.val = filter.val1;
        value = greater(filter);
    } else if (filter.val2) {
        filter.val = filter.val2;
        value = less(filter);
    }
    return value;
};
window["greater"] = function(filter) {
    let value = null;
    if (filter.val) {
        value = `(ge)${filter.val}`;
    }
    return value;
};
window["less"] = function(filter) {
    let value = null;
    if (filter.val) {
        value = `(le)${filter.val}`;
    }
    return value;
};

window["like"] = function(filter) {
    let value = null;
    if (filter.val !== null) {
        value = `%${filter.val}%`;
    }
    return value;
};
window["in"] = function(filter) {
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