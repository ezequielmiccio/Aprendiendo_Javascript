import React from 'react';
import {useState , useEffect} from 'react';
import { getProducts } from '../../asyncmok';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response);
        });
    }, [])

    return(

        <div className='productos'>
            <ul>
                {products.map(product => <li key={product.id}>{product.nombre}</li>)}
            </ul>

        </div>

    )
    
}

export default ItemListContainer;