$(document).ready(function () {

  // Header nav link
  function scrollTo(classOfName) {
    $('html, body').animate({
      scrollTop: $("." + classOfName).offset().top - 40
    }, 1000);
  }

  $('.navbar-list__link').on('click', function (e) {
    e.preventDefault();
    scrollTo($(this).attr('data-scroll'));
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
});