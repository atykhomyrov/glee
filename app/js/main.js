$(function() {

  $('.product-related__list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).toggleClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content--active');
    $($(this).attr('href')).addClass('product-tabs__content--active');

  } );

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });

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

  $('.select-style, .product-item__quantity').styler();
  
  $(".star").rateYo({
    starWidth: "10px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>',
  });

  $(".product-card__star").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "15px",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>',
  });

  $(".product-item__star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "15px",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>',
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

  $('.blog-filter__posts-title').on('click', function(){
    $('.blog-filter__posts-list').slideToggle();
    $('.blog-filter__posts-title').toggleClass('blog-filter__posts-list--active');
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