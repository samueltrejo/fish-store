import axios from 'axios';
import fbref from '../fbconfig.json';

const databaseUrl = fbref.firebaseConfig.databaseURL;

const getFishes = () => new Promise((resolve, reject) => {
  axios.get(`${databaseUrl}/fishes.json`)
    .then((response) => {
      const fishes = [];
      Object.keys(response.data).forEach((fishId) => {
        response.data[fishId].id = fishId;
        fishes.push(response.data[fishId]);
      });
      resolve(fishes);
    })
    .catch(error => reject(error));
});

export default { getFishes };
