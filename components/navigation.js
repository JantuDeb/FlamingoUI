const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile");
const showModal = document.querySelector("#show-modal");
const modal = document.querySelector(".modal");
const hideModal = document.querySelector("#btn-hide-modal");


function toggle(el) {
  if (el.classList.contains("visibility"))
    el.classList.remove("visibility");
  else el.classList.add("visibility");
}

menuIcon?.addEventListener("click",()=> toggle(mobileMenu));
showModal?.addEventListener("click", ()=>toggle(modal));
hideModal?.addEventListener("click",()=>toggle(modal))