import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const createMarkup = (data) => {
  return data
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
};

galleryRef.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

const openModal = (e) => {
  const onEscClick = (e) => {
    if (e.code === "Escape") {
      modal.close();
    }
  };

  const modal = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscClick);
        console.log("Добавлен слушатель клавиатуры");
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscClick);
        console.log("Удалён слушатель клавиатуры");
      },
    }
  );
  modal.show();
};

const onImgClick = (e) => {
  e.preventDefault();
  if (e.target.nodeName === "IMG") {
    openModal(e);
  }
};

galleryRef.addEventListener("click", onImgClick);
