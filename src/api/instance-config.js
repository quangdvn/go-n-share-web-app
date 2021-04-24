import axios from 'axios';

export const reqConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const gnsTripApi = axios.create({
  baseURL: 'https://www.gns.quangdvn.me/api/trip',
});

export const gnsBookingApi = axios.create({
  baseURL: 'https://www.gns.quangdvn.me/api/booking',
});
