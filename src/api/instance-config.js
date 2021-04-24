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

export const weMapApi = axios.create({
  baseURL:
    'https://apis.wemap.asia/geocode-1/search?key=JsKGJWHJJxxENLWZGIBNOyTLPC&text=Bến xe mỹ đình&boundary.gid=18470000&size=1',
});
