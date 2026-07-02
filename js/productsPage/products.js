import { generateStars } from "./stars.js";



const productsContainer =
  document.getElementById("productsContainer");



function renderProducts(products) {

  productsContainer.innerHTML = "";

  products.forEach(([id, product]) => {

    productsContainer.innerHTML += `

      <div class="col-lg-4 col-sm-6 col-12 d-flex">

        <div class="card w-100 rounded-0 border-0">

          <div class="product-image">

            ${product.hasVideo ? `

              <video
                class="product-video card-img-top rounded-0"
                autoplay
                muted
                loop
                playsinline>

                <source
                  src="${product.video}"
                  type="video/mp4">

              </video>

              <img
                src="${product.hoverImage}"
                class="card-img-top hover-image rounded-0"
                alt="${product.name}">

            ` : `

              <img
                src="${product.mainImage}"
                class="card-img-top img-default rounded-0"
                alt="${product.name}">

              <img
                src="${product.hoverImage}"
                class="card-img-top img-hover rounded-0"
                alt="${product.name}">

            `}

          </div>

          <div class="card-body px-0 d-flex flex-column">

            <h5 class="card-title mb-3">
              ${product.name}
            </h5>

            <div class="d-flex align-items-center gap-3">

              <span class="text-secondary text-decoration-line-through">
                $${product.oldPrice}
              </span>

              <span class="text-success fw-semibold fs-6">
                $${product.price}
              </span>

            </div>

            <div class="d-flex align-items-center gap-2 mb-2">

              <span class="text-success fw-semibold fs-6">
                ${product.discountLabel}
              </span>

            </div>

            <div class="d-flex align-items-center gap-2 mb-3">

              <div class="text-warning d-flex gap-1">

                ${generateStars(product.rating)}

              </div>

              <span>
                (${product.reviewsCount} Reviews)
              </span>

            </div>

            <a
              href="./productDetails.html?id=${id}"
              class="btn bg-white w-100 rounded-0 py-2 fw-semibold mt-auto">

              SELECT OPTIONS

            </a>

          </div>

        </div>

      </div>

    `;

  });

}


export { renderProducts };