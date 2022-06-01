import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://13.209.22.56:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});
