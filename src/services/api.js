import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app-be-the-hero-api.herokuapp.com',
});

export default api;
