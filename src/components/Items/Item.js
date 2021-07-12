import React, {} from 'react';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from './ItemCount';


const Item = ({product}) => { 

  const {addToCart} = useCartContext();
  const onAdd = qty => addToCart(product, qty);
return (
       <Card>
      <Card.Img variant="top" src={product.url} /> 
      <Card.Body>
        <Link to={`/item/${product.id}`} >
        <Card.Title> {product.title}</Card.Title>
        </Link>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem > {product.place}</ListGroupItem>
        <ListGroupItem > {product.price}</ListGroupItem>
        <ListGroup.Item>
                    Tipo de Negocio: <Link to={`/category/${product.category}`} >{product.type} </Link>               
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
      {product.stock > 0 && <ItemCount onAdd={onAdd} stock={product.stock}/>}
      </Card.Body>
      </Card>

  )
  
}



export default Item