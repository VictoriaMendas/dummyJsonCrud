import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { refs } from './refs';

export function renderUsers(users) {
  const markup = users
    .map(({ id, lastName, firstName, image, phone, email }) => {
      return `
      <li class="list-user-item">
   
      <img class="modal-img" src="${image}" data-id=${id} width="300">
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

let instance = null;

// export function renderOneUser(user) {
//   instance = basicLightbox.create(
//     `<div class="modal"><img class="modal-img" src="${
//       user.image
//     }" width="${300}" height="${400}">
//     <div class="modal-titles">
//     <p>FirstName: ${user.firstName}</p>
//     <p>LastName: ${user.lastName}</p>
//     <p>MaidenName: ${user.maidenName}</p>
//     <p>Age: ${user.age}</p>
//     <p>Email: ${user.email}</p>
//     <p>Phone: ${user.phone}</p>
//     <p>Birthdate: ${user.birthDate}</p>
//     </div>
//     </div>`
//   );

//   instance.show();
// }

export function renderUserInModal(
  { image, firstName, lastName, maidenName, age, email, phone, birthDate },
  modal
) {
  const markup = `<div class="modal-wrapper"><img class="modal-img" src="${image}" width="${300}" height="${400}">
      <div class="modal-info">
      <p>FirstName: ${firstName}</p>
      <p>LastName: ${lastName}</p>
      <p>MaidenName: ${maidenName}</p>
      <p>Age: ${age}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Birthdate: ${birthDate}</p>

      <button type="button" class="add-favorite-btn">Add to favorite</button>
      </div>
      <button class="modal-close-btn">X</button>
      </div>`;
  modal.innerHTML = markup;
}
// export function onEscClick(e) {
//   if (e.code === 'Escape' && instance) {
//     instance.close();
//     instance = null;
//   }
// }
