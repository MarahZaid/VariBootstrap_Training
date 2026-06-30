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