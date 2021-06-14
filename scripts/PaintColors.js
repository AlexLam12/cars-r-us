import { getColors, setColor } from "./database.js"

const colors = getColors()

export const Colors = () => {
    
    let html = "<ul>"
    
    for (const color of colors) {
        html += `<li>
        <input type="radio" name="color" value="${color.id}" /> ${color.color}
        </li>`
    }
    
    html += "</ul>"
    return html
}

// document.addEventListener(
//     "click",
//     (event) => {
//         if (event.target.name === "color") {
//             setColor(parseInt(event.target.value))
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {if (event.target.name === "color"){
        const chosenColor = colors.find(color => {
           return color.id === parseInt(event.target.value)
        })
        window.alert(`User chose color ${chosenColor.color}`)
        setColor(parseInt(event.target.value))
        }
    }
)