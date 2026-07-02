import {
    ref,
    get
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

import { db } from "../firebase-config.js";

import { renderHero } from "./hero.js";

import { renderProducts } from "./products.js";

import { sortProducts } from "./sortProducts.js";

let currentProducts = [];



// URL params
const params = new URLSearchParams(window.location.search);

const categoryId = params.get("category");

const sortSelect =
  document.getElementById("sortProducts");



async function getCategoryData() {

    try {

        // category
        const categorySnapshot = await get(
            ref(db, `categories/${categoryId}`)
        );

        if (categorySnapshot.exists()) {

            const category = categorySnapshot.val();

            renderHero(category);

        }


        // products
        const productsSnapshot = await get(
            ref(db, "products")
        );

        if (productsSnapshot.exists()) {

            const allProducts = productsSnapshot.val();

            const filteredProducts =
                Object.entries(allProducts).filter(
                    ([id, product]) =>
                        product.categoryId === categoryId
                );

            currentProducts = filteredProducts;

            renderProducts(currentProducts);

        }

    } catch (error) {

        console.log(error);

    }

}

sortSelect.addEventListener("change", () => {

  const sorted =
    sortProducts(
      currentProducts,
      sortSelect.value
    );

  renderProducts(sorted);

});


getCategoryData();

