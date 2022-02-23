import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget.js';
import {NavLink} from 'react-router-dom';


const NavBar = () => {

    return (
      <nav className='NavBar'>
          <div>
            <NavLink to = {`/`} className = "BoardShopLogo">BOARD-SHOP</NavLink>
          </div>
          <div>
            <NavLink to={'/category/surf'} className="NavMenu">Surfboard</NavLink>
            <NavLink to={'/category/skate'} className="NavMenu">Skateboard</NavLink>
            <NavLink to={'/category/snow'} className="NavMenu">Snowboard</NavLink>
          </div>
          <div className='carrito'>
          <a href="#" className="NavMenu">LOGIN</a>
          <CartWidget/>
          </div>  
      </nav>
       
    )
}
  export default NavBar