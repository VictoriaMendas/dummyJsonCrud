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

if (!favUsers || favUsers.length === 0) {
  refs.favoritesList.innerHTML = `<p>It appears that you haven't added any recipes to your favorites yet.
    To get started, you can add recipes that you
   like to your favorites for easier access in the future.</p>`;
} else {
  renderUsers(state.favoriteUsers, refs.favoritesList);
}
