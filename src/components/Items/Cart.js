import React from 'react'
import {Redirect, Link} from 'react-router-dom';
import {Card, Button, Spinner, Row, ListGroup, ListGroupItem, Badge} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext';

const Cart = () => {
    const {cart, clearCart, providerLoading, removeItem} = useCartContext();

    if(providerLoading) return <Spinner animation="grow" />

    if(!cart.length) return <Redirect to='/' />;

    return(
        <div>
          <br></br>
          <ListGroup>
          <Row className="justify-content-md-center">
            {cart.map((item) => (
                 <Card border="light" style={{ width: '25rem' }}>
                 <ListGroupItem><Card.Header>{item.title}</Card.Header></ListGroupItem>
                 <ListGroupItem><Card.Header>Cantidad: {item.quantity}</Card.Header></ListGroupItem>
                 <ListGroupItem><Button variant="dark" onClick={()=>removeItem(item.id)}>Eliminar producto</Button></ListGroupItem>
                 <ListGroupItem>
                   <Card.Title>
                     {item.place}
                 </Card.Title>
                 </ListGroupItem>
                 </Card>
                 ))}
          </Row>
          </ListGroup>
          <br></br>
          <Row className="justify-content-md-center">
          <ListGroup>
          <ListGroup.Item>
          <h3>
          <Badge bg="secondary">
            Total: ${cart.reduce((acc, {quantity, price}) => acc + quantity * price, 0).toFixed(2)}
            </Badge>
          </h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button variant="dark" onClick={clearCart}>Vaciar Carrito</Button>    
          </ListGroup.Item> 
          <ListGroup.Item>
          <Link to="/order">
          <Button variant="secondary" type="submit">Comprar</Button>
          </Link>
          </ListGroup.Item>
          </ListGroup>
          </Row>
        </div>
    )
}

export default Cart