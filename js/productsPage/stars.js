function generateStars(rating) {

  let stars = "";

  for (let i = 1; i <= 5; i++) {

    if (i <= rating) {

      stars += `
        <i class="bi bi-star-fill"></i>
      `;

    } else {

      stars += `
        <i class="bi bi-star"></i>
      `;

    }

  }

  return stars;

}


export { generateStars };