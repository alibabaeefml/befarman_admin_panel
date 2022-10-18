import Cookie from "./cookie";
import LocalStorage from "./localStorage";
export default {
  set: (key: string, value: any, typeOfStorage: string = "localStorage") => {
    if (typeOfStorage === "cookie") {
      Cookie.set(key, value);
    } else {
      LocalStorage.set(key, value);
    }
  },
  get: (key: string, typeOfStorage: string = "localStorage") => {
    if (typeOfStorage === "cookie") {
      return Cookie.get(key);
    } else {
      return LocalStorage.get(key);
    }
  },
  remove: (key: string, typeOfStorage: string = "localStorage") => {
    if (typeOfStorage === "cookie") {
      Cookie.remove(key);
    } else {
      LocalStorage.remove(key);
    }
  },
};
