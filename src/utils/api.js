import axios from 'axios';

// All URLs from env only – never hardcode backend URL in source.
// Vite exposes env via import.meta.env (VITE_*). Set VITE_API_BASE_URL in production.
const rawEnvUrl = import.meta.env.VITE_API_BASE_URL;
const envUrl = typeof rawEnvUrl === 'string' ? rawEnvUrl.trim().replace(/\/+$/, '') : '';
const isLocalhost =
  typeof window !== 'undefined' &&
  (window.location?.hostname === 'localhost' || window.location?.hostname === '127.0.0.1');
const API_BASE_URL = envUrl || (isLocalhost ? 'http://localhost:3001' : '');

if (typeof window !== 'undefined' && !API_BASE_URL) {
  console.error(
    '[API] VITE_API_BASE_URL is not set. Set it in your build environment (e.g. Render Environment).'
  );
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
export { API_BASE_URL };

