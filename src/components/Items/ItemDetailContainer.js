import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {Spinner}  from 'react-bootstrap'

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const {data} = await axios.get("https://api.mocki.io/v2/58fec3dd")
            const foundItem = data.find(item=>item.id === +id);
            setItem(foundItem);
            setLoading(false);
        })();
   }, [id]);

if (loading) return <Spinner animation="grow" />

    return (
        <div>
            <ItemDetail {... item} /> 
        </div>
    )
}

export default ItemDetailContainer