import axios from 'axios';
const BASE_URL = 'https://5652211fd2998a.lhr.life';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});