import { getOrders } from "./database.js"

const buildOrderList = (order) => {
    
    return `<li>
        Order #${order.id} was placed on ${Date.now()}
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