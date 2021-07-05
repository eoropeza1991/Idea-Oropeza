import React, { } from 'react';
import { Card, ListGroup, ListGroupItem , Button} from 'react-bootstrap';

const Item = ({item, key}) => { 
return (

      <th>
      <Card>
      <Card.Img variant="top" src="{item.pictureUrl}" />
      <Card.Body>
        <Card.Title> {item.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem > {item.place}</ListGroupItem>
        <ListGroupItem > {item.price}</ListGroupItem>
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </th>
  )
  
}


export default Item