$(function() {
  $('.menu__burger').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  });

  $('.footer__title-services').on('click', function(){
    $('.footer__list-services').slideToggle();
    $('.footer__title-services').toggleClass('footer__list-services--active');
  });
  $('.footer__title-account').on('click', function(){
    $('.footer__list-account').slideToggle();
    $('.footer__title-account').toggleClass('footer__list-account--active');
  });


  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  })

  $('.partners__list').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  })
  
  mixitup('.product-card__list');
  mixitup('.new-design__list')
});