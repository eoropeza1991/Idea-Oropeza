import React, {useState } from 'react'
import { Button, ButtonGroup, ButtonToolbar, InputGroup, FormControl} from 'react-bootstrap'


const ItemCount = ({stock, onAdd}) => {
  const [toAdd, setToAdd] = useState(stock ? 1 : 0);
return (
<div>

<ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
<InputGroup>
    <FormControl
      placeholder={toAdd}
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
    <Button variant="dark" onClick={() => setToAdd(toAdd - 1 ? toAdd - 1 : toAdd)}>-</Button>
    <Button variant="dark" onClick={() => setToAdd(toAdd === stock ? toAdd : toAdd + 1)}>+</Button>
    <Button variant="dark" onClick={() => onAdd(toAdd)}>Añadir al carrito</Button>
    </InputGroup.Append>
  </InputGroup>
    <ButtonGroup>
    </ButtonGroup>
  </ButtonToolbar>

</div>
)

}
export default ItemCount