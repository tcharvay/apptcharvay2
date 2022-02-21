import tabla1 from './img/tabla1.jpg'
import tabla2 from './img/tabla2.jpg'
import tabla3 from './img/tabla3.jpg'

const products = [
    {id: 1, name: "Tabla 1", price: 1000, description: 'Descripcion Tabla1', img: tabla1 },
    {id: 2, name: "Tabla 2", price: 1100, description: 'Descripcion Tabla2', img: tabla2 },
    {id: 3, name: "Tabla 3", price: 1200, description: 'Descripcion Tabla3', img: tabla3 },
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)     
    })
}

