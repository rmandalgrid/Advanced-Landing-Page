const featuredSection = document.querySelector(".featured-house");
document
  .querySelector("#about_nav_link")
  .addEventListener("click", function (e) {
    e.preventDefault();
    featuredSection.scrollIntoView({ behavior: "smooth" });
  });

// Property cards slider
const sliders = document.querySelector(".sliders");
const propertyCards = document.querySelectorAll(".cards");
const leftArrowBtn = document.querySelector("#left-arrow-btn");
const rightArrowBtn = document.querySelector("#right-arrow-btn");

let currentIndex = 0;

function slideTo(index) {
  currentIndex = index;
  const offset = (currentIndex * (propertyCards[0].offsetWidth + 25)); 
  sliders.style.transform = `translateX(${-offset}px)`;
}

function slideNext() {
  if (currentIndex < propertyCards.length - 3) {
    slideTo(currentIndex + 1);
  } else {
    slideTo(0);
  }
}

function slidePrev() {
  if (currentIndex > 0) {
    slideTo(currentIndex - 1);
  } else {
    slideTo(propertyCards.length - 3);
  }
}

leftArrowBtn.addEventListener("click", slidePrev);
rightArrowBtn.addEventListener("click", slideNext);

// Property type filter buttons
const filterBtns = document.querySelectorAll(".btn-house, .btn-villa, .btn-apartment");
const parentBtn = document.querySelector(".top-buttons");

parentBtn.addEventListener("click", function (e) {
  const clicked = e.target.closest("button");
  if (!clicked || !clicked.classList.contains("btn-border")) return;
  filterBtns.forEach((btn) => btn.classList.remove("btn--active"));
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

// Cookie banner
const cookiesBanner = document.querySelector(".cookies__section");
const cookiesBtn = document.querySelector(".cookies-btn");

if (cookiesBtn && cookiesBanner) {
  cookiesBtn.addEventListener("click", function () {
    cookiesBanner.style.animation = "slide-down 1s ease-in-out";
    cookiesBanner.style.display = "none";
  });
}

// Testimonials slider
const testimonialSlider = function () {
  const testimonialSlides = document.querySelectorAll(".slide");
  const dotContainer = document.querySelector(".dots");

  if (!testimonialSlides.length || !dotContainer) return;

  let curSlide = 1;
  const maxSlide = testimonialSlides.length;

  const createDots = function () {
    testimonialSlides.forEach(function (_, i) {
      if (i !== 0 && i !== testimonialSlides.length - 1) {
        dotContainer.insertAdjacentHTML(
          "beforeend",
          `<button class="dots__dot" data-slide="${i}" aria-label="Go to slide ${i}"></button>`
        );
      }
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    const activeDot = document.querySelector(`.dots__dot[data-slide="${slide}"]`);
    if (activeDot) {
      activeDot.classList.add("dots__dot--active");
    }
  };

  const goToSlide = function (slide) {
    testimonialSlides.forEach((s, i) => {
      s.style.transition = "transform 0.5s ease";
      s.style.transform = `translateX(${100 * (i - slide)}%) scale(1)`;
    });
  };

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
testimonialSlider();

// Article card flip button
const moreArticlesBtn = document.querySelector(".find-more__btn");
if (moreArticlesBtn) {
  moreArticlesBtn.addEventListener("click", function () {
    const card = document.querySelector(".article__card");
    if (card) {
      card.style.transform =
        card.style.transform === "rotateY(180deg)"
          ? "rotateY(0)"
          : "rotateY(180deg)";
    }
  });
}
