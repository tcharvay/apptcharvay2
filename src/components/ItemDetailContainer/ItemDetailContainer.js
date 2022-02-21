import { useEffect, useState } from "react"
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { getProduct } from '../../asyncmock'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
 
    useEffect(() => {
        getProduct().then(product => {
            setProduct(product);
        });
    }, [])

    return(
        <>
          <div>
            < ItemDetail product={product}/>
          </div>
        </>
    );
}

export default ItemDetailContainer