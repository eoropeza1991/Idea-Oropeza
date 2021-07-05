import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {ItemsData} from "./ItemsData"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setItems(ItemsData);
        }, 2000)  
  }, []) 



     return (

        <ItemList items={items} />
        
        )
        }

export default ItemListContainer