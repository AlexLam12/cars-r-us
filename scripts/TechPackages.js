import { getTechnologies } from "./database.js"

const techPackages = getTechnologies()

export const TechPackages = () => {
    
    let html = "<ul>"
    
    for (const techPackage of techPackages) {
        html += `<li>
        <input type="radio" name="techpackage" value="${techPackage.id}" /> ${techPackage.techPackage}
        </li>`
    }
    
    html += "</ul>"
    return html
}