import { config } from '../config';
import { getData } from './apiOptions';

export const get = {
    products: () => {
        return fetch(`${config.API_PRODUCTS}`, getData())
    }
}