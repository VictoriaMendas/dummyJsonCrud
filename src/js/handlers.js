import { getUserById } from './axios-api';
import { saveToLocalStorage } from './localStorage';
import { closeModal, openModal } from './modal';
import { refs } from './refs';
import { renderUserInModal } from './render';
import { state } from './state';
// import { renderOneUser } from './render';

export function onUserListItemClick(e) {
  console.log(e.target);
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const id = e.target.dataset.id;
  console.log(e.target);
  getUserById(id).then(user => {
    // renderOneUser(user);
    state.favoriteUser = user;
    openModal();

    renderUserInModal(user, refs.modal);
    const favorite = document.querySelector('.add-favorite-btn');
    favorite.addEventListener('click', onAddToFavBtnClick);
    if (favorite) {
      favorite.textContent = 'add to favorites';
    } else {
      favorite.textContent = 'remove from favorites';
    }
  });
}

export function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }

  if (e.target.classList.contains('modal-close-btn')) {
    closeModal();
  }
}

export function onEscPress(e) {
  console.log(e.code);
  if (e.code === 'Escape') {
    closeModal();
  }
}
function onAddToFavBtnClick(e) {
  //   console.log(state.favoriteUser);

  const addedToFavoriteUsers = state.favoriteUsers.find(
    user => user.id === state.favoriteUser.id
  );

  if (!addedToFavoriteUsers) {
    state.favoriteUsers.push(state.favoriteUser);

    saveToLocalStorage(state.FAVORITES_KEY, state.favoriteUsers);
  }
}
// При додавані улюбленого кнопка add to fav має мінятися на  remove from fav
// При переході на сторінку Fav має відмалтовуватисб списое улюблених користувачів
// Має вілкриватись модадка на головній сторонці кнопку перевіпити чи є юзкр в localStorage
// Якщо є то кнопка має ьути remove from fav якщр немає то  навпаки
// При кліку на remove from... має видалятисб з localStorage
// (rener 1 more button (remove from favorites) need for localStorag)
