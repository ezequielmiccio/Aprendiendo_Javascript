import CartWidge from '../CartWidge/CartWidge';
import './NavBar.css';

const NavBar = ({logo}) => {

    return (
        <nav id="menu">

            <h2 className='logoStyle'>KONGSTORE</h2>
    
            <input type="search" class="search" placeholder="¿Qué estás buscando?"/>
    
            <ul>
                <CartWidge/>
            </ul>

        </nav>
    );

}

export default NavBar;