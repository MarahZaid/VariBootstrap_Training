// firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getDatabase,
    ref,
    get
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


// get categories
const productsContainer = document.getElementById("productsContainer");

async function getCategories() {
    try {

        const snapshot = await get(ref(db, "categories"));

        if (snapshot.exists()) {

            const categories = snapshot.val();

            renderCategories(categories);

        }

    } catch (error) {
        console.log(error);
    }
}


// render categories
function renderCategories(categories) {

    productsContainer.innerHTML = "";

    Object.entries(categories).forEach(([id, category]) => {

        productsContainer.innerHTML += `

      <div
        class="product col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 d-flex flex-column justify-content-center align-items-center row-gap-4">

        <div class="product-img">
          <img src="${category.mainImage}" 
               alt="${category.name}" 
               class="w-100">
        </div>

        <div
          class="product-content gap-2 h-100 d-flex flex-column justify-content-center align-items-center text-center">

          <h6 class="fw-bold">${category.name}</h6>

          <p class="w-75">
            ${category.shortDescription}
          </p>

          <a href="./productsPage.html?category=${id}" 
             class="btn rounded-0 py-2 px-5 bg-white mt-auto fw-bold">
             SHOP NOW
          </a>

        </div>

      </div>

    `;
    });

}

getCategories();