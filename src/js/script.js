const navIconMenu = document.querySelector("#nav__icon-menu");
const asideIconClose = document.querySelector("#aside__icon-close");
const aside = document.querySelector("#aside");
const navLightMode = document.querySelector("#nav__light-mode");
const navDarkMode = document.querySelector("#nav__dark-mode");
const body = document.body;

navIconMenu.addEventListener("click", () =>
  aside.classList.add("aside--expanded")
);

asideIconClose.addEventListener("click", () =>
  aside.classList.remove("aside--expanded")
);

navLightMode.addEventListener("click", () => {
  navLightMode.classList.add("active");
  navDarkMode.classList.remove("active");
  body.classList.remove("dark-mode");
});

navDarkMode.addEventListener("click", () => {
  navDarkMode.classList.add("active");
  navLightMode.classList.remove("active");
  body.classList.add("dark-mode");
});
