const database = {
    colors: [
        {id: 1, color: "Silver", price: 1},
        {id: 2, color: "Midnight Blue", price: 3},
        {id: 3, color: "Firebrick Red", price: 4},
        {id: 4, color: "Spring Green", price: 2}
    ],
    interiors: [
        {id: 1, interior: "Beige Fabric", price: 25},
        {id: 2, interior: "Charcoal Fabric", price: 50},
        {id: 3, interior: "White Leather", price: 150},
        {id: 4, interior: "Black Leather", price: 175}
    ],
    technologies:[
        {id: 1, techPackage: "Basic Package", price: 0},
        {id: 2, techPackage: "Navigation Package", price: 100},
        {id: 3, techPackage: "Visibility Package", price: 200},
        {id: 4, techPackage: "Ultra Package", price: 400}
    ],
    wheels: [
        {id: 1, style: "17-inch Pair Radial", price: 100},
        {id: 2, style: "17-inch Pair Radial Black", price: 150},
        {id: 3, style: "18-inch Pair Spoke Silver", price: 300},
        {id: 4, style: "18-inch Pair Spoke Black", price: 375}
    ],
    orders: [
        {}
    ],
    orderBuilder: {},
}

export const getColors = () => [...database.colors]

export const getInteriors = () => [...database.interiors]

export const getTechnologies = () => [...database.technologies]

export const getWheels = () => [...database.wheels]

export const getOrders = () => [...database.orders]

export const setColor = (id) => {
    database.orderBuilder.colorId = id
}
export const setInerior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}