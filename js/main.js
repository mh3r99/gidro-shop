$(function () {
  // Slick
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow: ` <button class="banner-section__slider-btn banner-section__slider-btnprev">
    <i class="fas fa-chevron-left"></i>
  </button>`,
    nextArrow: ` <button class="banner-section__slider-btn banner-section__slider-btnnext">
    <i class="fas fa-chevron-right"></i>
</button>`,
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // Tabs
  $(".tab").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tab--active");
    $($(this).closest(".tabs-wrapper").siblings().find("div")).removeClass(
      "tabs-content--active"
    );

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");

    $(".product-slider").slick("setPosition");
  });

  // Favorite product
  $(".product-item__favorite").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("product-item__favorite--active");
  });

  // Product slider
  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ` <button class="product-slider__slider-btn product-slider__slider-btnprev">
    <i class="fas fa-chevron-left"></i>
  </button>`,
    nextArrow: ` <button class="product-slider__slider-btn product-slider__slider-btnnext">
    <i class="fas fa-chevron-right"></i>
</button>`,
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,

          dots: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,

          dots: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,

          dots: true,
        },
      },
    ],
  });

  // FormStyler
  $(".filter-style").styler();

  $(".filter__item-drop, .filter__extra").on("click", function () {
    $(this).toggleClass("filter__item-drop--active");
    $(this).next().slideToggle(200);
  });

  // RangeSlider

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
  });

  // Catalog filter buttons GRID & LINE

  $(".catalog__filter-btngrid").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btnline").removeClass("catalog__filter-button--active");
    $(".product-item__wrapper").removeClass("product-item__wrapper--list");
  });
  $(".catalog__filter-btnline").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btngrid").removeClass("catalog__filter-button--active");

    $(".product-item__wrapper").addClass("product-item__wrapper--list");
  });

  // RATEYO Star
  $(".rate-yo").rateYo({
    ratedFill: "#1c62cd",
    normalFill: "#c4c4c4",
    spacing: "7px",
  });

  // Menu-mobile
  $(".menu__btn").on("click", function () {
    $(".menu-mobile__list").toggleClass("menu-mobile__list--active");
  });

  // Footer
  $(" .footer__topdrop").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("footer__topdrop--active");
  });

  // Aside filtr
  $(" .aside__btn").on("click", function () {
    $(this).next().slideToggle();
  });
});
