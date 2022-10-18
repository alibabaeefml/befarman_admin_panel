function isJsonString(str: string): boolean {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
export default {
  set: (key: string, value: any) => {
    value = typeof value == "object" ? JSON.stringify(value) : value;
    localStorage.setItem(key, value);
  },
  get: (key: string) => {
    const value = localStorage.getItem(key);
    if (value) {
      if (isJsonString(value)) {
        return JSON.parse(value);
      } else {
        return value;
      }
    }
    return null;
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
};
