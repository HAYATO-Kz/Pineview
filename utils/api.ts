import axios from 'axios';

export const backendAPI = axios.create({
  baseURL: 'http://localhost:3000',
});

export const geocodingAPI = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode',
});
