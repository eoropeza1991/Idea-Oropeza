import React from 'react'
import {Redirect} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext';

const Cart = () => {
    const {cart, clearCart} = useCartContext();

    if(!cart.length) return <Redirect to='/' />;

    return(
        <div>
            {cart.map((item) => (
                 <Card border="light" style={{ width: '18rem' }}>
                 <Card.Header>{item.title} - {item.quantity}</Card.Header>
                 <Card.Body>
                   <Card.Title>{item.price}</Card.Title>
                   <Card.Text>
                     {item.place}
                   </Card.Text>
                 </Card.Body>
                 <Card.Body>
                 <Button variant="secondary" onClick={clearCart}>Vaciar Carrito</Button>
                 </Card.Body>
               </Card>
            ))}
        </div>
    )
}

export default Cart