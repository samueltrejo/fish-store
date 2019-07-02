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

const deleteOrder = orderId => axios.delete(`${databaseUrl}/orders/${orderId}.json`);

const postOrder = newOrder => axios.post(`${databaseUrl}/orders.json`, newOrder);

const editOrder = (orderId, updatedOrder) => axios.put(`${databaseUrl}/orders/${orderId}.json`, updatedOrder);

export default {
  getMyOrders,
  deleteOrder,
  postOrder,
  editOrder,
};
