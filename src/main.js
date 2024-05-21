import { renderUsers } from './js/render.js';
import { getUsers } from './js/axios-api';
import { refs } from './js/refs.js';
import { onUserListItemClick, onBackdropClick } from './js/handlers.js';
import { state } from './js/state.js';
import { loadfromLocalStorage } from './js/localStorage.js';

state.favoriteUsers = loadfromLocalStorage(state.FAVORITES_KEY) || [];
refs.usersList.addEventListener('click', onUserListItemClick);
refs.backdrop.addEventListener('click', onBackdropClick);
// refs.messageOnfavouritePage.addEventListener()

getUsers().then(users => renderUsers(users, refs.usersList));
