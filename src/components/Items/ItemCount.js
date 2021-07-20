import React, {useState } from 'react'
import { Button, ButtonGroup, InputGroup, FormControl} from 'react-bootstrap'


const ItemCount = ({stock, onAdd}) => {
  const [toAdd, setToAdd] = useState(stock ? 1 : 0);
return (
<div>


<InputGroup>
    <FormControl
      placeholder={toAdd}
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
    <ButtonGroup>
    <Button variant="outline-dark" onClick={() => setToAdd(toAdd - 1 ? toAdd - 1 : toAdd)}>-</Button>
    <Button variant="outline-dark" onClick={() => setToAdd(toAdd === stock ? toAdd : toAdd + 1)}>+</Button>
    <Button variant="dark" onClick={() => onAdd(toAdd)}>Añadir al carrito</Button>
    </ButtonGroup>
    </InputGroup.Append>
  </InputGroup>


</div>
)

}
export default ItemCount