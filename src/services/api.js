import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://ec2-3-93-3-19.compute-1.amazonaws.com/',
});
