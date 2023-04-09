import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallaryRef = document.querySelector(".gallery");
gallaryRef.addEventListener("click", onLinkClick);

const allGallaryListEl = createListGallaryItems(galleryItems);

gallaryRef.append(...allGallaryListEl);

function createListGallaryItems(items) {
  return items.map(item => {
    const { preview, original, description } = item;

    const li = document.createElement("li");
    li.classList.add("gallery__item");

    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.href = original;

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = preview;
    img.alt = description;
    img.dataset.source = original;

    li.append(a);
    a.append(img);

    return li;
  });
}

function onLinkClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const originalUrl = event.target.dataset.source;

  showModal(originalUrl);
}

function showModal(url) {
  const instance = basicLightbox.create(`<img src="${url}" width="800" height="600">`, {
    onShow: () => window.addEventListener("keydown", onEscCloseLightbox),
    onClose: () => window.removeEventListener("keydown", onEscCloseLightbox),
  });

  instance.show();

  function onEscCloseLightbox(event) {
    if (event.code !== "Escape") return;
    instance.close();
  }
}
