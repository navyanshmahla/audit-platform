import axios from 'axios';
const BASE_URL = 'https://ad3a674ae016db.lhr.life';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});