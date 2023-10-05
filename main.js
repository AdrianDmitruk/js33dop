const isImageInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const lazyLoad = () => {
  const images = document.querySelectorAll(".img");

  images.forEach((image) => {
    if (isImageInViewport(image) && !image.getAttribute("src")) {
      image.src = image.getAttribute("data-src");
      image.style.opacity = 1;
    }
  });
};

window.addEventListener("scroll", lazyLoad);
window.addEventListener("resize", lazyLoad);
lazyLoad();
