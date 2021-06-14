import { Colors } from "./PaintColors.js"
import { InteriorsFabric} from "./Interiors.js"
import { TechPackages } from "./TechPackages.js"
import { WheelStyles} from "./WheelStyles.js"
import { Orders } from "./Order.js"
import { addOrder } from "./database.js"

export const OverallHTML = () => { 
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Paint Colors</h2>
                ${Colors()}
            </section>
            <section class="choices__interiors options">
                <h2>Interior Options</h2>
                ${InteriorsFabric()}
            </section>
            <section class="choices__technologies options">
                <h2>Tech Packages</h2>
                ${TechPackages()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${WheelStyles()}
        </section>
        </article>

        <article>
            <button id="orderButton">Submit Order</button>
        </article>

        <article class="customOrders">
            <h2>Orders</h2>
            ${Orders()}
        </article>
    `
}

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton"){
            addOrder()
        }
    }
)