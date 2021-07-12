import React from 'react'
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {
     const {addToCart} = useCartContext();

     const onAdd = qty => addToCart(product, qty);

    return (
            <Container>
            <Row>
               <Col>
               <Image src={product.url} rounded />
               </Col>
               <Col>
               <ListGroup variant="flush">
               <ListGroup.Item><h1>{product.title}</h1></ListGroup.Item>
               <ListGroup.Item><h2>${product.price}</h2></ListGroup.Item>
               <ListGroup.Item><h5>{product.description}</h5></ListGroup.Item>
               <ListGroup.Item>{product.place}</ListGroup.Item>
               <ListGroup.Item>{product.ubication}</ListGroup.Item>
               <ListGroup.Item>
                    Tipo de Negocio: <Link to={`/category/${product.category}`} >{product.type} </Link>               
               </ListGroup.Item>
               <ListGroup.Item>
                      {product.stock > 0 && <ItemCount onAdd={onAdd} stock={product.stock}/>}
               </ListGroup.Item>
               </ListGroup>
               </Col>
               </Row>
            </Container>
    )
}

export default ItemDetail