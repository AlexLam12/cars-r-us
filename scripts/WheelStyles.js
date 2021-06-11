import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

export const WheelStyles = () => {
    
    let html = "<ul>"
    
    for (const wheel of wheels) {
        html += `<li>
        <input type="radio" name="wheel" value="${wheel.id}"/> ${wheel.style}
        </li>`
    }
    
    html += "</ul>"
    return html
}

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)