// HERE API
import axios from 'axios';

const ID = `NUyqzp8vP0XJXLdB0AOr`;
const CODE = `zVE9cbGsvnRGDW1exKMuPw`;

export const getAddressFromLocation = (lat, lon) => {
  return axios(
    `https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=${lat}%2C${lon}%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=${ID}&app_code=${CODE}`
  )
    .then(res => res.data.Response.View[0].Result[0].Location.Address)
    .catch(error => {
      console.log(error);
    });
};
