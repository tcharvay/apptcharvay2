import React from "react";
import './ItemCount.css';
import {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrement = () => {
        if(count > 1){
            setCount(count - 1);
        }
      }
    const increment = () => {
        if(count < stock){
            setCount(count + 1);
    }
  }
  return(
    <>
    <div className="botonContador">
        <p>Cantidad: </p>   
        <button className="botonModificarCantidad" onClick={decrement}> - </button>
        <label>{count}</label>
    <button className="botonModificarCantidad" onClick={increment}> + </button>
    </div>
        <button className="botonComprar" onClick={() => onAdd(count)}>Comprar ahora</button>
    </>
  );
 }

export default ItemCount;