// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import createMarkup from './gallery/createMarkup';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
