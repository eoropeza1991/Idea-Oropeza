import React, {} from 'react';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from './ItemCount';


const Item = ({item}) => { 

  const {addToCart} = useCartContext();
  const onAdd = qty => addToCart(item, qty);
return (
       <Card>
      <Card.Img variant="top" src={item.url}/> 
      <Card.Body>
        <Link to={`/item/${item.id}`} >
        <Card.Title> {item.title}</Card.Title>
        </Link>
        <Card.Text>
          Comprá tu producto aquí y presentá el ticket en el local para retirarlo. Sin filas y con descuento.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem > {item.place}</ListGroupItem>
        <ListGroupItem > {item.price}</ListGroupItem>
        <ListGroup.Item>
                    Tipo de Negocio: <Link to={`/category/${item.category}`} >{item.type} </Link>               
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
      {item.stock > 0 && <ItemCount onAdd={onAdd} stock={item.stock}/>}
      </Card.Body>
      </Card>
  )
  
}



export default Item