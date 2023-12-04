import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://dcc21daysdev-production.up.railway.app',
});


instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers.Authorization = token;
  }
  if (config.method === 'post') {
    config.headers['Content-Type'] = 'application/json';
  }


  return config;
});

export default instance;
