import { useEffect, useState } from "react"
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getProduct } from '../../asyncmock'
import { useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();
    
    useEffect(() => {
        getProduct(productId).then(product => {
            setProduct(product);
        });
    }, [productId])

    return(
        <>
          <div>
            < ItemDetail product={product}/>
          </div>
        </>
    );
}

export default ItemDetailContainer