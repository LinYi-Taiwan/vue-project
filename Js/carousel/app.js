const carouselSlide = document.querySelector(".carousel-slide");
const carouselImg = document.querySelectorAll(".carousel-slide img");

//button
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//counter
let counter = 0;
let testName = "tet";
const size = carouselImg[0].clientWidth;
// carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
    if (counter === carouselImg.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", () => {
    if (counter === 0) return;
    counter--;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
