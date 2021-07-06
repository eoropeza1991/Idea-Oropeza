import React from 'react'
import { Container, Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({id, title, price, place, url, description, ubication, type, category}) => {
    return (
            <Container>
            <Row>
               <Col>
               <Image src={url} rounded />
               </Col>
               <Col>
               <ListGroup variant="flush">
               <ListGroup.Item><h1>{title}</h1></ListGroup.Item>
               <ListGroup.Item><h2>{price}</h2></ListGroup.Item>
               <ListGroup.Item><h5>{description}</h5></ListGroup.Item>
               <ListGroup.Item>{place}</ListGroup.Item>
               <ListGroup.Item>{ubication}</ListGroup.Item>
               <ListGroup.Item>
                    Tipo de Negocio: <Link to={`/category/${category}`} >{type} </Link>               
               </ListGroup.Item>
               <ListGroup.Item>
               <Container>
                   <Row>
                   <Col> 
                        <ItemCount />
                   </Col>
                   <Col>
                        <Button variant="dark">Comprar</Button>
                   </Col>
                   </Row>
                </Container> 
               </ListGroup.Item>
               </ListGroup>
               </Col>
               </Row>
            </Container>
    )
}

export default ItemDetail