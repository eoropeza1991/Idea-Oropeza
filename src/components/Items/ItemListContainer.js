import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { itemsCollection } from "../firebase/index";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const {categoryName} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
           let collection = itemsCollection;
           if(categoryName) collection = itemsCollection.where("category", "==", categoryName);
           const response = await collection.get();
           setItems(response.docs.map(item => ({ id: item.id, ...item.data() })))
        })();
    }, [categoryName])

     return (
        <ItemList items={items} />
        
        )
        }
        
export default ItemListContainer


