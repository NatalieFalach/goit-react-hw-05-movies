import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '8b8b26a0b27e03ef23871d035772175e';

export async function getTrending(page = 1) {
  const { data: response } = await axios.get(`/trending/movie/day`, {
    params: {
      api_key: API_KEY,
      page: page,
    },
  });
  return response;
}

export async function getFilmById(id) {
  const { data: response } = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response;
}

export async function getCastById(id) {
  const { data: response } = await axios.get(`movie/${id}/credit`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response;
}

export async function getReviewsById(id) {
  const { data: response } = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response;
}

export async function getMovieBySearch(search) {
  const { data: response } = await axios.get(`search/movie`, {
    params: {
      api_key: API_KEY,
      query: search,
    },
  });
  return response;
}
