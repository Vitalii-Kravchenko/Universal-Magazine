$(document).ready(function () {

  setTimeout(function () {
    $('head').append('<link rel="stylesheet" href="css/fonts.css" />');
  }, 200);

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
    var bodyWidth = $('body').width();

    $('.modal__overlay').addClass('modal__overlay--visible');
    $('.modal__dialog').addClass('modal__dialog--visible');

    $('.modal__close').removeClass('modal__close--hidden');

    if ($('body').css('overflow') != 'hidden') {
      $('body').css('overflow', 'hidden');
    }

    var bodyWidthOverflow = $('body').width();
    var width = (bodyWidthOverflow - bodyWidth);
    var navbarContainer = $('.navbar__hero--transform').width();

    $('header').css({
      'padding-right': width
    });

    $('.navbar__hero--transform').css({
      'left': '0',
      'transform': 'translateX(' + (((bodyWidth - navbarContainer) / 2)) + 'px)'
    });

    $('section').css({
      'padding-right': width
    });

    $('footer').css({
      'padding-right': width
    });
  }

  function closeModal(event) {
    $('.modal__overlay').removeClass('modal__overlay--visible');
    $('.modal__overlay').addClass('modal__overlay--hidden');

    $('.modal__close').addClass('modal__close--hidden');

    setTimeout(function () {
      if ($('body').css('overflow') == 'hidden') {
        $('body').css('overflow', 'auto');
      }

      $('header').css({
        'padding-right': 0
      });

      $('.navbar__hero--transform').css({
        'left': '50%',
        'transform': 'translateX(-50%)'
      });

      $('section').css({
        'padding-right': 0
      });

      $('footer').css({
        'padding-right': 0
      });
    }, 1100);

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

  $(".comments-form").validate({
    errorClass: "comments-form__validate-error",
    messages: {
      comment: {
        required: "Напишите нам сообщение..",
        minlength: "Минимальная длина символов - 100",
      },
    },
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

  $('.comments-form__button').on('click', function () {
    setTimeout(function () {
      $('.comments-form__button').attr("disabled", "disabled");
    }, 50);

    setTimeout(function () {
      $('.comments-form__button').removeAttr("disabled");
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

  // Scroll to comment
  $('.comments-top__add-comment').on('click', function (e) {
    e.preventDefault();
    var top = $('.comments-bottom').offset().top - 115;
    $('html, body').animate({
      scrollTop: top
    }, 1000);
  });

  // Show cards
  $('.comments-loading').on('click', function () {
    var heightCards = $('.comments-cards').height();

    var counterNotVisibleCard = 0;
    var notVisibleCard = [];

    var newHeightCards = heightCards;

    $('.comments-cards__item').each(function (i, key) {
      if ($(key).is(':hidden')) {
        counterNotVisibleCard++;

        notVisibleCard.push(key);
      }
    });

    function showCard(counter) {
      console.log(heightCards);
      for (var i = 0; i < counter; i++) {
        $(notVisibleCard[i]).css('display', 'flex');
        newHeightCards += $(notVisibleCard[i]).outerHeight(true);
        console.log(newHeightCards);
      }

      $('.comments-cards').height(heightCards);

      $('.comments-cards').animate({
        height: newHeightCards
      }, 1000);

      $('.comments-loading__img').addClass('comments-loading__img--rotate');

      setTimeout(function () {
        $('.comments-loading__img').removeClass('comments-loading__img--rotate');
      }, 2000);
    }


    if (counterNotVisibleCard % 3 == 0 || counterNotVisibleCard >= 3) {
      showCard(3);
    } else if (counterNotVisibleCard % 2 == 0 || counterNotVisibleCard >= 2) {
      showCard(2);
    } else if (counterNotVisibleCard % 1 == 0 || counterNotVisibleCard >= 1) {
      showCard(1);
    } else {

    }
  });

  // Counter symbol
  $('.comments-form__area').on('keyup', function () {

    if ($('#comment-error').css('display') == 'block') {
      $('.comments-form__counter').css('display', 'block');

      var length = 100 - this.value.length;

      if (length >= 0) {
        $('.comments-form__counter').text(length);
      } else {

      }

      if (length <= 0) {
        $('.comments-form__counter').css('display', 'none');
      } else {

      }

      if (length < 99) {
        $('#comment-error').css('opacity', '0');
      } else {
        $('#comment-error').css('opacity', '1');
      }

    } else {

    }

  });


  // Paralax

  setTimeout(function () {
    /*!
     * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
     * @copyright 2016 PixelCog, Inc.
     * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
     */

    ;
    (function ($, window, document, undefined) {

      // Polyfill for requestAnimationFrame
      // via: https://gist.github.com/paulirish/1579671

      (function () {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
          window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
          window.requestAnimationFrame = function (callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
              },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
          };

        if (!window.cancelAnimationFrame)
          window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
          };
      }());


      // Parallax Constructor

      function Parallax(element, options) {
        var self = this;

        if (typeof options == 'object') {
          delete options.refresh;
          delete options.render;
          $.extend(this, options);
        }

        this.$element = $(element);

        if (!this.imageSrc && this.$element.is('img')) {
          this.imageSrc = this.$element.attr('src');
        }

        var positions = (this.position + '').toLowerCase().match(/\S+/g) || [];

        if (positions.length < 1) {
          positions.push('center');
        }
        if (positions.length == 1) {
          positions.push(positions[0]);
        }

        if (positions[0] == 'top' || positions[0] == 'bottom' || positions[1] == 'left' || positions[1] == 'right') {
          positions = [positions[1], positions[0]];
        }

        if (this.positionX !== undefined) positions[0] = this.positionX.toLowerCase();
        if (this.positionY !== undefined) positions[1] = this.positionY.toLowerCase();

        self.positionX = positions[0];
        self.positionY = positions[1];

        if (this.positionX != 'left' && this.positionX != 'right') {
          if (isNaN(parseInt(this.positionX))) {
            this.positionX = 'center';
          } else {
            this.positionX = parseInt(this.positionX);
          }
        }

        if (this.positionY != 'top' && this.positionY != 'bottom') {
          if (isNaN(parseInt(this.positionY))) {
            this.positionY = 'center';
          } else {
            this.positionY = parseInt(this.positionY);
          }
        }

        this.position =
          this.positionX + (isNaN(this.positionX) ? '' : 'px') + ' ' +
          this.positionY + (isNaN(this.positionY) ? '' : 'px');

        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
          if (this.imageSrc && this.iosFix && !this.$element.is('img')) {
            this.$element.css({
              backgroundImage: 'url(' + this.imageSrc + ')',
              backgroundSize: 'cover',
              backgroundPosition: this.position
            });
          }
          return this;
        }

        if (navigator.userAgent.match(/(Android)/)) {
          if (this.imageSrc && this.androidFix && !this.$element.is('img')) {
            this.$element.css({
              backgroundImage: 'url(' + this.imageSrc + ')',
              backgroundSize: 'cover',
              backgroundPosition: this.position
            });
          }
          return this;
        }

        this.$mirror = $('<div />').prependTo(this.mirrorContainer);

        var slider = this.$element.find('>.parallax-slider');
        var sliderExisted = false;

        if (slider.length == 0)
          this.$slider = $('<img />').prependTo(this.$mirror);
        else {
          this.$slider = slider.prependTo(this.$mirror)
          sliderExisted = true;
        }

        this.$mirror.addClass('parallax-mirror').css({
          visibility: 'hidden',
          zIndex: this.zIndex,
          position: 'fixed',
          top: 0,
          left: 0,
          overflow: 'hidden'
        });

        this.$slider.addClass('parallax-slider').one('load', function () {
          if (!self.naturalHeight || !self.naturalWidth) {
            self.naturalHeight = this.naturalHeight || this.height || 1;
            self.naturalWidth = this.naturalWidth || this.width || 1;
          }
          self.aspectRatio = self.naturalWidth / self.naturalHeight;

          Parallax.isSetup || Parallax.setup();
          Parallax.sliders.push(self);
          Parallax.isFresh = false;
          Parallax.requestRender();
        });

        if (!sliderExisted)
          this.$slider[0].src = this.imageSrc;

        if (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || slider.length > 0) {
          this.$slider.trigger('load');
        }

      }


      // Parallax Instance Methods

      $.extend(Parallax.prototype, {
        speed: 0.2,
        bleed: 0,
        zIndex: -100,
        iosFix: true,
        androidFix: true,
        position: 'center',
        overScrollFix: false,
        mirrorContainer: 'body',

        refresh: function () {
          this.boxWidth = this.$element.outerWidth();
          this.boxHeight = this.$element.outerHeight() + this.bleed * 2;
          this.boxOffsetTop = this.$element.offset().top - this.bleed;
          this.boxOffsetLeft = this.$element.offset().left;
          this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

          var winHeight = Parallax.winHeight;
          var docHeight = Parallax.docHeight;
          var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
          var minOffset = Math.max(this.boxOffsetTop + this.boxHeight - winHeight, 0);
          var imageHeightMin = this.boxHeight + (maxOffset - minOffset) * (1 - this.speed) | 0;
          var imageOffsetMin = (this.boxOffsetTop - maxOffset) * (1 - this.speed) | 0;
          var margin;

          if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
            this.imageWidth = imageHeightMin * this.aspectRatio | 0;
            this.imageHeight = imageHeightMin;
            this.offsetBaseTop = imageOffsetMin;

            margin = this.imageWidth - this.boxWidth;

            if (this.positionX == 'left') {
              this.offsetLeft = 0;
            } else if (this.positionX == 'right') {
              this.offsetLeft = -margin;
            } else if (!isNaN(this.positionX)) {
              this.offsetLeft = Math.max(this.positionX, -margin);
            } else {
              this.offsetLeft = -margin / 2 | 0;
            }
          } else {
            this.imageWidth = this.boxWidth;
            this.imageHeight = this.boxWidth / this.aspectRatio | 0;
            this.offsetLeft = 0;

            margin = this.imageHeight - imageHeightMin;

            if (this.positionY == 'top') {
              this.offsetBaseTop = imageOffsetMin;
            } else if (this.positionY == 'bottom') {
              this.offsetBaseTop = imageOffsetMin - margin;
            } else if (!isNaN(this.positionY)) {
              this.offsetBaseTop = imageOffsetMin + Math.max(this.positionY, -margin);
            } else {
              this.offsetBaseTop = imageOffsetMin - margin / 2 | 0;
            }
          }
        },

        render: function () {
          var scrollTop = Parallax.scrollTop;
          var scrollLeft = Parallax.scrollLeft;
          var overScroll = this.overScrollFix ? Parallax.overScroll : 0;
          var scrollBottom = scrollTop + Parallax.winHeight;

          if (this.boxOffsetBottom > scrollTop && this.boxOffsetTop <= scrollBottom) {
            this.visibility = 'visible';
            this.mirrorTop = this.boxOffsetTop - scrollTop;
            this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
            this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
          } else {
            this.visibility = 'hidden';
          }

          this.$mirror.css({
            transform: 'translate3d(' + this.mirrorLeft + 'px, ' + (this.mirrorTop - overScroll) + 'px, 0px)',
            visibility: this.visibility,
            height: this.boxHeight,
            width: this.boxWidth
          });

          this.$slider.css({
            transform: 'translate3d(' + this.offsetLeft + 'px, ' + this.offsetTop + 'px, 0px)',
            position: 'absolute',
            height: this.imageHeight,
            width: this.imageWidth,
            maxWidth: 'none'
          });
        }
      });


      // Parallax Static Methods

      $.extend(Parallax, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: false,
        isFresh: false,
        isBusy: false,

        setup: function () {
          if (this.isReady) return;

          var self = this;

          var $doc = $(document),
            $win = $(window);

          var loadDimensions = function () {
            Parallax.winHeight = $win.height();
            Parallax.winWidth = $win.width();
            Parallax.docHeight = $doc.height();
            Parallax.docWidth = $doc.width();
          };

          var loadScrollPosition = function () {
            var winScrollTop = $win.scrollTop();
            var scrollTopMax = Parallax.docHeight - Parallax.winHeight;
            var scrollLeftMax = Parallax.docWidth - Parallax.winWidth;
            Parallax.scrollTop = Math.max(0, Math.min(scrollTopMax, winScrollTop));
            Parallax.scrollLeft = Math.max(0, Math.min(scrollLeftMax, $win.scrollLeft()));
            Parallax.overScroll = Math.max(winScrollTop - scrollTopMax, Math.min(winScrollTop, 0));
          };

          $win.on('resize.px.parallax load.px.parallax', function () {
              loadDimensions();
              self.refresh();
              Parallax.isFresh = false;
              Parallax.requestRender();
            })
            .on('scroll.px.parallax load.px.parallax', function () {
              loadScrollPosition();
              Parallax.requestRender();
            });

          loadDimensions();
          loadScrollPosition();

          this.isReady = true;

          var lastPosition = -1;

          function frameLoop() {
            if (lastPosition == window.pageYOffset) { // Avoid overcalculations
              window.requestAnimationFrame(frameLoop);
              return false;
            } else lastPosition = window.pageYOffset;

            self.render();
            window.requestAnimationFrame(frameLoop);
          }

          frameLoop();
        },

        configure: function (options) {
          if (typeof options == 'object') {
            delete options.refresh;
            delete options.render;
            $.extend(this.prototype, options);
          }
        },

        refresh: function () {
          $.each(this.sliders, function () {
            this.refresh();
          });
          this.isFresh = true;
        },

        render: function () {
          this.isFresh || this.refresh();
          $.each(this.sliders, function () {
            this.render();
          });
        },

        requestRender: function () {
          var self = this;
          self.render();
          self.isBusy = false;
        },
        destroy: function (el) {
          var i,
            parallaxElement = $(el).data('px.parallax');
          parallaxElement.$mirror.remove();
          for (i = 0; i < this.sliders.length; i += 1) {
            if (this.sliders[i] == parallaxElement) {
              this.sliders.splice(i, 1);
            }
          }
          $(el).data('px.parallax', false);
          if (this.sliders.length === 0) {
            $(window).off('scroll.px.parallax resize.px.parallax load.px.parallax');
            this.isReady = false;
            Parallax.isSetup = false;
          }
        }
      });


      // Parallax Plugin Definition

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var options = typeof option == 'object' && option;

          if (this == window || this == document || $this.is('body')) {
            Parallax.configure(options);
          } else if (!$this.data('px.parallax')) {
            options = $.extend({}, $this.data(), options);
            $this.data('px.parallax', new Parallax(this, options));
          } else if (typeof option == 'object') {
            $.extend($this.data('px.parallax'), options);
          }
          if (typeof option == 'string') {
            if (option == 'destroy') {
              Parallax.destroy(this);
            } else {
              Parallax[option]();
            }
          }
        });
      }

      var old = $.fn.parallax;

      $.fn.parallax = Plugin;
      $.fn.parallax.Constructor = Parallax;


      // Parallax No Conflict

      $.fn.parallax.noConflict = function () {
        $.fn.parallax = old;
        return this;
      };


      // Parallax Data-API

      $(function () {
        $('[data-parallax="scroll"]').parallax();
      });

    }(jQuery, window, document));

  }, 500);

});