import { OverallHTML } from "./OverallHTML.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = OverallHTML()
}

renderAllHTML()

document.addEventListener("stateChanged", (event) => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})