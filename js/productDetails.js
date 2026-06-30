const container = document.getElementById("imagesContainer");
const images = document.querySelectorAll("#imagesContainer img");

const carouselElement = document.getElementById("carouselExampleIndicators");
const carousel = new bootstrap.Carousel(carouselElement);

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        carousel.to(index);

        setActiveThumbnail(index);
    });
});

carouselElement.addEventListener("slid.bs.carousel", (e) => {
    const activeIndex = e.to;
    setActiveThumbnail(activeIndex);
});

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

document.getElementById("downBtn").addEventListener("click", () => {
    container.scrollBy({ top: 129, behavior: "smooth" });
});

document.getElementById("upBtn").addEventListener("click", () => {
    container.scrollBy({ top: -129, behavior: "smooth" });
});


/***************************************************************** */


const drift = new Drift(document.querySelector('#mainImage'), {
    paneContainer: document.querySelector('.zoom-pane'),
    inlinePane: false,
    hoverBoundingBox: true,
    containInline: false
});
