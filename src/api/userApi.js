import axios from 'axios';

const API_BASE = 'https://jsonplaceholder.typicode.com'; 

export const getUsers = () => axios.get(`${API_BASE}/users`);
