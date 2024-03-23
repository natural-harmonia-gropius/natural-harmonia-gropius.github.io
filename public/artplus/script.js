document.addEventListener("scroll", (ev) => {
  const topbar = document.querySelector(".topbar");
  if (window.scrollY >= 40) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
});
