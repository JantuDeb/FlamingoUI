const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile");

// Modal
const showModal = document.querySelector("#show-modal");
const modal = document.querySelector(".modal");
const hideModal = document.querySelector("#btn-hide-modal");

// Snackbar
const btnBaseline = document.querySelector("#btn-baseline");
const btnLeading = document.querySelector("#btn-leading");
const btnStacked = document.querySelector("#btn-stacked");
const btnClose = document.querySelectorAll(".snackbar-close");

menuIcon?.addEventListener("click", () => toggle(mobileMenu));

// modal
showModal?.addEventListener("click", () => toggle(modal));
hideModal?.addEventListener("click", () => toggle(modal));

// snackbar
btnBaseline?.addEventListener("click", () =>
  toggle(document.querySelector("#baseline"))
);

btnLeading?.addEventListener("click", () =>toggle(document.querySelector("#leading")));

btnStacked?.addEventListener("click", () => toggle(document.querySelector("#stacked")));

btnClose?.forEach((el,i) => {
  el.addEventListener("click", ()=>toggle(document.querySelectorAll(".snackbar")[i]));
});

function toggle(el) {
  if (el.classList.contains("visibility")) el.classList.remove("visibility");
  else el.classList.add("visibility");
}
