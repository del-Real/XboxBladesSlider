// Get slider
const sliderWrapper = document.getElementById("slider-wrapper");
const slide = document.querySelector(".slide");

// Slide-buttons array
const slideButtons = Array.from(document.querySelectorAll(".slider-button"));
const leftButtons = document.querySelector(".left-slider-buttons");
const rightButtons = document.querySelector(".right-slider-buttons");

let currentIndex = 2;
switchSlide(currentIndex);

// Add an event listener to each button
slideButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    let newIndex = index - currentIndex;
    moveButtons(index);
    switchSlide(newIndex);
    currentIndex = index;
  });
});

// Move buttons to left/right by index
function moveButtons(index) {
  // Clear both divs before appending
  leftButtons.innerHTML = "";
  rightButtons.innerHTML = "";

  // Move buttons to leftButtons div
  for (let i = 0; i <= index; i++) {
    leftButtons.appendChild(slideButtons[i]);
  }

  // Move buttons to rightButtons div
  for (let i = index + 1; i < slideButtons.length; i++) {
    rightButtons.appendChild(slideButtons[i]);
  }
}

// Move slide
function switchSlide(newIndex) {
  const slideWidth = slide.offsetWidth;
  sliderWrapper.scrollLeft += slideWidth * newIndex;
}
