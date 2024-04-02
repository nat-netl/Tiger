$(document).ready(function () {
  $(".main__slider").owlCarousel({
    items: 1,
  });
});

$(document).ready(function () {
  $(document).ready(function () {
    $(".questions").click(function () {
      $(this).find(".icons div.plusIcon").toggle();
      $(this).find(".icons div.MinusIcon").toggle();
      $(this).next(".answer").slideToggle();
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let splideGallery = new Splide(".splide.gallery-slider", {
    height: "578px",
    perPage: 7,
    perMove: 1,
    classes: {
      arrows: "splide__arrows your-class-arrows",
      arrow: "splide__arrow your-class-arrow",
      prev: "splide__arrow--prev your-class-prev",
      next: "splide__arrow--next your-class-next",
    },
  });

  splideGallery.mount();

  let splideEvents = new Splide(".slider-right__events", {
    grid: {
      rows: 2,
      cols: 2,
      gap: {
        row: "83px",
        col: "63px",
      },
    },
    height: "578px",
    classes: {
      arrows: "splide__arrows your-class-arrows",
      arrow: "splide__arrow your-class-arrow",
      prev: "splide__arrow--prev your-class-prev",
      next: "splide__arrow--next your-class-next",
    },
  });

  splideEvents.mount(window.splide.Extensions);
});

$(".gallery__element").each(function () {
  $(this).mouseover(function () {
    $(this).addClass("active");
    $(".gallery__stage")
      .children(".gallery__element")
      .not(".active")
      .addClass("inactive");
  });
  $(this).mouseleave(function () {
    $(this).removeClass("active");
    $(".gallery__stage")
      .children(".gallery__element")
      .not(".active")
      .removeClass("inactive");
  });
});

$(function () {
  let $speed = 200;
  let $class = "opened";
  let $class_open = ".item-questions__answer";

  $(document).ready(function () {
    $(".item-questions__title").on("click", function () {
      $ul = $(this).closest("ul");
      $answer = $(this).closest("li").find($class_open);

      if (!$(this).closest("li").hasClass($class)) {
        $ul.find("li").each(function () {
          if ($(this).hasClass($class))
            $(this).removeClass($class).find($class_open).slideUp($speed);
        });
      }

      $answer.slideToggle($speed).closest("li").toggleClass($class);
    });
  });
});

ymaps3.ready.then(() => {
  const { YMapDefaultSchemeLayer } = ymaps3;
  let coordinate = "";

  let map = new ymaps3.YMap(document.getElementById("yandex-map"), {
    location: {
      source: "markerSource",
      center: [37.592402, 54.194492],
      zoom: 14,
    },
  });

  const layer = new YMapDefaultSchemeLayer({
    theme: "dark",
  });
  map.addChild(layer);

  /***
   *
   * CONTACT MAP
   *
   * **/

  let mapMainContact = new ymaps3.YMap(
    document.getElementById("contact-map-location"),
    {
      location: {
        source: "markerSource",
        center: [37.592402, 54.194492],
        zoom: 14,
      },
    }
  );

  console.log(ymaps3);
  const layerContact = new YMapDefaultSchemeLayer({
    theme: "dark",
  });
  mapMainContact.addChild(layerContact);
  $(".map-location").on("click", function () {
    coordinate = $(this).attr("data-location").split(", ");
    if (coordinate != undefined) {
      console.log(coordinate);
      coordinate;
      mapMainContact.setLocation({
        center: [coordinate[0], coordinate[1]],
        zoom: 14,
      });
    }
  });
});

/***
 *
 * MAIN CONTACT MAP
 *
 * **/

let splideMainContact = new Splide(".contacts-map-slider", {
  perPage: 4,
  perMove: 1,
  pagination: false,
  gap: "14px",
  fixedWidth: "390px",
  classes: {
    arrows: "splide__arrows your-class-arrows",
    arrow: "splide__arrow your-class-arrow",
    prev: "splide__arrow--prev your-class-prev",
    next: "splide__arrow--next your-class-next",
  },
});

splideMainContact.mount();

/****
 *
 *
 * SHOW MORE
 *
 * *****/

$(document).ready(function () {
  $(".news-items__item").slice(0, 6).show();

  if ($(".news-items__item").length < 6) {
    $(".see-more-news").hide();
  }

  $(".see-more-news").on("click", function (e) {
    e.preventDefault();
    $(".news-items__item:hidden").slice(0, 6).slideDown();
    if ($(".news-items__item:hidden").length == 0) {
      $(".see-more-news").text("Новости закончились").hide();
    }
  });
});

/************
 *
 * COACHING SLIDER
 *
 */

let splideCoachings = new Splide(".coachings-main__gallery-slider", {
  pagination: false,
  classes: {
    arrows: "splide__arrows your-class-arrows",
    arrow: "splide__arrow your-class-arrow",
    prev: "splide__arrow--prev your-class-prev",
    next: "splide__arrow--next your-class-next",
  },
});

let thumbnails = document.getElementsByClassName("thumbnail");

for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splideCoachings.go(index);
  });
}

splideCoachings.mount();

/************
 *
 * SERTIFICATE SLIDER
 *
 */

let splideSertificate = new Splide(
  ".center-coaching-main__sertificates-slider",
  {
    perPage: 4,
    perMove: 2,
    arrows: false,
  }
);

splideSertificate.mount();

/************
 *
 *	ACHIEVEMENTS SLIDER
 *
 */

let splideAchievements = new Splide(".right-coaching-main__achievements", {
  direction: "ttb",
  height: "500px",
  gap: "27px",
  pagination: false,
  perPage: 3,
  perMove: 1,
  classes: {
    arrows: "splide__arrows your-class-arrows",
    arrow: "splide__arrow your-class-arrow",
    prev: "splide__arrow--prev your-class-prev",
    next: "splide__arrow--next your-class-next",
  },
});

splideAchievements.mount();

const coachingsSliderOptions = [
  {
    id: 0,
    name: "Сагоян Артем",
    post: "Помощник главного трене",
    experience: "6 лет стажа",
    text: "0000",
    coachImages: [
      {
        image: "./../../components/coachingsMain/images/large_photo.png",
        alt: "Тренер",
      },
      {
        image: "./../../components/coachingsMain/images/large_photo.png",
        alt: "Тренер",
      },
    ],
    sertificateImages: [
      {
        image: "./../../components/coachingsMain/images/sertificate.png",
        alt: "Сертификат",
      },
      {
        image: "./../../components/coachingsMain/images/sertificate.png",
        alt: "Сертификат",
      },
      {
        image: "./../../components/coachingsMain/images/sertificate.png",
        alt: "Сертификат",
      },
      {
        image: "./../../components/coachingsMain/images/sertificate.png",
        alt: "Сертификат",
      },
    ],
    achievementImages: [
      {
        image: "./../../components/coachingsMain/images/diploma.png",
        alt: "Диплом",
      },
      {
        image: "./../../components/coachingsMain/images/diploma.png",
        alt: "Диплом",
      },
      {
        image: "./../../components/coachingsMain/images/diploma.png",
        alt: "Диплом",
      },
      {
        image: "./../../components/coachingsMain/images/diploma.png",
        alt: "Диплом",
      },
    ],
  },
  {
    id: 1,
    name: "Сагоян Артем",
    post: "Помощник главного трене",
    experience: "6 лет стажа",
    text: "0000",
    coachImages: [
      {
        image: "./../../components/coachingsMain/images/large_photo.png",
        alt: "Тренер",
      },
      {
        image: "./../../components/coachingsMain/images/large_photo.png",
        alt: "Тренер",
      },
      {
        image: "./../../components/coachingsMain/images/large_photo.png",
        alt: "Тренер",
      },
    ],
    sertificateImages: [
      {
        image: "./../../components/coachingsMain/images/sertificate.png",
        alt: "Сертификат",
      },
      {
        image: "./../../components/coachingsMain/images/sertificate.png",
        alt: "Сертификат",
      },
      {
        image: "./../../components/coachingsMain/images/sertificate.png",
        alt: "Сертификат",
      },
      {
        image: "./../../components/coachingsMain/images/sertificate.png",
        alt: "Сертификат",
      },
      {
        image: "./../../components/coachingsMain/images/sertificate.png",
        alt: "Сертификат",
      },
    ],
    achievementImages: [
      {
        image: "./../../components/coachingsMain/images/diploma.png",
        alt: "Диплом",
      },
      {
        image: "./../../components/coachingsMain/images/diploma.png",
        alt: "Диплом",
      },
      {
        image: "./../../components/coachingsMain/images/diploma.png",
        alt: "Диплом",
      },
      {
        image: "./../../components/coachingsMain/images/diploma.png",
        alt: "Диплом",
      },
    ],
  },
  {
    id: 2,
    name: "Сагоян Артем",
    post: "Помощник главного трене",
    experience: "6 лет стажа",
    text: "0000",
    coachImages: [
      {
        image: "./../../components/coachingsMain/images/large_photo.png",
        alt: "Тренер",
      },
      {
        image: "./../../components/coachingsMain/images/large_photo.png",
        alt: "Тренер",
      },
    ],
    sertificateImages: [
      {
        image: "./../../components/coachingsMain/images/sertificate.png",
        alt: "Сертификат",
      },
    ],
    achievementImages: [
      {
        image: "./../../components/coachingsMain/images/diploma.png",
        alt: "Диплом",
      },
      {
        image: "./../../components/coachingsMain/images/diploma.png",
        alt: "Диплом",
      },
      {
        image: "./../../components/coachingsMain/images/diploma.png",
        alt: "Диплом",
      },
    ],
  },
];

/************************
 *
 *
 * DYNAMIC MAIN COACHINGS SLIDER
 *
 */

$(".items-coachings-main__item").on("click", function () {
  const id = $(this).attr("data-id");

  let thubnails = "";
  let mainCoachingsSlider = "";
  let sertificateSliderItems = "";
  let achievementsSliderItems = "";

  for (let i = 0; i <= coachingsSliderOptions.length; i++) {
    if (coachingsSliderOptions[i].id === Number(id)) {
      splideCoachings.remove(".coachings-main__gallery-slider .splide__slide");
      splideSertificate.remove(
        ".center-coaching-main__sertificates-slider .splide__slide"
      );
      splideAchievements.remove(
        ".right-coaching-main__achievements .splide__slide"
      );

      $(".center-coaching-main__text").html(coachingsSliderOptions[i].text);
      $(".tags-center-coaching-main__tag:nth-child(1)").html(
        coachingsSliderOptions[i].post
      );
      $(".tags-center-coaching-main__tag:nth-child(2)").html(
        coachingsSliderOptions[i].experience
      );

      /*******
       *
       * MAIN COACHING SLIDER
       *
       */
      $.each(coachingsSliderOptions[i].coachImages, function (index, value) {
        if (index || value) {
          mainCoachingsSlider += `
					<div class="splide__slide">
						<img class="" src="${value.image}" alt="${value.alt}">
					</div>
					`;
          splideCoachings.add(mainCoachingsSlider);
        }
      });

      /***
       *
       * THUMBNAILS
       *
       */
      $.each(coachingsSliderOptions[i].coachImages, function (index, value) {
        thubnails += `
      	  <li class="thumbnail">
      			<img src="${value.image}" alt=${value.alt}>
      		</li>
      	`;
        $(".content-coaching-main__left .thumbnails").html(thubnails);
        splideCoachings.go(index);
      });

      $(".thumbnail").on("click", function () {
        splideCoachings.go($(".thumbnail").index(this));
        console.log($(".thumbnail").index(this));
      });

      /***
       *
       * SERTIFICATES
       *
       */
      $.each(
        coachingsSliderOptions[i].sertificateImages,
        function (index, value) {
          if (index || value) {
            sertificateSliderItems += `
						<div class="center-coaching-main__sertificate splide__slide">
							<img src="${value.image}" alt="${value.alt}" />
						</div>
      			`;
            splideAchievements;
            splideSertificate.add(sertificateSliderItems);
          }
        }
      );

      /***
       *
       * ACHIEVEMENTS
       *
       */
      $.each(
        coachingsSliderOptions[i].achievementImages,
        function (index, value) {
          if (index || value) {
            achievementsSliderItems += `
						<div class="achievements-right-coaching-main__achievement splide__slide">
							<img src="${value.image}" alt="${value.alt}" />
						</div>
      			`;

            splideAchievements.add(achievementsSliderItems);
          }
        }
      );
    }
  }
});

/****
 *
 * COACHING SLIDER
 *
 */

let splide = new Splide(".splide.coaching-slider", {
  direction: "ttb",
  height: "578px",
  gap: "15px",
  pagination: false,
  perPage: 2,
  perMove: 2,
  classes: {
    arrows: "splide__arrows your-class-arrows",
    arrow: "splide__arrow your-class-arrow",
    prev: "splide__arrow--prev your-class-prev",
    next: "splide__arrow--next your-class-next",
  },
});

splide.mount();

let splideDiploma = new Splide(".diploma-slider", {
  perPage: 2,
  perMove: 2,
  gap: "32px",
  fixedWidth: "223px",
  arrows: false,
});

splideDiploma.mount();

let splideGroup = new Splide(".group-slider", {
  perPage: 3,
  perMove: 1,
  gap: "76px",
  fixedWidth: "232px",
  pagination: false,
  classes: {
    arrows: "splide__arrows your-class-arrows",
    arrow: "splide__arrow your-class-arrow",
    prev: "splide__arrow--prev your-class-prev",
    next: "splide__arrow--next your-class-next",
  },
});

splideGroup.mount();

const trainerGroupSliderOptions = [
  {
    id: 0,
    name: "Сагоян Артем",
    post: "Помощник главного трене",
    experience: "6 лет стажа",
    text: "0000",
    coachImage: "./../components/coachings/images/artem.png",
    achievementImages: [
      {
        image: "./../components/coachings/images/diploma.png",
        alt: "Достижение",
      },
      {
        image: "./../components/coachings/images/diploma.png",
        alt: "Достижение",
      },
      {
        image: "./../components/coachings/images/diploma.png",
        alt: "Достижение",
      },
      {
        image: "./../components/coachings/images/diploma.png",
        alt: "Достижение",
      },
    ],
  },
];

/****
 *
 * DYNAMIC COACHING SLIDER
 *
 */

$(".coaching-slider__item").on("click", function () {
  const id = $(this).attr("data-id");

  let achievementImagesSlider = "";

  for (let i = 0; i <= trainerGroupSliderOptions.length; i++) {
    if (trainerGroupSliderOptions[i].id === Number(id) && id) {
      splideDiploma.remove(".diploma-slider .splide__slide");

      $(".center-coaching__title").html(trainerGroupSliderOptions[i].title);
      $(".center-coaching__text").html(trainerGroupSliderOptions[i].text);

      $(".center-coaching__merit:nth-child(1)").html(
        trainerGroupSliderOptions[i].post
      );
      $(".center-coaching__merit:nth-child(2)").html(
        trainerGroupSliderOptions[i].experience
      );

      $(".left-coaching__image").html(
        `<img class="image-coaching__item" src="${trainerGroupSliderOptions[i].coachImage}" alt="Тренер">`
      );

      /*******
       *
       * COACHING SLIDER
       *
       */

      $.each(
        coachingsSliderOptions[i].achievementImages,
        function (index, value) {
          if (index || value) {
            achievementImagesSlider += `
					<div class="splide__slide">
						<img class="" src="${value.image}" alt="${value.alt}">
					</div>
					`;
            splideDiploma.add(achievementImagesSlider);
          }
        }
      );
    }
  }
});

/****
 *
 * DYNAMIC GROUP CLASSES
 *
 */

const groupClassesSliderOptions = [
  {
    id: 0,
    title: "Сагоян Артем",
    years: "от 5 до 12 лет",
    group: "Младшая группаfff",
    text: "0000",
    largeImage: "./../../components/groupTraining/images/big_image.png",
  },
];

$(".group-slider__item").on("click", function () {
  const id = $(this).attr("data-id");

  for (let i = 0; i <= groupClassesSliderOptions.length; i++) {
    if (groupClassesSliderOptions[i].id === Number(id) && id) {
      $(".group-traning-content-right__type").html(
        groupClassesSliderOptions[i].title
      );
      $(".group-traning-content-right__years").html(
        groupClassesSliderOptions[i].years
      );
      $(".group-traning-content-right__group").html(
        groupClassesSliderOptions[i].group
      );
      $(".group-traning-content-right__text").html(
        groupClassesSliderOptions[i].text
      );

      $(".group-traning-content-left__block").html(
        `<img class="group-traning-content-left__blockimage" src="${groupClassesSliderOptions[i].largeImage}">`
      );
    }
  }
});

/******
 *
 * CALENDAR EVENTS
 *
 */

$(document).ready(function () {
  $(".item-month-items__table .event .day").click(function (event) {
    let eventModal = $(this).parent().children(".event-item");

    eventModal.fadeIn(600).css({
      display: "flex",
    });
    $("html").css("overflow-y", "hidden");
  });
});

$(".calendar-event-bg").click(function (event) {
  let eventModal = $(".item-month-items__table .event").find(".event-item");
  eventModal.fadeOut(600);

  $("html").css("overflow-y", "auto");
});

$(".close-event__text").click(function (event) {
  let eventModal = $(".item-month-items__table .event").find(".event-item");
  eventModal.fadeOut(600);

  $("html").css("overflow-y", "auto");
});
