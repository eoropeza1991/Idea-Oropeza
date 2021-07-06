import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const {categoryName} = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
       (async () => {
           const {data} = await axios.get("https://api.mocki.io/v2/58fec3dd");
           if (!categoryName) return setItems(data);
           const categoryItems = data.filter(item=>item.category===categoryName);
           setItems(categoryItems);
       })();
  }, [categoryName]);

     return (
        <ItemList items={items} />
        
        )
        }
        
export default ItemListContainer


