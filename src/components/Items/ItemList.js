import React, { } from 'react'
import {CardDeck} from 'react-bootstrap'
import Item from './Item'



function ItemList ({items}) {

const itemsLists = items.map(item => <Item key={item.id} { ... item} />)

	return (
		<CardDeck>
            {itemsLists}
		</CardDeck>
	)
}

export default ItemList



