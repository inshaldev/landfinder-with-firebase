// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbtMuOSNJjlXf0_WngrNbdmS9sq2Aa4AU',
  authDomain: 'landfinder-app.firebaseapp.com',
  projectId: 'landfinder-app',
  storageBucket: 'landfinder-app.appspot.com',
  messagingSenderId: '771682747093',
  appId: '1:771682747093:web:d500cff9c99b8e1def585c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
