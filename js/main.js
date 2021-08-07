$(document).ready(function () {

  // Header nav link
  function scrollTo(classOfName) {
    $('html, body').animate({
      scrollTop: $("." + classOfName).offset().top - 90
    }, 1500);
  }

  $('.nav-list__link').on('click', function (e) {
    e.preventDefault();
    if ($('.navbar-burger').attr('data-burger') == 'close') {
      burgerClose();

      setTimeout(function () {
        scrollTo($(e.target).attr('data-scroll'));
      }, 1000);
    } else if ($('.navbar-burger').attr('data-burger') == 'open') {
      scrollTo($(e.target).attr('data-scroll'));
    }
  });

  // Modal
  function openModal() {
    $('.modal__overlay').addClass('modal__overlay--visible');
    $('.modal__dialog').addClass('modal__dialog--visible');

    $('.modal__close').removeClass('modal__close--hidden');
  }

  function closeModal(event) {
    $('.modal__overlay').removeClass('modal__overlay--visible');
    $('.modal__overlay').addClass('modal__overlay--hidden');

    $('.modal__close').addClass('modal__close--hidden');

    setTimeout(function () {
      $('.modal__dialog').removeClass('modal__dialog--visible');
      $('.modal__dialog').addClass('modal__dialog--hidden');
    }, 500);
  }

  $(document).on('click', function (event) {
    if ($(event.target).attr('data-open') == 'modal') {
      openModal();
    } else if ($(event.target).attr('data-close') == 'modal') {
      closeModal();
    }
  });

  $('.footer-social__list-link').on('click', function (event) {
    event.preventDefault();
    openModal();
  });

  $(document).on('keydown', function (event) {
    if (event.keyCode == 27) {
      closeModal(event);
    }
  });

  $(document).on('click', function (event) {
    $.each(event.target.classList, function (i, key) {
      if (key == "modal__overlay--visible") {
        closeModal(event);
      }
    });
  });

  // Validate
  $(".modal__form").validate({
    errorClass: "validate-error",
    messages: {
      theme: "Пожалуйста, выберите тему!",
      message: {
        required: "Напишите нам сообщение..",
      },
      email: {
        required: "Напишите email адрес.",
        email: "Формат для email адреса - name@domain.com",
      },
      checkbox: {
        required: 'Поставьте галочку',
      },
    },
  });

  $(".footer-newsletter__form").validate({
    errorClass: "footer-newsletter__validate-error",
    messages: {
      newsletter: {
        required: "Напишите email адрес.",
        email: "Формат для email адреса - name@domain.com",
      },
    },
  });

  $('.modal-checkbox__input').on('click', function (e) {
    if ($('.modal-checkbox__input').is(":checked")) {
      $('.modal-checkbox__label').addClass('modal-checkbox__label--active');
    } else {
      $('.modal-checkbox__label').removeClass('modal-checkbox__label--active');
    }
  });

  // Fix many message *fast press button


  $('.modal__send').on('click', function () {
    setTimeout(function () {
      $('.modal__send').attr("disabled", "disabled");
    }, 50);

    setTimeout(function () {
      $('.modal__send').removeAttr("disabled");
    }, 5000);
  });

  $('.footer-newsletter__button').on('click', function () {
    setTimeout(function () {
      $('.footer-newsletter__button').attr("disabled", "disabled");
    }, 50);

    setTimeout(function () {
      $('.footer-newsletter__button').removeAttr("disabled");
    }, 5000);
  });


  // Burger
  $('.navbar-burger').on('click', function () {
    if ($(this).attr('data-burger') == 'open') {
      burgerOpen();
    } else if ($(this).attr('data-burger') == 'close') {
      burgerClose();
    }
  });

  function burgerOpen() {
    if ($('body').css("overflow") == "hidden") {
      $('body').css({
        "overflow": "auto"
      });
    } else {
      $('body').css({
        "overflow": "hidden"
      });
    }

    // 


    $('.navbar-burger__item').addClass('navbar-burger__item--active');

    $('.navbar-burger__item').removeClass('navbar-burger__item--hidden');

    // 

    $('.burger-modal').addClass('burger-modal--visible');
    $('.burger-modal').removeClass('burger-modal--hidden');

    // 

    $('.navbar-burger').attr('data-burger', 'close');
  }

  function burgerClose() {
    if ($('body').css("overflow") == "hidden") {
      $('body').css({
        "overflow": "auto"
      });
    } else {
      $('body').css({
        "overflow": "hidden"
      });
    }

    // 

    $('.navbar-burger__item').removeClass('navbar-burger__item--active');

    $('.navbar-burger__item').addClass('navbar-burger__item--hidden');

    // 

    setTimeout(function () {
      $('.burger-modal').removeClass('burger-modal--visible');
      $('.burger-modal').addClass('burger-modal--hidden');
    }, 500);

    // 

    $('.navbar-burger').attr('data-burger', 'open');
  }

  // Tabs
  $('.tabs-button__item').on('click', function () {
    var tabsNumber = $(this).attr('data-tabs');

    $('.tabs-item').each(function () {
      $(this).removeClass('tabs-item--visible');
      $(this).addClass('tabs-item--hidden');

      if ($(this).attr('data-tabs') == tabsNumber) {
        $(this).removeClass('tabs-item--hidden');
        $(this).addClass('tabs-item--visible');
      }
    });

    $('.tabs-button__item').each(function () {
      $(this).removeClass('tabs-button__item--active');

      if ($(this).attr('data-tabs') == tabsNumber) {
        $(this).addClass('tabs-button__item--active');
      }
    });
  });

  // Favorite button
  $('.favorite').on('click', function (e) {

    if ($(this).attr('data-favorite') == 'normal') {
      $(this).attr('src', 'img/favorite-red.svg');
      $(this).attr('data-favorite', 'red');
      e.preventDefault();
    } else {
      $(this).attr('src', 'img/favorite.svg');
      $(this).attr('data-favorite', 'normal');
      e.preventDefault();
    }
  });

  // Slider in articles-popular
  var hotelSlider = new Swiper('.articles-popular__slider', {

    // Optional parameters
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    autoplay: {
      delay: 5000,
    },

    simulateTouch: false,
  });

  // Slider in Article
  var articleSlider = new Swiper('.article__slider-container', {

    // Optional parameters
    loop: true,

    keyboard: {
      enabled: true,
    },

    navigation: {
      nextEl: '.article__slider-button--next',
      prevEl: '.article__slider-button--prev',
    },

    simulateTouch: false,
  });

  // Arrow Up Scroll
  $(document).on('scroll', function () {
    if ($('html, body').scrollTop() > 1600) {
      if ($('.arrow-up').css('display') == 'none') {
        $('.arrow-up').fadeIn(700);
      } else {

      }
    } else {
      if ($('.arrow-up').css('display') != 'none') {
        $('.arrow-up').fadeOut(700);
      } else {

      }

    }
  });

  $('.arrow-up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  });
});