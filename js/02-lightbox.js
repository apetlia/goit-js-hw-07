import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallaryDivRef = document.querySelector(".gallery");

const gallaryListMarkup = createGallaryListHTML(galleryItems);

gallaryDivRef.innerHTML = gallaryListMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captionClass: "text--align-center",
});

function createCardHTML(item) {
  const { preview, original, description } = item;

  const template = `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;

  return template;
}

function createGallaryListHTML(items) {
  return items.map(item => createCardHTML(item)).join("");
}
