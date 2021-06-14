import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

export const InteriorsFabric = () => {
    
    let html = "<ul>"
    
    for (const interior of interiors) {
        html += `<li>
        <input type="radio" name="interior" value="${interior.id}" /> ${interior.interior}
        </li>`
    }
    
    html += "</ul>"
    return html
}

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

