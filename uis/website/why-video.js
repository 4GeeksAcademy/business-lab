const video = document.querySelector("#coordination-video");

if (video) {
  const videoSource = video.querySelector("source[data-src]");
  const toggleButton = document.querySelector("#coordination-video-toggle");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let isSectionVisible = false;
  let isDocumentVisible = !document.hidden;
  let isUserPaused = false;
  let isManualPlaybackEnabled = false;
  let isKeyboardPaused = false;
  let isKeyboardModality = false;
  let isLoaded = false;

  function updateToggle() {
    const isPlaying = !video.paused && !video.ended;
    toggleButton.textContent = isPlaying ? "Pausar" : "Reproducir";
    toggleButton.setAttribute(
      "aria-label",
      isPlaying ? "Pausar animación del mecanismo" : "Reproducir animación del mecanismo",
    );
  }

  function pauseVideo() {
    video.pause();
    updateToggle();
  }

  function loadVideo() {
    if (isLoaded || !videoSource) {
      return;
    }

    videoSource.src = videoSource.dataset.src;
    videoSource.removeAttribute("data-src");
    isLoaded = true;
    video.load();
  }

  function playVideo() {
    if (!isLoaded || !isSectionVisible || !isDocumentVisible) {
      return;
    }

    try {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Autoplay may be denied by the browser; leave the manual control available.
          updateToggle();
        });
      }
    } catch {
      // Some browsers may throw synchronously when playback is unavailable.
      updateToggle();
    }
  }

  function syncPlayback() {
    if (
      !isSectionVisible ||
      !isDocumentVisible ||
      isUserPaused ||
      isKeyboardPaused ||
      (reducedMotion.matches && !isManualPlaybackEnabled)
    ) {
      pauseVideo();
      return;
    }

    playVideo();
  }

  toggleButton.hidden = false;
  updateToggle();

  toggleButton.addEventListener("click", () => {
    if (!video.paused) {
      isUserPaused = true;
      isKeyboardPaused = false;
      isManualPlaybackEnabled = false;
      pauseVideo();
      return;
    }

    isUserPaused = false;
    isKeyboardPaused = false;
    isManualPlaybackEnabled = true;
    loadVideo();
    syncPlayback();
  });

  toggleButton.addEventListener("focus", () => {
    if (isKeyboardModality && !video.paused) {
      isKeyboardPaused = true;
      pauseVideo();
    }
  });

  document.addEventListener("keydown", () => {
    isKeyboardModality = true;
  });

  document.addEventListener("pointerdown", () => {
    isKeyboardModality = false;
  });

  video.addEventListener("play", updateToggle);
  video.addEventListener("pause", updateToggle);
  video.addEventListener("ended", updateToggle);

  const playbackObserver = new IntersectionObserver(
    ([entry]) => {
      isSectionVisible = entry.isIntersecting;
      syncPlayback();
    },
    { threshold: 0.01 },
  );
  playbackObserver.observe(video);

  const loadObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        loadVideo();
        observer.disconnect();
      }
    },
    { rootMargin: "200px 0px" },
  );
  loadObserver.observe(video);

  document.addEventListener("visibilitychange", () => {
    isDocumentVisible = !document.hidden;
    syncPlayback();
  });

  reducedMotion.addEventListener("change", () => {
    syncPlayback();
  });
}
