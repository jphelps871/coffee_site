import { config } from '../config';
import { postData, getData } from './apiOptions';

export const auth = {
  register: (bodyData) => {
    return fetch(`${config.API_URL_USER}/register`, postData(bodyData));
  },

  login: (bodyData) => {
    return fetch(`${config.API_URL_USER}/login`, postData(bodyData));
  },

  logout: () => {
    return fetch(`${config.API_URL_USER}/logout`, getData());
  },

  loggedIn: () => {
    return fetch(`${config.API_ACCOUNT}`, {
      credentials: 'include',
    });
  },
};
