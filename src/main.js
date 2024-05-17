import './js/pixabay-api';
import { fetchImageData } from './js/pixabay-api';
import './js/render-functions';
import {
  showNotification,
  updateUi,
  updateButtonUi,
  showLoader,
  updateNewUi,
} from './js/render-functions';

export const refs = {
  searchForm: document.querySelector('.search-bar-form'),
  searchInput: document.querySelector('#search-bar'),
  searchButton: document.querySelector('button'),
  galleryList: document.querySelector('.gallery-list'),
  extensionButton: document.querySelector('.extentionButton'),
};

let userSearchRequestValue = '';
export let currentPage = 1;

refs.searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  userSearchRequestValue = refs.searchInput.value.trim();
  currentPage = 1;
  if (userSearchRequestValue === '') {
    showNotification('Please enter a search term.');
    return;
  }

  showLoader(true);
  setTimeout(async () => {
    try {
      const images = await fetchImageData(userSearchRequestValue, currentPage);
      updateUi(images);
      if (refs.galleryList.childElementCount <= 0) {
        showNotification('No images found.');
        refs.extensionButton.classList.remove('extentionButton');
      }

      if (refs.extensionButton) {
        refs.extensionButton.classList.remove('extentionButton');
        refs.extensionButton.classList.add('div-button');
      }
    } catch (error) {
      console.error('Error fetching or updating images:', error);
      showNotification('An error occurred while fetching images.');
      refs.extensionButton.remove();
    } finally {
      showLoader(false);
    }
  }, 1000);
});

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
          currentPage
        );
        updateNewUi(images);
        updateButtonUi();
      } catch (error) {
        console.error('Error fetching or updating images:', error);
      } finally {
        showLoader(false);
      }
    }, 1000);
  });
}
