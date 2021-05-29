import { config } from '../config';

export const client = {
  register: (bodyData) => {
    return fetch(`${config.API_URL_USER}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyData,
    });
  },
};
