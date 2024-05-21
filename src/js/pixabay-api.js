import axios from 'axios';

export async function fetchImageData(searchRequest, page, limit = 15) {
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
    const totalPages = Math.ceil(data.totalHits / limit);
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }

    window.totalPages = totalPages;
  }
  return data.hits;
}
