// Import the functions you need from the SDKs you need
import { FirebaseOptions, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBnF_P3e_SvBcHABAvvC5aWp2n0vgNCLZ8",
  authDomain: "nigel-wheel.firebaseapp.com",
  projectId: "nigel-wheel",
  storageBucket: "nigel-wheel.appspot.com",
  messagingSenderId: "125907956219",
  appId: "1:125907956219:web:9520fe78b54b26b3119b5e"
};

const createFirebaseApp = (config: FirebaseOptions) => {
    try {
      return getApp();
    } catch {
      return initializeApp(config);
    }
  }

// Initialize Firebase
const firebaseapp = createFirebaseApp(firebaseConfig);
export const firebaseauth = getAuth(firebaseapp);