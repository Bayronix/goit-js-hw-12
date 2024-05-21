import axios from 'axios';

export let limit = 15;
export let page = 1;
export let totalPages = 0;

export async function fetchImageData(searchRequest, page) {
  const urlOptions = {
    http: 'https://pixabay.com/api/',
    key: '43793393-3131be18ae161d81d2e9721c8',
    options: 'image_type=photo&orientation=horizontal&safesearch=true',
  };

  const params = {
    key: urlOptions.key,
    q: searchRequest,
    per_page: limit,
    page: page,
    ...Object.fromEntries(new URLSearchParams(urlOptions.options)),
  };

  const { data } = await axios.get(urlOptions.http, { params });
  if (data.totalHits) {
    totalPages = Math.ceil(data.totalHits / limit);
  }
  return data.hits;
}
