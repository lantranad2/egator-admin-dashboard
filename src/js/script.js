const navIconMenu = document.querySelector("#nav__icon-menu");
const asideIconClose = document.querySelector("#aside__icon-close");
const aside = document.querySelector("#aside");

navIconMenu.addEventListener("click", () =>
  aside.classList.add("aside--expanded")
);

asideIconClose.addEventListener("click", () =>
  aside.classList.remove("aside--expanded")
);
