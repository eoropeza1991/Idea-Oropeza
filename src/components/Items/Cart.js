import React from 'react'
import {Redirect, Link} from 'react-router-dom';
import {Card, Button, Spinner, Row, ListGroup, ListGroupItem} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext';

const Cart = () => {
    const {cart, clearCart, providerLoading, removeItem} = useCartContext();

    if(providerLoading) return <Spinner animation="grow" />

    if(!cart.length) return <Redirect to='/' />;

    return(
        <div>
          <Row className="justify-content-md-center">
            {cart.map((item) => (
                 <Card border="light" style={{ width: '25rem' }}>
                 <Card.Header>{item.title}</Card.Header>
                 <Card.Header>Cantidad: {item.quantity}</Card.Header>
                 <Button variant="dark" onClick={()=>removeItem(item.id)}>Eliminar producto</Button>
                 <Card.Body>
                   <Card.Title>${item.price}</Card.Title>
                   <Card.Text>
                     {item.place}
                   </Card.Text>
                 </Card.Body>
                 </Card>
                 ))}
          </Row>
          <br></br>
          <Row className="justify-content-md-center">
                 <ListGroup>
                 <ListGroupItem>
                  <h5 fontWeight= "bolder"> Total: ${cart.reduce((acc, {quantity, price}) => acc + quantity * price, 0).toFixed(2)}</h5> 
                   </ListGroupItem>
                 <Button variant="secondary" onClick={clearCart}>Vaciar Carrito</Button>
                 </ListGroup>
          </Row>
          <br></br>
          <Row className="justify-content-md-center">
          <Link to="/order">
          <Button variant="secondary" type="submit">Comprar</Button>
          </Link>
          </Row>
        </div>
    )
}

export default Cart