const toggleBtn = document.querySelector(".extend-cv")
const menu = document.querySelector(".left")
noMenu = document.querySelector(".logo-simplon")
contactItems = document.querySelectorAll(".contact ul li")


toggleBtn.addEventListener("click", () => {
    menu.classList.add("mobile-menu")
    noMenu.style.alignSelf = "flex-start"
    contactItems.forEach(item => {
        item.classList.add("menu-mobile-contact")
    })
})
noMenu.addEventListener("click", () => {
    menu.classList.remove("mobile-menu")
    noMenu.style.alignSelf = "flex-end"
    contactItems.forEach(item => {
        item.classList.remove("menu-mobile-contact")
    })
})
