import './Itemlistconteiner.css'
import { useEffect , useState} from "react"
import { ItemList } from "../ItemList/ItemList"
import { getProducts } from '../../asyncmock'
import { useParams } from "react-router-dom";
const Itemlistconteiner = () => {
    const [ products, setProducts] = useState([])
    const {categoryId} = useParams();

    useEffect(()=> {
        getProducts(categoryId).then((products)=> {
            console.log(products)
            setProducts(products)
        })
    }, [categoryId])

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