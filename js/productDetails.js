const container = document.getElementById("imagesContainer");
const images = document.querySelectorAll("#imagesContainer img");

const carouselElement = document.getElementById("carouselExampleIndicators");
const carousel = new bootstrap.Carousel(carouselElement);

let drift;


// thumbnails click
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        carousel.to(index);
        setActiveThumbnail(index);
    });
});


// carousel change
carouselElement.addEventListener("slid.bs.carousel", (e) => {

    setActiveThumbnail(e.to);
    const activeImage = document.querySelector(
        ".carousel-item.active img"
    );

});


// active thumbnail
function setActiveThumbnail(index) {

    images.forEach(img => img.classList.remove("active-img"));

    const activeImg = images[index];

    activeImg.classList.add("active-img");

    const containerTop = container.getBoundingClientRect().top;
    const imgTop = activeImg.getBoundingClientRect().top;

    container.scrollBy({
        top: imgTop - containerTop - 20,
        behavior: "smooth"
    });
}


// buttons
document.getElementById("downBtn").addEventListener("click", () => {
    container.scrollBy({
        top: 129,
        behavior: "smooth"
    });
});

document.getElementById("upBtn").addEventListener("click", () => {
    container.scrollBy({
        top: -129,
        behavior: "smooth"
    });
});


// ===== DRIFT =====

const carouselImages = document.querySelectorAll(".carousel-item img");

carouselImages.forEach((img) => {

    new Drift(img, {
        paneContainer: document.querySelector(".zoom-pane"),
        inlinePane: false,
        hoverBoundingBox: true
    });

});

/********************************************************* */
 const slider = document.getElementById("reviewSlider");

    document.getElementById("nextBtn").onclick = () => {
        slider.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    }

    document.getElementById("prevBtn").onclick = () => {
        slider.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    }

    
/*************************************************************** */
const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("ratingValue");

stars.forEach(star => {
    star.addEventListener("click", function () {

        let value = this.dataset.value;
        ratingInput.value = value;

        stars.forEach(s => {
            if (s.dataset.value <= value) {
                s.classList.remove("bi-star");
                s.classList.add("bi-star-fill", "active");
            } else {
                s.classList.remove("bi-star-fill", "active");
                s.classList.add("bi-star");
            }
        });

    });
});