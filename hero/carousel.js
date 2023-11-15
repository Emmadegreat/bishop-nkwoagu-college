/*$(document).ready(function(){
  let currentIndex = 0;
  const totalSlides = $('.slide').length;

  $('.next').click(function(){
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  $('.prev').click(function(){
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1;
    }
    updateCarousel();
  });

  function updateCarousel() {
    const translateValue = -currentIndex * 100 + '%';
    $('.carousel').css('transform', 'translateX(' + translateValue + ')');
  }
});*/


$(document).ready(function () {
  const $carouselContainer = $('.slid-container');
  const $carouselSlides = $('.carousel-slide');
  const totalSlides = $carouselSlides.length;
  let currentIndex = 0;

  // Function to show the current slide
  function showSlide(index) {
    $carouselSlides.hide();
    $carouselSlides.eq(index).show();
  }

  // Function to handle automatic slide change
  function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  // Show the first slide initially
  showSlide(currentIndex);

  // Set an interval for automatic slide change (adjust the interval as needed)
  const intervalId = setInterval(autoSlide, 3000);

  // Button click events
  $('.prev').on('click', function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
    clearInterval(intervalId); // Stop automatic sliding on button click
  });

  $('.next').on('click', function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
    clearInterval(intervalId); // Stop automatic sliding on button click
  });
});
