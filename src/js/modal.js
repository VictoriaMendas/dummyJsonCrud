import { onEscPress } from './handlers';
import { refs } from './refs';

export function openModal() {
  refs.backdrop.classList.remove('is-hidden');

  document.addEventListener('keydown', onEscPress);
}

export function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  document.removeEventListener('keydown', onEscPress);
}
