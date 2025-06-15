import axios from 'axios';

const pixabayKey = '50818292-28c953def5feac0614fc2706b';
const url = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: pixabayKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(url, { params }).then(response => {
    if (response.data.hits.length === 0) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    return response.data;
  });
}