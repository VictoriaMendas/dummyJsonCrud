import axios from 'axios';

import * as basicLightbox from 'basiclightbox';
import { refs } from './refs';

export function renderUserCard(users) {
  const markup = users
    .map(({ id, lastName, firstName, image, phone, email }) => {
      console.log(users);
      return `
      <li class="list-user-item">
   
      <img src="${image}" alt="${id}" width="200">
      <div class="list-user-title">
      <h2 class="list-user-name">Firstname: ${firstName}
    </h2>
    <h2 class="list-user-name"> Lastname: ${lastName}</h2>
    <p class="list-user-email">Email: ${email}</p>
    <p class="list-user-phone">Phone: ${phone}</p>
  
    </div>
      </li>`;
    })
    .join('');

  refs.usersList.innerHTML = markup;
}
//  Зпробити модалку при кліку на картку і збільшити фото з повною інфою
// Подія клік з запитом на бєкєнд за 1 юзкром по ід
// ід на лі повішати пв дата атрибут
// поковирятисб в обєкті 1го юхера
// запит на ьєкєнд з dummyJson взяти на 1го юзера
// отримати посилання і намалювати юзера.

const instance = basicLightbox.create(
  `<img class="modal-img" src="${axios.img}" alt="" width="800" height="600">`,
  {
    onShow: instance => {
      onPicClick();
    },
    onClose: instance => {
      onEscClick();
    },
  }
);

export function onPicClick(e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.nodeName !== 'IMAGE') {
    return;
  }

  const imgSrc = e.target.dataset.source;
  const lightBoxImg = instance.element().querySelector('.modal-img');
  lightBoxImg.src = imgSrc;
  instance.show();
}

export function onEscClick(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}
