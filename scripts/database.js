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
    costomOrders: [
        {}
    ]
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(techPackage => ({...techPackage}))
}

export const getWheels = () => {
    return database.wheels.map(style => ({...style}))
}