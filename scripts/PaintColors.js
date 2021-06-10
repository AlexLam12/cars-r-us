import { getColors } from "./database.js"

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