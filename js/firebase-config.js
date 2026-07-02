import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";


// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyB6_NfJhRKtFGLa-ylUnBFUFaHcosk0nTU",
    authDomain: "vari-website-1234.firebaseapp.com",
    databaseURL: "https://vari-website-1234-default-rtdb.firebaseio.com",
    projectId: "vari-website-1234",
    storageBucket: "vari-website-1234.firebasestorage.app",
    messagingSenderId: "635892488626",
    appId: "1:635892488626:web:5efdcd16bd26e64a0eecab",
    measurementId: "G-YK23SRYG1T"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);


// export database
export { db };