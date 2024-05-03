import { loadfromLocalStorage } from './localStorage';

export function checkUserInLocalStorage(id, key) {
  const usersInLocalStorage = loadfromLocalStorage(key) ?? [];
  const userInLS = usersInLocalStorage.find(user => user.id === id);
  return userInLS === undefined ? false : true;
}
