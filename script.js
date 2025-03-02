// Slider Part
let currentSlide = 0;
const slides = document.querySelectorAll(".slide"); // get all slides
const prevButton = document.querySelector(".prev"); // get prev button
const nextButton = document.querySelector(".next"); // get next button

// show slide by index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index); // toggle active class
  });
}

// next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // get next slide index
  showSlide(currentSlide);
}
// prev slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // get prev slide index
  showSlide(currentSlide);
}

prevButton.addEventListener("click", prevSlide); // add event listener to prev button
nextButton.addEventListener("click", nextSlide); // add event listener to next button

showSlide(currentSlide); // show initial slide

// Fade in effect for steps cards
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step"); // get all steps
  steps.forEach((step, index) => {
    setTimeout(() => {
      step.style.opacity = "1";
      step.style.transform = "translateY(0)";
    }, index * 500); // delay each step by 500 ms
  });
});

// Hover effect for images
document.querySelectorAll(".hoverImage").forEach((img) => {
  img.addEventListener("mouseover", function () {
    this.src = this.getAttribute("data-hover"); // Change to GIF
  });

  img.addEventListener("mouseout", function () {
    this.src = this.getAttribute("data-original"); // Change back to original
  });
});
