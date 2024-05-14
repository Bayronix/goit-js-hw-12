import './js/pixabay-api';
import { fetchImageData } from './js/pixabay-api';
import './js/render-functions';
import {
  showNotification,
  updateUi,
  updateButtonUi,
  showLoader,
} from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.search-bar-form'),
  searchInput: document.querySelector('#search-bar'),
  searchButton: document.querySelector('button'),
  galleryList: document.querySelector('.gallery-list'),
  extensionButton: document.querySelector('.extentionButton'),
};

let userSearchRequestValue = '';

refs.searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  userSearchRequestValue = refs.searchInput.value.trim();
  if (userSearchRequestValue === '') {
    showNotification('Please enter a search term.');
    return;
  }

  showLoader(true);
  try {
    setTimeout(async () => {
      try {
        const images = await fetchImageData(userSearchRequestValue);
        updateUi(images);
        if (refs.galleryList.childElementCount <= 0) {
          showNotification('No images found.');
        }

        if (refs.extensionButton) {
          refs.extensionButton.classList.remove('extentionButton');
          refs.extensionButton.classList.add('div-button');
        }
      } catch (error) {
        console.error('Error fetching or updating images:', error);
        showNotification('An error occurred while fetching images.');
      } finally {
        showLoader(false);
      }
    }, 1000);
  } catch (error) {
    console.error('An unexpected error occurred.');
  }
});

refs.extensionButton.addEventListener('click', async () => {
  showLoader(true);
  try {
    setTimeout(async () => {
      try {
        const images = await fetchImageData(userSearchRequestValue);
        updateUi(images);
      } catch (error) {
        console.error('Error fetching or updating images:', error);
        showNotification('An error occurred while fetching images.');
      } finally {
        showLoader(false);
      }
    }, 1000);
  } catch (error) {
    console.error('An unexpected error occurred.');
  }
});
