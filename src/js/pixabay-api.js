import { showLoader, updateUi } from './render-functions';

export async function fetchImageData(searchRequest) {
  const urlOptions = {
    http: 'https://pixabay.com/api/',
    key: '43793393-3131be18ae161d81d2e9721c8',
    options: 'image_type=photo&orientation=horizontal&safesearch=true',
  };
  const apiRequestURL = `${urlOptions.http}?key=${urlOptions.key}&q=${searchRequest}`;
  const fullUrl = `${apiRequestURL}&${urlOptions.options}`;

  try {
    showLoader(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    const images = data.hits;
    updateUi(images);
  } catch (error) {
    console.error(error);
  } finally {
    showLoader(false);
  }
}
// api
