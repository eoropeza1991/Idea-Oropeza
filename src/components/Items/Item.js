import React, {} from 'react';
import { Card, ListGroup, ListGroupItem , Button, Row, Col, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import ItemCount from './ItemCount';


const Item = ({id, title, url, place, price}) => { 

return (
       <Card>
      <Card.Img variant="top" src={url} /> 
      <Card.Body>
        <Link to={`/item/${id}`} >
        <Card.Title> {title}</Card.Title>
        </Link>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem > {place}</ListGroupItem>
        <ListGroupItem > {price}</ListGroupItem>
      </ListGroup>
      <Card.Body>
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
      </Card.Body>
      </Card>

  )
  
}



export default Item