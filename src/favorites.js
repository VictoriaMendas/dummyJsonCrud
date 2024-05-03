// import { saveToLocalStorage } from './js/localStorage';
import { state } from './js/state';
import { renderUsers } from './js/render';
import { refs } from './js/refs';
import { loadfromLocalStorage } from './js/localStorage';
import {
  onUserListItemClick,
  onBackdropClick,
  onAddToFavBtnClick,
} from './js/handlers';

const favUsers = loadfromLocalStorage(state.FAVORITES_KEY) ?? [];
state.favoriteUsers = favUsers;
renderUsers(favUsers, refs.favoritesList);
refs.favoritesList.addEventListener('click', onUserListItemClick);
refs.backdrop.addEventListener('click', onBackdropClick);
