import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js';

const NavBar = () => {

    return (
      <nav className='NavBar'>
          <div>
              <p> BOARD-SHOP </p>
          </div>
          <div>
            <a href="#" className="NavMenu">Surfboard</a>
            <a href="#" className="NavMenu">Skateboard</a>
            <a href="#" className="NavMenu">Snowboard</a>
          </div>
          <div className='carrito'>
          <a href="#" className="NavMenu">LOGIN</a>
          <CartWidget/>
          </div>  
      </nav>
       
    )
}
  export default NavBar