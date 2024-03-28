import axios from 'axios';

import { USER_INFO_LOCALSTORAGE_KEY } from '@/shared/constants';

export const $serviceApi = axios.create({
  baseURL: `${__API_URL__}/`,
  headers: {
    Authorization: localStorage.getItem(USER_INFO_LOCALSTORAGE_KEY) || '',
  },
});
