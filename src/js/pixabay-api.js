import axios from 'axios';
import { showLoader, updateUi } from './render-functions';

export let limit = 40;
export let pages = 1;
export const totalPages = Math.ceil(100 / limit);

export async function fetchImageData(searchRequest) {
  const urlOptions = {
    http: 'https://pixabay.com/api/',
    key: '43793393-3131be18ae161d81d2e9721c8',
    options: 'image_type=photo&orientation=horizontal&safesearch=true',
  };
  const params = {
    key: urlOptions.key,
    q: searchRequest,
    per_page: limit,
    page: pages,
    ...urlOptions.options, // Spread other options
  };
  try {
    showLoader(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await axios.get(urlOptions.http, { params });

    const { data } = response;
    const images = data.hits;
    updateUi(images);

    // Increment page for next request
    pages++;
  } catch (error) {
    console.error(error);
  } finally {
    showLoader(false);
  }
}

// api
