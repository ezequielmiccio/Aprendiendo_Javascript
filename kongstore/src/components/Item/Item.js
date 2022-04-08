import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({product}) => {

    return(
        <article className='CardItem'>

            <header className='Header'>
                <h2 className='ItemHeader'>
                    {product.name}
                </h2>
            </header>

            <picture>
                <img src={product.img} alt={product.name} className="ItemImg"/>
            </picture>

            <section>
                <p className="info">
                    Precio: ${product.price}
                </p>
            </section>

            <footer className='ItemFooter'>
                <Link to={`/item/${product.id}`} className="Option"> Ver más</Link>
            </footer>

        </article>

    )

}

export default Item;