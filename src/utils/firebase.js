import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB_E_ZCdNCZg-IZpPwXWsE-QKieziEXRjA',
  authDomain: 'zynthera-2f111.firebaseapp.com',
  projectId: 'zynthera-2f111',
  storageBucket: 'zynthera-2f111.firebasestorage.app',
  messagingSenderId: '778237852125',
  appId: '1:778237852125:web:057670aad738708f419e34'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);