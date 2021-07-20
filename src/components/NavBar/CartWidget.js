import React, {  } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {
	const {productsInCart} = useCartContext();

		return (
<Button variant="dark">  
	<FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> {productsInCart}
</Button>


)
}


export default CartWidget;