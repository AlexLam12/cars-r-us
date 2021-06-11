import { getTechnologies, setTechnology } from "./database.js"

const techPackages = getTechnologies()

export const TechPackages = () => {
    
    let html = "<ul>"
    
    for (const techPackage of techPackages) {
        html += `<li>
        <input type="radio" name="techPackage" value="${techPackage.id}" /> ${techPackage.techPackage}
        </li>`
    }
    
    html += "</ul>"
    return html
}

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "techPackage") { 
            setTechnology(parseInt(event.target.value))
        }
    }
)