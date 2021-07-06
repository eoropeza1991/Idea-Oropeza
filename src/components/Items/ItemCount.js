import React, {useState } from 'react'
import {Card, Button} from 'react-bootstrap'


function ItemCount () {

const [numero, setNumero] = useState(0);
const handleIncrement = () => {
  setNumero(numero + 1);
};
const handleDecrement = () => {
  setNumero(numero - 1);
};


return (
<div>
<Card.Text>{numero}</Card.Text>
<Button variant="dark" onClick={handleIncrement}>+</Button>
<Button variant="dark" onClick={handleDecrement}>-</Button>
</div>
)

}

export default ItemCount