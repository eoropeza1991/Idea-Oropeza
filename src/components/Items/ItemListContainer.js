import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
       (async () => {
           const {data} = await axios.get("https://api.mocki.io/v2/58fec3dd")
           setItems(data);
       })();
  }, []);

     return (
        <ItemList items={items} />
        
        )
        }

export default ItemListContainer