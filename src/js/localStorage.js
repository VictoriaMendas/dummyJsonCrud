export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadfromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
