const KEY = "catalogData";

export function getStoredData() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveItem(item) {
  const data = getStoredData();
  data.push(item);
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function clearStorage() {
  localStorage.removeItem(KEY);
}
