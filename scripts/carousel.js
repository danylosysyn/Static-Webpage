const sliderEl = document.querySelector('.slider');

sliderEl.addEventListener('afterChange', function(e) {
  console.log(e.detail.currentSlide);
});

const slider = new A11YSlider(sliderEl, {
    infinite: true,
    centerMode: true
});