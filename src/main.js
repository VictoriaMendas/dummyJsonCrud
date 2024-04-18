import { renderUserCard } from './js/render.js';
// import { renderCard } from './js/axios-api.js';

import { getOneUser, getUsers } from './js/axios-api';
import { onPicClick, onEscClick } from './js/render';
import { refs } from './js/refs.js';

refs.usersList.addEventListener('click', onPicClick);

refs.usersList.addEventListener('click', onEscClick);

getUsers().then(users => {
  return users;
});
getOneUser().then(user => {
  return user;
});
