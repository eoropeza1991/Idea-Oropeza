import React, {useState} from 'react';
import {Row, Spinner, ListGroup, ListGroupItem, Form, Col, Button, Table} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext';
import { TextField } from '@material-ui/core';

const FormOrders = (props) => {
    const {cart, providerLoading} = useCartContext();

    const initialStateValues = {
        name: '',
        email: '',
        phone: '',
        date: '',
    };

    const [productItems, setValueproducts] = useState('');

    const [values, setValues] = useState(initialStateValues);

    const handleFormChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    };


    const handleSubmit = (e) => {
        debugger;
        setValueproducts(cart)
        console.log(productItems)
        e.preventDefault();
        props.addNewOrdersClient(values);

    };


    if(providerLoading) return <Spinner animation="grow" />;

    return (
<div>
<Form onSubmit={handleSubmit}>
<br></br>
<Row className="justify-content-md-center">
    <Col xs="auto" lg="3">Completá los campos para finalizar tu compra!</Col>
</Row>
<br></br>
<Col md="auto">
<Row className="justify-content-md-center">
    <Col xs lg="2">
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label >Nombre y Apellido</Form.Label>
    <Form.Control placeholder="Juan Perez" onChange={handleFormChange} name="name" />
    </Form.Group>
</Col>
<Col md="auto">
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="email@email.com" onChange={handleFormChange} name="email" />
    </Form.Group>
</Col>
<Col xs lg="2">
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Teléfono</Form.Label>
    <Form.Control type="number" placeholder="123456789" onChange={handleFormChange} name="phone" />
    </Form.Group>
</Col>
</Row>
</Col>
<br></br>

<Row className="justify-content-md-center">
{cart.map((item) => (
    <Col md="auto">
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
    <th>Nombre</th>
    <th>Cantidad</th>
    <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td >{item.title}</td>
    <td >{item.quantity}</td>
    <td >{item.price}</td>
    </tr>
  </tbody>
</Table>
    </Col>
    ))}
</Row>
<br></br>
<Row className="justify-content-md-center">
    <Col md="auto">
        <ListGroup>
            <Col md="auto">
        <ListGroupItem>
            <h5 fontWeight= "bolder"  > Total: ${cart.reduce((acc, {quantity, price}) => acc + quantity * price, 0).toFixed(2)}</h5> 
        </ListGroupItem>
            </Col>
            <Col md="auto">
        <ListGroupItem>
            <TextField type="date" name="date" onChange={handleFormChange} />
        </ListGroupItem>
        </Col>
        <Col md="auto">
            <Button variant="secondary" type="submit">Confirmar
            </Button>
        </Col>
        </ListGroup>
    </Col>
</Row>
<br></br>
</Form>
</div>
)
}

export default FormOrders