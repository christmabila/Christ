
const slider = document.getElementById("slider");
const leftContainer = document.querySelector(".btn__container__left");
const rightContainer = document.querySelector(".btn__container__right");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

function getSlideStep() {
  const slide = slider.querySelector(".slide");
  const style = getComputedStyle(slide);
  const gap = parseInt(getComputedStyle(slider).columnGap || style.marginRight || 16);
  return slide.offsetWidth + gap;
}

function getLeftBtnWidth() {
  return leftContainer.offsetWidth;
}

function getTotalSlides() {
  return slider.querySelectorAll(".slide").length;
}

function getCurrentSlideIndex() {
  const leftOffset = getLeftBtnWidth();
  const step = getSlideStep();
  return Math.round((slider.scrollLeft + leftOffset) / step);
}

function scrollToSlide(index) {
  const step = getSlideStep();
  const leftOffset = getLeftBtnWidth();
  const maxIndex = getTotalSlides() - 1;

  // Clamp to available slides
  const clampedIndex = Math.max(0, Math.min(index, maxIndex));
  const targetScroll = clampedIndex * step - leftOffset;

  slider.scrollTo({ left: targetScroll, behavior: "smooth" });
  setTimeout(updateButtons, 300);
}

function scrollRight() {
  const currentIndex = getCurrentSlideIndex();
  scrollToSlide(currentIndex + 2);
}

function scrollLeft() {
  const currentIndex = getCurrentSlideIndex();
  scrollToSlide(currentIndex - 2);
}

function updateButtons() {
  const scrollLeft = Math.round(slider.scrollLeft);
  const maxScroll = slider.scrollWidth - slider.clientWidth;

  if (scrollLeft <= 0) {
    leftContainer.classList.add("hidden");
  } else {
    leftContainer.classList.remove("hidden");
  }

  if (scrollLeft >= maxScroll - 1) {
    rightContainer.classList.add("hidden");
  } else {
    rightContainer.classList.remove("hidden");
  }
}

rightBtn.addEventListener("click", scrollRight);
leftBtn.addEventListener("click", scrollLeft);
slider.addEventListener("scroll", updateButtons);
window.addEventListener("load", updateButtons);
window.addEventListener("resize", updateButtons);