import { fetchImageData } from './js/pixabay-api';
import { updateButtonUi } from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.search-bar-form'),
  searchInput: document.querySelector('#search-bar'),
  searchButton: document.querySelector('button'),
  galleryList: document.querySelector('.gallery-list'),
  extensionButton: document.querySelector('.extentionButton'),
};

let userSearchRequestValue = '';

refs.searchInput.addEventListener('input', event => {
  userSearchRequestValue = event.target.value;
});

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  fetchImageData(userSearchRequestValue);
});

refs.searchButton.addEventListener('click', async () => {
  if (!userSearchRequestValue) {
    return;
  }
  try {
    const images = await fetchImageData(userSearchRequestValue);
    updateButtonUi(images);

    setTimeout(() => {
      refs.extensionButton.classList.remove('extentionButton');
      refs.extensionButton.classList.add('div-button');
    }, 1000);
  } catch (error) {
    console.log(error);
  }
});

refs.extensionButton.addEventListener('click', async () => {
  try {
    const images = await fetchImageData(userSearchRequestValue);
    updateButtonUi(images);
  } catch (error) {
    console.log(error);
  }
});
