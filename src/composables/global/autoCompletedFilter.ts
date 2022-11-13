import { debounce } from "lodash";

const debouncedFunction = debounce((e, callback) => {
  switch (e.code) {
    case "ArrayDown":
    case "ArrayUp":
    case "Enter":
      return;
  }
  debouncedFunction.cancel();
  if ((e.target.value, e.target.value.trim().length > 1)) {
    callback();
  }
}, 400);

export default (e, callback) => {
  debouncedFunction(e, callback);
};
