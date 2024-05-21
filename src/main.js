import './js/pixabay-api';
import { fetchImageData } from './js/pixabay-api';
import './js/render-functions';
import {
  showNotification,
  updateUi,
  updateButtonUi,
  showLoader,
} from './js/render-functions';

export const refs = {
  searchForm: document.querySelector('.search-bar-form'),
  searchInput: document.querySelector('#search-bar'),
  searchButton: document.querySelector('button'),
  galleryList: document.querySelector('.gallery-list'),
  extensionButton: document.querySelector('.extentionButton'),
};

export let userSearchRequestValue = '';
export let currentPage = 1;
export let limit = 15;
export let totalPages = 0;

function clearGallery() {
  refs.galleryList.innerHTML = '';
}

if (!refs.searchForm.dataset.listenerAttached) {
  refs.searchForm.dataset.listenerAttached = 'true';

  refs.searchForm.addEventListener('submit', async event => {
    event.preventDefault();
    clearGallery();
    userSearchRequestValue = refs.searchInput.value.trim();
    currentPage = 1;
    if (userSearchRequestValue === '') {
      refs.extensionButton.style.display = 'none';
      showNotification('Please enter a search term.');
      return;
    }

    refs.extensionButton.style.display = 'none';

    showLoader(true);
    setTimeout(async () => {
      try {
        const images = await fetchImageData(
          userSearchRequestValue,
          currentPage,
          limit
        );
        updateUi(images);
        if (refs.galleryList.childElementCount <= 0) {
          showNotification('No images found.');
        }

        if (images.length > 0) {
          refs.extensionButton.style.display = 'block';
          refs.extensionButton.classList.remove('extentionButton');
          refs.extensionButton.classList.add('div-button');
        } else {
          refs.extensionButton.style.display = 'none';
        }
      } catch (error) {
        console.error('Error fetching or updating images:', error);
        showNotification('An error occurred while fetching images.');
      } finally {
        showLoader(false);
      }
    }, 1000);

    refs.searchInput.value = '';
  });
}

if (!refs.extensionButton.dataset.listenerAttached) {
  refs.extensionButton.dataset.listenerAttached = 'true';

  refs.extensionButton.addEventListener('click', async event => {
    event.preventDefault();
    showLoader(true);

    currentPage += 1;

    setTimeout(async () => {
      try {
        const images = await fetchImageData(
          userSearchRequestValue,
          currentPage,
          limit
        );
        updateUi(images);
        updateButtonUi();

        scrollGallery();
      } catch (error) {
        console.error('Error fetching or updating images:', error);
      } finally {
        showLoader(false);
      }
    }, 1000);
  });
}

function scrollGallery() {
  const rect = refs.galleryList.getBoundingClientRect();
  const scrollDistance = rect.height * 2;
  const scrollSpeed = 500;
  const scrollStep = scrollDistance / (1000 / scrollSpeed);

  let scrolled = 0;

  const scrollInterval = setInterval(() => {
    window.scrollBy({
      top: scrollStep,
      left: 0,
      behavior: 'smooth',
    });
    scrolled += scrollStep;

    if (scrolled >= scrollDistance) {
      clearInterval(scrollInterval);
    }
  }, scrollSpeed);
}
