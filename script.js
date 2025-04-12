// ========== AOS Initialization ==========
AOS.init({
  duration: 1000,
  once: false, 
});

// ========== Form reCAPTCHA Validation ==========
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    if (typeof grecaptcha !== "undefined" && grecaptcha.getResponse() === "") {
      e.preventDefault();
      alert("Please complete the reCAPTCHA before submitting.");
    }
  });
}

// ========== Swiper Configuration ==========
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1, // default
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
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
});

// ========== Dark/Light Mode Toggle ==========
const toggleBtn = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const currentTheme = htmlEl.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    htmlEl.setAttribute("data-bs-theme", newTheme);
    toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
  });
}
