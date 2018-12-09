import axios from 'axios';


const api = axios.create({
  baseURL: '/api/',
  headers: {
    common: {
      Authorization: setHeader()
    }
  }
});

export function setHeader() {
  if (JSON.parse(localStorage.getItem('user'))) {
    return JSON.parse(localStorage.getItem('user')).token
  } else {
    return null
  }
}

export default api;
