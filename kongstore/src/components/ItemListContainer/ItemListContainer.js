import React from 'react';
import {useState , useEffect} from 'react';
import { getProducts } from '../../asyncmok';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const fetchProducts = () => {

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
        .then(response => {
            return response.json()
        }).then(res => {
            console.log(res.results);
            setProducts(res.results);
        })

    }

    return(

        <div className="productos">

            <input type="text" onChange={(e) => setSearch(e.target.value)}/>
            <button onClick = {fetchProducts}>Buscar</button>

            <ul>
                {products.map(product => <img key={product.id} src={product.thumbnail} alt="img"/>)}
                {products.map(product => <li key={product.id}>{product.nombre}</li>)}
            </ul>

        
        </div>

    )
    
}

export default ItemListContainer;