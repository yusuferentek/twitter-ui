import axios from 'axios';

// User
export const userApi = axios.create({
  baseURL: 'https://localhost:44331/Auth',
  timeout: 5000,
});

// Mention
export const mentionApi = axios.create({
  baseURL: 'https://localhost:44331/Mention',
  timeout: 5000,
});