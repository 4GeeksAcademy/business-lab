const carousel = document.querySelector("#hero-carousel");

if (carousel) {
  const slides = [...carousel.querySelectorAll("img")];
  const slideButtons = [...carousel.querySelectorAll("[data-slide-index]")];
  const controls = carousel.querySelector("#hero-carousel-controls");
  const toggleButton = carousel.querySelector("#hero-carousel-toggle");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let currentSlide = 0;
  let playbackTimer = null;
  let isPlaying = false;
  let isPointerOver = false;
  let isKeyboardPaused = false;
  let isKeyboardModality = false;

  function stopTimer() {
    window.clearInterval(playbackTimer);
    playbackTimer = null;
  }

  function updateControls() {
    toggleButton.textContent = isPlaying ? "Pausar" : "Iniciar";
    toggleButton.setAttribute(
      "aria-label",
      isPlaying ? "Pausar reproducción" : "Iniciar reproducción",
    );

    slideButtons.forEach((button, index) => {
      const isCurrent = index === currentSlide;
      button.setAttribute("aria-current", String(isCurrent));
      const indicator = button.querySelector("span");
      indicator.classList.toggle("bg-[#143F43]", isCurrent);
      indicator.classList.toggle("bg-[#143F43]/35", !isCurrent);
    });
  }

  function showSlide(index) {
    currentSlide = index;

    slides.forEach((slide, slideIndex) => {
      const isCurrent = slideIndex === currentSlide;
      slide.classList.toggle("opacity-100", isCurrent);
      slide.classList.toggle("opacity-0", !isCurrent);
      slide.setAttribute("aria-hidden", String(!isCurrent));
    });

    updateControls();
  }

  function startTimer() {
    if (!isPlaying || isPointerOver || playbackTimer !== null) {
      return;
    }

    playbackTimer = window.setInterval(() => {
      showSlide((currentSlide + 1) % slides.length);
    }, 5000);
  }

  function startPlayback() {
    if (reducedMotion.matches) {
      return;
    }

    isKeyboardPaused = false;
    isPlaying = true;
    updateControls();
    startTimer();
  }

  function pausePlayback({ keyboard = false } = {}) {
    stopTimer();
    isPlaying = false;
    isKeyboardPaused = keyboard;
    updateControls();
  }

  slides.forEach((slide) => {
    slide.hidden = false;
  });
  toggleButton.hidden = reducedMotion.matches;
  showSlide(0);
  controls.classList.remove("hidden");
  controls.classList.add("flex");

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showSlide(Number(button.dataset.slideIndex));
    });
  });

  toggleButton.addEventListener("click", () => {
    if (isPlaying) {
      pausePlayback();
    } else {
      startPlayback();
    }
  });

  document.addEventListener("keydown", () => {
    isKeyboardModality = true;
  });

  document.addEventListener("pointerdown", () => {
    isKeyboardModality = false;
  });

  carousel.addEventListener("focusin", () => {
    if (isKeyboardModality) {
      if (isPlaying) {
        pausePlayback({ keyboard: true });
      } else {
        isKeyboardPaused = true;
      }
    }
  });

  carousel.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "touch") {
      isPointerOver = true;
      stopTimer();
    }
  });

  carousel.addEventListener("pointerleave", (event) => {
    if (event.pointerType !== "touch") {
      isPointerOver = false;
      if (isPlaying && !isKeyboardPaused) {
        startTimer();
      }
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && isPlaying) {
      pausePlayback();
    }
  });

  reducedMotion.addEventListener("change", () => {
    toggleButton.hidden = reducedMotion.matches;
    if (reducedMotion.matches && isPlaying) {
      pausePlayback();
    }
  });

  updateControls();

  if (!reducedMotion.matches) {
    startPlayback();
  }
}
