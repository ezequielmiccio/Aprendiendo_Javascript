import CartWidge from '../CartWidge/CartWidge';
import './NavBar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
        <nav id="menu">

            <Link to = './'>
                <h2>KONGSTORE</h2>
            </Link>
    
            <input type="search" class="search" placeholder="¿Qué estás buscando?"/>
    
            <ul>
                <CartWidge/>
            </ul>

        </nav>
    );

}

export default NavBar;