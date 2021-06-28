import React, { useEffect, useState} from 'react';
import { Card, ListGroup, ListGroupItem , Button} from 'react-bootstrap';
import { ItemListContainer } from './ItemListContainer';

export default function Item () {

  const [productos, setProductos] = useState([])

   useEffect(() => {
         setTimeout(() =>{
           setProductos(ItemListContainer);
           console.log(productos);
         },2000);
   });


return (
      <div>
  {productos.map(function(producto) {
        return(
      <th>
      <Card>
      <Card.Img variant="top" src="" id="pictureUrl"/>
      <Card.Body>
        <Card.Title id='title'> {producto.title} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem >{producto.price} </ListGroupItem>
        <ListGroupItem >{producto.place} </ListGroupItem>
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </th>)
    })}
    
       </div>
 
  );
}