import React from 'react';
import {useState , useEffect} from 'react';
import { getProducts } from '../../asyncmok';
import {useParams} from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    useEffect(() => {

        setLoading(true);

        getProducts(categoryId).then(items => {
            setProducts(items);
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        })

        
        return(() => {
            setProducts([]);
        })

    }, [categoryId])

    return(
        <div className='ItemListContainer'>
            {
                loading ?
                    <h1>
                        Cargando...
                    </h1> :
                products.length ?
                    <ItemList products={products}/> :
                    <h1>No se encontraron productos</h1>
            }

        </div>
    )
    
}

export default ItemListContainer;