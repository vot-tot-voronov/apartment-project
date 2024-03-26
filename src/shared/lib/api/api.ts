import axios from 'axios';

export const $serviceApi = axios.create({
  baseURL: `${__API_URL__}/`,
});
