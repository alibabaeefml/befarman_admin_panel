const hosts = location.hostname.split(".");
let BASE_URL_WITHOUT_PROTOCOL = "localhost";
if (hosts[0] !== "localhost") {
  BASE_URL_WITHOUT_PROTOCOL =
    "." + hosts.slice(Math.max(hosts.length - 2, 0)).join(".");
}

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

    const now = new Date();
    now.setDate(now.getDate() + 60);

    document.cookie = `${key}=${value};path=/;domain=${BASE_URL_WITHOUT_PROTOCOL};expires=${now.toUTCString()}`;
  },
  get: (key: string) => {
    const name = key + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        const value = c.substring(name.length, c.length);
        if (isJsonString(value)) {
          return JSON.parse(value);
        } else {
          return value;
        }
      }
    }
    return null;
  },
  remove: (key: string) => {
    document.cookie = `${key}=;path=/;domain=${BASE_URL_WITHOUT_PROTOCOL}`;
  },
};
