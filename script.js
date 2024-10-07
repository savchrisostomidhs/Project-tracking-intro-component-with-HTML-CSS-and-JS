const burger = document.querySelector("header div.hamburger .burger");
const closeBurger = document.querySelector("header div.hamburger .close");
const nav = document.querySelector("header nav");


burger.addEventListener("click", () => {
    burger.style.display = "none";
    closeBurger.style.display = "block";
    nav.style.display = "flex";
});

closeBurger.addEventListener("click", () => {
    closeBurger.style.display = "none";
    burger.style.display = "block";
    nav.style.display = "none";
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
        closeBurger.style.display = "none";
        burger.style.display = "block";
    }
});