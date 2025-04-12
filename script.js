// ========== AOS Initialization ==========
AOS.init({
  duration: 1000,
  once: false,
});

  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    if (grecaptcha.getResponse() === "") {
      e.preventDefault();
      alert("Please complete the reCAPTCHA before submitting.");
    }
  });

// ========== Swiper Configuration ==========
const swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3, 
  spaceBetween: 30,
  speed: 600,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// ========== Dark/Light Mode Toggle ==========
const toggleBtn = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

toggleBtn.addEventListener("click", () => {
  const currentTheme = htmlEl.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  htmlEl.setAttribute("data-bs-theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
});
