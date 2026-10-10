
document.querySelectorAll(".hero-portrait video").forEach((video) => {
  video.play().catch((error) => {
    console.warn("Hero video autoplay was blocked by the browser.", error);
  });
});
