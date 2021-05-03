import {
  reqConfig,
  gnsTripApi,
  weMapApi,
  gnsBookingApi,
} from './instance-config';

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
    const res = await gnsBookingApi.post('/booking', reqBody);
    alert(
      'Bạn đã đặt vé, vé sẽ được nhân viên xác nhận và liện hệ lại bạn trong khoảng thời gian sớm nhất.'
    );
    return res;
  } catch (err) {
    alert(err.response.data.message);
    return null;
  }
};

export const getCoordinates = async (address, postCode) => {
  try {
    const res = await weMapApi.post(
      `https://apis.wemap.asia/geocode-1/search?key=JsKGJWHJJxxENLWZGIBNOyTLPC&text=${address}&boundary.gid=${postCode}&size=1`,
      reqConfig
    );
    return res.data.features[0].geometry.coordinates;
  } catch (err) {
    console.log(err);
    return null;
  }
};
