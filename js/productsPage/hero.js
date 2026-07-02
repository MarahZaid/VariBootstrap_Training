const heroTitle =
  document.getElementById("heroTitle");

const heroDescription =
  document.getElementById("heroDescription");

const heroImage =
  document.getElementById("heroImage");



function renderHero(category) {

  heroTitle.textContent =
    category.PLPName;

  heroDescription.textContent =
    category.description;

  heroImage.src =
    category.heroImage;

}


export { renderHero };