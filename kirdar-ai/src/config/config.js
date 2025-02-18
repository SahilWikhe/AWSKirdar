// src/config/config.js
import { config } from './environment';

export const ENDPOINTS = {
  AUTH: {
    REGISTER: `${config.API_URL}/auth/register`,
    LOGIN: `${config.API_URL}/auth/login`,
    ME: `${config.API_URL}/auth/me`
  },
  USER: {
    QUESTIONNAIRE: `${config.API_URL}/user/questionnaire`,
    PROGRESS: `${config.API_URL}/user/progress`,
    SCENARIO: `${config.API_URL}/user/progress/scenario`
  }
};

export const API_CONFIG = {
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include'
};