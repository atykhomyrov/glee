$(function() {

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active')
  });

  $('.button-list').on('click', function () {
    $('.product-card').addClass('product-card--list')
  });

  $('.button-grid').on('click', function () {
    $('.product-card').removeClass('product-card--list')
  });

  $('.select-style').styler();
  
  $(".star").rateYo({
    starWidth: "10px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    readOnly: true,
  });

  $(".product-card__star").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "15px",
    readOnly: true,
  });

  $('.shop-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.shop-price__range-from').text(data.from);
      $('.shop-price__range-to').text(data.to);
    },
    onChange: function (data) {
      $('.shop-price__range-from').text(data.from);
      $('.shop-price__range-to').text(data.to);
    },
  });

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

  $('.shop__title--recent').on('click', function(){
    $('.shop-recent__list').slideToggle();
    $('.shop__title--recent').toggleClass('shop-recent__list--active');
  });

  $('.shop__title--brand').on('click', function(){
    $('.shop-brand__form').slideToggle();
    $('.shop__title--brand').toggleClass('shop-brand__form--active');
  });

  $('.shop__title--price').on('click', function(){
    $('.shop-price__form').slideToggle();
    $('.shop__title--price').toggleClass('shop-price__form--active');
  });

  $('.shop-category__title').on('click', function(){
    $('.shop-category__form').slideToggle();
    $('.shop-category__title').toggleClass('shop-category__form--active');
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
  
  mixitup('.products__list');
  mixitup('.new-design__list');
});