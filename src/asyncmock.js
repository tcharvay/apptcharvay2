import tabla1 from './img/tabla1.jpg'
import tabla2 from './img/tabla2.jpg'
import tabla3 from './img/tabla3.jpg'

const products = [
    {id:1, name: "Tabla Surf", price: 1000, description: 'Descripcion Tabla1', img: tabla1, category: 'surf'},
    {id:2, name: "Tabla Skate", price: 1100, description: 'Descripcion Tabla2', img: tabla2, category: 'skate' },
    {id:3, name: "Tabla Snow", price: 1200, description: 'Descripcion Tabla3', img: tabla3, category: 'snow' },
]

const categories = [
    {id: 'surf', description: 'Surf'},
    {id: 'skate', description: 'Skate'},
    {id: 'snow', description: 'Snow'}
]
export const getProducts = (idCategory) => {
    return new Promise ((resolve) => {
        const productsToResolve = idCategory ? products.filter(item => item.category === idCategory) : products
        setTimeout(() => {
            resolve(productsToResolve);
        },2000);
    });
}


export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 2000)
    })
}

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 2000)
    })
}