import './Itemlistconteiner.css'
import { useEffect , useState} from "react"
import { ItemList } from "../ItemList/ItemList"
import { getProducts } from '../../asyncmock'

const Itemlistconteiner = () => {
    const [ products, setProducts] = useState([])

    useEffect(()=> {
        getProducts().then((products)=> {
            console.log(products)
            setProducts(products)
        })
    }, [])

    console.log(products)

    return(
        <>
            <div className="producto">
                <ItemList products={products}/>
            </div>
        </>
    )
}
export default Itemlistconteiner;