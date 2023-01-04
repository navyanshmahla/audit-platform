import axios from 'axios';
const BASE_URL = 'https://f0efa9e2505893.lhr.life';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});