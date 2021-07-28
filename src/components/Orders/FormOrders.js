import React, { useState } from 'react';
import {Row, Card, Spinner, ListGroup, ListGroupItem, Form, Col, Button} from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext';
import { TextField } from '@material-ui/core';
import { itemsCollection2 } from '../firebase/index';

const FormOrders = ({addOrders}) => {
    const {cart, providerLoading} = useCartContext();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [total, setTotal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        itemsCollection2.doc().add({
            name: name,
            email: email,
            phone: phone,
            id: id,
            title: title,
            price: price,
            date: date,
            total: total,
        })
        .then(() => {
            alert("datos enviados!")
        })
        .catch((error) => {
            alert(error.mesage);
        });
    
        setName("");
        setEmail("");
        setPhone("");
        setId("");
        setTitle("");
        setPrice("");
        setDate("");
        setTotal("");
    };

    if(providerLoading) return <Spinner animation="grow" />;

    return (
<div>
<br></br>
<Row className="justify-content-md-center">
    <Col xs="auto" lg="3">Completá los campos para finalizar tu compra!</Col>
</Row>
<br></br>
<Col md="auto">
<Form onSubmit={handleSubmit}>
<Row className="justify-content-md-center">
    <Col xs lg="2">
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label >Nombre y Apellido</Form.Label>
    <Form.Control placeholder="Juan Perez" value={name} onChange={(e) => setName(e.target.value)}/>
    </Form.Group>
</Col>
<Col md="auto">
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
    </Form.Group>
</Col>
<Col xs lg="2">
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Teléfono</Form.Label>
    <Form.Control type="number" placeholder="123456789"  value={phone} onChange={(e) => setPhone(e.target.value)} />
    </Form.Group>
</Col>
</Row>
</Form>
</Col>
<br></br>

<Row className="justify-content-md-center">
            {cart.map((item) => (
    <Col md="auto" >
        <Card border="light" style={{ width: '25rem' }} >
            <Col><Card.Header  value={title} onChange={(e) => setTitle(e.target.value)}>{item.title}</Card.Header></Col>
            <Col><Card.Header>Cantidad: {item.quantity}</Card.Header></Col>
            <Col><Card.Body>
            <Card.Title  value={price} onChange={(e) => setPrice(e.target.value)}>${item.price}</Card.Title>
            <Card.Text  value={id} onChange={(e) => setId(e.target.value)}>
                Código de producto:  {item.id}
            </Card.Text>
            </Card.Body></Col>
        </Card>
    </Col>
    ))}
</Row>
<br></br>
<Row className="justify-content-md-center">
    <Col md="auto">
        <ListGroup>
            <Col md="auto">
        <ListGroupItem>
            <h5 fontWeight= "bolder"  value={total} onChange={(e) => setTotal(e.target.value)}> Total: ${cart.reduce((acc, {quantity, price}) => acc + quantity * price, 0).toFixed(2)}</h5> 
        </ListGroupItem>
            </Col>
            <Col md="auto">
        <ListGroupItem>
        <Form>
            <TextField type="date"  value={date} onChange={(e) => setDate(e.target.value)} />
        </Form>
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
</div>
)
}

export default FormOrders