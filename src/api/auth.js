import { config } from '../config';

const formOptions = (data) => {
  return {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  };
};

export const auth = {
  register: (bodyData) => {
    return fetch(`${config.API_URL_USER}/register`, formOptions(bodyData));
  },

  login: (bodyData) => {
    return fetch(`${config.API_URL_USER}/login`, formOptions(bodyData));
  },

  logout: () => {
    return fetch(`${config.API_URL_USER}/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  loggedIn: () => {
    return fetch(`${config.API_ACCOUNT}`, {
      credentials: 'include',
    });
  },
};
