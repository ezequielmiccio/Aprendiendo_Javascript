import CartWidge from './CartWidge/CartWidge';
import './NavBar.css';

const NavBar = () => {

    return (
            <nav id="menu">
    
                <input type="search" class="search" placeholder="¿Qué estás buscando?"/>
    
                <ul>
                    <CartWidge/>
                </ul>
            </nav>
      );

}

export default NavBar