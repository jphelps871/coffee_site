export const client = {
  register: (bodyData) => {
    return fetch('https://fast-lake-76721.herokuapp.com/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyData,
    });
  },
};
