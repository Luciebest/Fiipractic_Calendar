export const storage = window.localStorage;

export function get(key) {
  const item = storage.getItem(key);
  return JSON.parse(item);
}

export function set(key, value) {
  const str = JSON.stringify(value);
  storage.setItem(key, str);
}