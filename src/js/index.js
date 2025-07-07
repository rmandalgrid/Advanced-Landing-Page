const featuredSection = document.querySelector(".featured-house");
document
  .querySelector("#about_nav_link")
  .addEventListener("click", function (e) {
    e.preventDefault();
    featuredSection.scrollIntoView({ behavior: "smooth" });
  });
// section.scrollIntoView({scroll-behaviour:smoth}).

// Select necessary elements (slider, slides, left arrow button, right arrow button)
const sliders = document.querySelector(".sliders");
const slides = document.querySelectorAll(".cards");
const leftArrowBtn = document.querySelector("#left-arrow-btn");
const rightArrowBtn = document.querySelector("#right-arrow-btn");

let currentIndex = 0;

function slideTo(index) {
  currentIndex = index;
  const offset = (currentIndex * (slides[0].offsetWidth + 25)); 
  sliders.style.transform = `translateX(${-offset}px)`;
}

function slideNext() {
  if (currentIndex < slides.length - 3) {
    slideTo(currentIndex + 1);
  } else {
    slideTo(0);
  }
}

function slidePrev() {
  if (currentIndex > 0) {
    slideTo(currentIndex - 1);
  } else {
    slideTo(slides.length - 3);
  }
}

leftArrowBtn.addEventListener("click", slidePrev);
rightArrowBtn.addEventListener("click", slideNext);

///section hero
const btns = document.querySelectorAll("#btn-house");
const parentBtn = document.querySelector(".top-buttons");

parentBtn.addEventListener("click", function (e) {
  const clicked = e.target.closest("#btn-house");
  if (!clicked) return;
  btns.forEach((t) => t.classList.remove("btn--active"));
  clicked.classList.add("btn--active");
});

//type js
const typed = new Typed(".typeText", {
  strings: [
    `Find The Place ^1000 To Live <span class="header__body--heading">Your Dreams</span> Easily Here`,
    "Where It Will Be Easier For You Finding...",
  ],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true,
  showCursor: true,
  cursorChar: "|",
  autoInsertCss: true,
});

//cookies banner
const cookiesBanner = document.querySelector(".cookies__section");
const cookiesBtn = document.querySelector(".cookies-btn");

cookiesBtn.addEventListener("click", function () {
  cookiesBanner.style.animation = "slide-down 1s ease-in-out";
  cookiesBanner.style.display = "none";
});

const MoreArticlesbtn = document.querySelector(".find-more__btn");
const articleContainer = document.querySelector(".article__container");
const articleBox_1 = document.querySelector("#box-1");
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 1;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      if (i !== 0 && i !== slides.length - 1) {
        // Skip first and last slides
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      }
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transition = "transform 0.5s ease";
      s.style.transform = `translateX(${100 * (i - slide)}%) scale(1)`;
    });
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 2 || curSlide === maxSlide - 1) {
      curSlide = 1;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0 || curSlide === 1) {
      curSlide = maxSlide - 2;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(1);
    createDots();
    activateDot(1);
  };
  init();

  // Event handlers
  // btnRight.addEventListener("click", nextSlide);
  // btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//More articles button
MoreArticlesbtn.addEventListener("click", function () {
  const card = document.querySelector(".article__card");
  card.style.transform =
    card.style.transform === "rotateY(180deg)"
      ? "rotateY(0)"
      : "rotateY(180deg)";
});
