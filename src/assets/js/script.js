(function () {
  const header = document.querySelector(".header");

  window.onscroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolling");
    } else {
      header.classList.remove("scrolling");
    }
  };
})();
