import {FavoritesView} from "./favorites.js"

new FavoritesView("#app")

const favButton = document.querySelector("header button")
const svgColor = document.querySelector("svg path")

favButton.addEventListener(`mouseenter`, () => {
    svgColor.style.fill = "#065E7C"
})
favButton.addEventListener(`mouseleave`, () => {
    svgColor.style.fill = "white"
})

