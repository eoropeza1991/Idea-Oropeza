import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';
import {Spinner}  from 'react-bootstrap';
import { itemsCollection } from '../firebase/index';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await itemsCollection.doc(id).get();
            setItem({id: response.id, ...response.data()});
            setLoading(false);
        })()
   }, [id]);

if (loading) return <Spinner animation="grow" />

    return (
        <div>
            <ItemDetail product={item} /> 
        </div>
    )
}

export default ItemDetailContainer