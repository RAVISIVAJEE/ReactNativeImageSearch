import axios from 'axios';

const API_KEY =
  '0490b1ed2d2dc90b57e75af4debf82ccffe1f014e2dd9f1b44085d3c51400eb5';
const BASE_URL = 'https://serpapi.com/search';

export const fetchImages = async query => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        engine: 'google',
        q: query,
        tbm: 'isch',
        api_key: API_KEY,
      },
    });
    return response.data.images_results;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
