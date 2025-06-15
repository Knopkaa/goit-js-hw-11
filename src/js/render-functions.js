import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', 
  captionDelay: 250,  
});

export function createGallery(images) {
  const markup = images
    .map(img => {
      return `
        <li class="gallery-item">
          <a href="${img.largeImageURL}">
            <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
          </a>
        <ul class="info">
  <li class="photo-info">👍 <span class="span">${img.likes}</span></li>
  <li class="photo-info">👁 <span class="span">${img.views}</span></li>
  <li class="photo-info">💬 <span class="span">${img.comments}</span></li>
  <li class="photo-info">⬇️ <span class="span">${img.downloads}</span></li>
</ul>
        </li>
      `;
    })
    .join('');
  gallery.innerHTML += markup;
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}