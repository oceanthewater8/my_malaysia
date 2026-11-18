const menuBar = document.querySelector(".menu-bar");
const menuList = document.querySelector("nav ul");

menuBar.addEventListener("click", function() {
    menuList.classList.toggle("reveal");
});

