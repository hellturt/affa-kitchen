jQuery(document).ready(function ($) {
  // Smooth scroll to anchor
  $('a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    var target = $($(this).attr('href'));

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });

  // Gallery Carousel
  $(".gallery-container").owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 16,
    responsive: {
      0: {
        items: 2,
      },
      878: {
        items: 3,
      },
      1301: {
        items: 4,
      }
    }
  });
})