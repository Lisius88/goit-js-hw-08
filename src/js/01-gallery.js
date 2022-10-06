// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

///////////////////////////////////////////Пермененные\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const gallery = document.querySelector('.gallery');
console.log(gallery);

///////////////////////////////////////////Шаблон\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const galleryTemplate = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;

///////////////////////////////////////////Создание галлереи\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const render = () => {
  const list = galleryItems.map(galleryTemplate).join('');

  gallery.innerHTML = '';
  gallery.insertAdjacentHTML('beforeend', list);
};
render();

///////////////////////////////////////////Лайтбокс\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
