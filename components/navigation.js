const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile");

function toogleMobileMenu() {
  if (mobileMenu.classList.contains("visibility")) {
    mobileMenu.classList.remove("visibility");
  } else {
    mobileMenu.classList.add("visibility");
  }
  console.log(isVisible);
}

menuIcon.addEventListener("click", toogleMobileMenu);
