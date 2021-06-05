import { config } from '../config';

const formOptions = (data) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  };
};

export const client = {
  register: (bodyData) => {
    return fetch(`${config.API_URL_USER}/register`, formOptions(bodyData));
  },

  login: (bodyData) => {
    return fetch(`${config.API_URL_USER}/login`, formOptions(bodyData));
  },
};
