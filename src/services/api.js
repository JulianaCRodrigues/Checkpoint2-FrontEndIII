import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dhodonto.ctd.academy/swagger-ui/index.html'
});