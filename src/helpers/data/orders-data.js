import axios from 'axios';
import fbref from '../fbconfig.json';

const databaseUrl = fbref.firebaseConfig.databaseURL;

const getMyOrders = uid => new Promise((resolve, reject) => {
  axios.get(`${databaseUrl}/orders.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const orders = [];
      Object.keys(response.data).forEach((orderId) => {
        response.data[orderId].id = orderId;
        orders.push(response.data[orderId]);
      });
      resolve(orders);
    })
    .catch(error => reject(error));
});

export default { getMyOrders };