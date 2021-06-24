const LOCALHOST = 'http://localhost:3001/api';
const HEROKU = 'https://fast-lake-76721.herokuapp.com/api';

const development = {
  API_URL_USER: `${LOCALHOST}/user`,
  API_ACCOUNT: `${LOCALHOST}/account`,
};

const production = {
  API_URL_USER: `${HEROKU}/user`,
  API_ACCOUNT: `${HEROKU}/account`,
};

export const config =
  process.env.NODE_ENV === 'development' ? development : production;
