const development = {
  API_URL: 'http://localhost:3001/api',
  API_URL_USER: 'http://localhost:3001/api/user',
};

const production = {
  API_URL: 'https://fast-lake-76721.herokuapp.com/api',
  API_URL_USER: 'https://fast-lake-76721.herokuapp.com/api/user',
};

export const config =
  process.env.NODE_ENV === 'development' ? development : production;
