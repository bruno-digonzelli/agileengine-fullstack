import axios from 'axios';
import CONSTANTS from '../constants';

const { BACKEND_API_URL_DEV, BACKEND_API_URL } = CONSTANTS;

const API_URL =
  process.env.NODE_ENV === 'development'
    ? {
        baseURL: BACKEND_API_URL_DEV,
      }
    : {
        baseURL: BACKEND_API_URL,
      };

const axiosClient = axios.create(API_URL);

export default axiosClient;