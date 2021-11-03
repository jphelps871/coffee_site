const LOCALHOST = 'http://localhost:3001/api';
const HEROKU = 'https://fast-lake-76721.herokuapp.com/api';

const development = {
  API_URL_USER: `${LOCALHOST}/user`,
  API_ACCOUNT: `${LOCALHOST}/account`,
  API_PRODUCTS: `${LOCALHOST}/products`
};

const production = {
  API_URL_USER: `${HEROKU}/user`,
  API_ACCOUNT: `${HEROKU}/account`,
  API_PRODUCTS: `${HEROKU}/products`
};

export const config =
  process.env.NODE_ENV === 'development' ? development : production;
