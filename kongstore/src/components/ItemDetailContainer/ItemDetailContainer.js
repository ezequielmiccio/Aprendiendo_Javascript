import {useState, useEffect} from 'react';
import { getProductsById } from '../../asyncmok';
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const {product, setProduct} = useState();
    const [loading, setLoading] = useState(true);

    const {productId} = useParams();

    useEffect(() => {
        setLoading(true);
            
            getProductsById(productId).then(prod => {
                setProduct(prod);
                
            }).catch(error => {
                console.log(error)
                
            }).finally(() => {
                setLoading(false);
            })            
            
    }, [productId])

    if(loading)
    {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;