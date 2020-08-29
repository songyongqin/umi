export const getCache = (key: string) => {
  let arg = sessionStorage.getItem(key);
  try {
    return JSON.parse(arg || '');
  } catch (err) {
    return arg;
  }
};

export const removeCache = (key: string) => sessionStorage.removeItem(key);

export const setCache = (key: string, value: object | string) =>
  sessionStorage.setItem(key, JSON.stringify(value));
