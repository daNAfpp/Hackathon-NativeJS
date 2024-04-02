let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slidesCount = slides.length;

function showSlide(index) {
  if (index < 0) {
    currentSlide = slidesCount - 1;
  } else if (index >= slidesCount) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}
