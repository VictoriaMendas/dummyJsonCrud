import { renderUsers } from './js/render.js';
import { getUsers } from './js/axios-api';
import { refs } from './js/refs.js';
import { onUserListItemClick, onBackdropClick } from './js/handlers.js';

refs.usersList.addEventListener('click', onUserListItemClick);
refs.backdrop.addEventListener('click', onBackdropClick);

getUsers().then(users => renderUsers(users));
