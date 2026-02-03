import axios from 'axios';

// Vite exposes env only via import.meta.env (VITE_*). process.env is not available in the browser.
const rawEnvUrl = import.meta.env.VITE_API_BASE_URL;
const envUrl = typeof rawEnvUrl === 'string' ? rawEnvUrl.trim().replace(/\/+$/, '') : '';
const isProduction = typeof window !== 'undefined' && window.location?.hostname !== 'localhost' && window.location?.hostname !== '127.0.0.1';
const productionBackend = 'https://kcareclinic-backend.onrender.com';
const API_BASE_URL = envUrl && !envUrl.includes('localhost')
  ? envUrl
  : isProduction
    ? productionBackend
    : 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
export { API_BASE_URL };

