import { getUserById } from './axios-api';
import { saveToLocalStorage, loadfromLocalStorage } from './localStorage';
import { closeModal, openModal } from './modal';
import { refs } from './refs';
import { renderUserInModal, renderUsers } from './render';
import { state } from './state';

let favorite;

export function onUserListItemClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const id = e.target.dataset.id;

  getUserById(id).then(user => {
    state.favoriteUser = user;
    openModal();

    renderUserInModal(user, refs.modal);
    favorite = document.querySelector('.add-favorite-btn');
    favorite.addEventListener('click', onAddToFavBtnClick);
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
  if (e.code === 'Escape') {
    closeModal();
  }
}

export function onAddToFavBtnClick(e) {
  if (e.target.textContent === 'Add to favorite') {
    state.favoriteUsers.push(state.favoriteUser);
    saveToLocalStorage(state.FAVORITES_KEY, state.favoriteUsers);
    favorite.textContent = 'Remove from favorite';
    if (window.location.pathname === '/favorites.html') {
      renderUsers(state.favoriteUsers, refs.favoritesList);
    }
  } else {
    state.favoriteUsers = state.favoriteUsers.filter(
      user => user.id !== state.favoriteUser.id
    );

    saveToLocalStorage(state.FAVORITES_KEY, state.favoriteUsers);
    favorite.textContent = 'Add to favorite';
    if (window.location.pathname === '/favorites.html') {
      renderUsers(state.favoriteUsers, refs.favoritesList);
    }
  }
}
// якшо немає в в localstarage юзкра то в
// відмалвати в дом як <p>It appears that you haven't added any recipes to your favorites yet. To get started, you can add recipes that you
// like to your favorites for easier access in the future.</p>
// і зробити адаптацію для desktop,tablet,mobile
// і навігацію застилити кпасиво(home,fav) і
// Зробити підсвітку кнопки активної сторінки
