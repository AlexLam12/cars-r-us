import { OverallHTML } from "./OverallHTML.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = OverallHTML()
}

renderAllHTML()