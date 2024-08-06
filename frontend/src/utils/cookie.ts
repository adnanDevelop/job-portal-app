import Cookie from "js-cookie";

export const setCookie = (name: string, value: string) => {
  return Cookie.set(name, value, {
    expires: 1,
  });
};

export const getCookie = (name: string) => {
  return Cookie.get(name);
};

export const removeCookie = (name: string) => {
  return Cookie.remove(name);
};
