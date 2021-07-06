import React, {useState } from 'react'
import { Button, ButtonGroup, ButtonToolbar, InputGroup, FormControl} from 'react-bootstrap'


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

<ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
<InputGroup>
    <FormControl
      placeholder={numero}
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
    <Button variant="dark" onClick={handleIncrement}>+</Button>
    <Button variant="dark" onClick={handleDecrement}>-</Button>
    </InputGroup.Append>
  </InputGroup>
    <ButtonGroup>
    </ButtonGroup>
  </ButtonToolbar>

</div>
)

}

export default ItemCount