$(function(){
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
  mixitup('.products__list')
  mixitup('.new-design__list')
});