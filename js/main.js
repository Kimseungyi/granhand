
//스크롤 되면 애니메이션 작동
new WOW().init();


$('.arrow').click(function () {
  $('.lang').slideToggle(500);
});

//위 버튼 스크롤시 투명도 1
$(window).scroll(function () {
  $('.Button').css('opacity', 1 + $(window).scrollTop() / 500);
});

//헤더 스크롤시 색변화
$(window).scroll(function () {
  //스크롤이 되면
  $('header').addClass('scroll');

  if ($(window).scrollTop() == 0) {
    $('header').removeClass('scroll');
  }
});

//swiper
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  // init: false,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
});

var swiper = new Swiper('.mySwiper02', {
  autoplay: {
    delay: 2800,
    loop: true,
  },
});

//햄버거 버튼
$('.trigger').click(function () {
  $(this).toggleClass('open');

  if ($(this).hasClass('open')) {
    $('.sub_wrap').animate({ right: 0 }, 200);
  } else {
    $('.sub_wrap').animate({ right: -300 }, 200);
  }
});

