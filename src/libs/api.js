import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://3.34.4.60:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});
