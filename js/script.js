const hamburguer = document.querySelector(".header-container .nav-bar .nav-list .nav-burguer");
const ul_menu = document.querySelector(".header-container .nav-bar .nav-list ul");
const li = document.querySelectorAll(".header-container .nav-bar .nav-list ul li");
const item = document.querySelectorAll(".header-container .nav-bar .nav-list ul li a");


hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    ul_menu.classList.toggle("active");
})

item.forEach(selectItem => selectItem.addEventListener("click", () => {
    if ((ul_menu.classList = "active") || (hamburguer.classList = "active")) {
        hamburguer.classList.toggle("active");
        ul_menu.classList.toggle("active");     
    }
}))


