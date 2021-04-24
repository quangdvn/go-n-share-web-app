import { reqConfig, gnsTripApi } from './instance-config';

export const searchTrip = async reqBody => {
  try {
    const res = await gnsTripApi.post('/trip/search', reqBody, reqConfig);
    return res.data.data;
  } catch (err) {
    alert(err.response.data.message);
    return null;
  }
};

export const bookingTrip = async reqBody => {
  try {
    const res = await gnsTripApi.post('/booking', reqBody, reqConfig);
    return res.data;
  } catch (err) {
    alert(err.response.data.message);
    return null;
  }
};
