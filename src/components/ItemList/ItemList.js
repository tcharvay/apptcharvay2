import './ItemList.css'
import Item from "../Item/Item"


export const ItemList = ( { products } )=>{
    return(
        <div className = "products">
            {products.map((product)=>(
                <Item product = {product} key = {product.id}/>
            ))}
        </div>
    );
};


