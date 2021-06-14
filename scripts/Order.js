import { getOrders, getColors, getInteriors, getTechnologies, getWheels } from "./database.js"

const colors = getColors()
const interiors = getInteriors()
const techPackages = getTechnologies()
const wheels = getWheels()

const buildOrderList = (order) => {
    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )

    const foundInteriors = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundTechPackages = techPackages.find(
        (techPackage) => {
            return techPackage.id === order.techPackageId
        }
    )

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const totalCost = foundWheels.price + foundTechPackages.price + foundInteriors.price + foundColor.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
        </li>`
}

export const Orders = () => {
   const orders = getOrders()

   let html = "<ul>"

   const listItems = orders.map(buildOrderList)

   html += listItems.join("")

   html += "</ul>"

   return html
}