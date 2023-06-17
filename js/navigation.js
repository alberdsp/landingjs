// navigation.js
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const slider = document.querySelector(".slider");
const slides = Array.from(slider.querySelectorAll("img.slide"));
let currentSlide = 0;
let slideInterval;

// creamos una función que recorre las imágenes

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 3000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Iniciamos el slider
startSlider();
