import ItemCount from "../ItemCount/ItemCount";
import './Item.css'
const Item = ( {product } )=>{

    const onAdd = (count) => {
        if(count > 1){
            console.log(`Se compraron ${count}`);
        } else {
            console.log(`Se compro ${count}`);
        }
    }
    return(
        <>
           <div className="product">             
                <h3>{ product.name }</h3>
                <img src={ product.img } alt={ product.name }/>
                <h2> USD { product.price }</h2>
                <div className='descrpcionProducto'  >
                    <p>{ product.description }</p>
                    <ItemCount stock={ 5 } initial={ 1 } onAdd={ onAdd }/>
                </div>
           </div>
        </>
    );
};


export default Item