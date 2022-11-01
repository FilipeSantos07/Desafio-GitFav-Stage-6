import {FavoritesView} from "./favorites.js"

new FavoritesView("#app")

const input= document.querySelector("header input")
const favButton = document.querySelector("header button")
const svgColor = document.querySelector("svg path")

input.focus()

favButton.addEventListener(`click`, () => {
    input.value = ""
    input.focus()
})

favButton.addEventListener(`mouseenter`, () => {
    svgColor.style.fill = "#065E7C"
})
favButton.addEventListener(`mouseleave`, () => {
    svgColor.style.fill = "white"
})

