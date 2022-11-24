import axios from 'axios';
const Instance = axios.create({
  baseURL: 'https://staging.vrda1.net',
  // timeout: 1000,
  // headers: {}
});

export {Instance};
