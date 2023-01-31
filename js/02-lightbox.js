import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const createMarkup = (data) => {
  return data
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href='${original}'>
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
};

galleryRef.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
