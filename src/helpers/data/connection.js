import firebase from 'firebase/app';

import fbRef from '../fbconfig.json';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(fbRef.firebaseConfig);
  }
};

export default firebaseApp;
