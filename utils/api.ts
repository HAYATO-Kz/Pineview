import axios from 'axios';

export const backendAPI = axios.create({
  baseURL: 'https://backendfinalendpoint.herokuapp.com',
});

export const geocodingAPI = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode',
});
