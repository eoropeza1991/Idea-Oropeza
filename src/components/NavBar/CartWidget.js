import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';

class CartWidget extends Component {
	render() {
		return (
<Button variant="dark"><FontAwesomeIcon icon={faCartPlus}/></Button>
)
}
}

export default CartWidget;