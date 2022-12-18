const toggleBtn = document.querySelector(".extend-cv")
const menu = document.querySelector(".left")
noMenu = document.querySelector(".logo-simplon")

toggleBtn.addEventListener("click", () => {
    menu.classList.add("mobile-menu")
})
noMenu.addEventListener("click", () => {
    menu.classList.remove("mobile-menu")
})
