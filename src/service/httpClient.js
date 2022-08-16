import axios from 'axios';

const API_DEV = process.env.API_DEV;
const API_PRODUCT = process.env.API_PRODUCT;

const baseURL = process.env.NODE_ENV === 'development' ? API_DEV : API_PRODUCT;

const httpClient = axios.create({
	baseURL,
	withCredentials: true,
});

export default httpClient;
