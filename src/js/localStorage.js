export function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  console.log(data);
}

export function loadfromLocalStorage(key) {
  console.log(key);
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error);
  }
}
