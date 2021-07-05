import React, { } from 'react'
import Item from './Item'


function ItemList ({items}) {

const itemsLists = items.map(item => <Item key={item.id} item={item} />)

	return (
		<div>
			{itemsLists}
		</div>
	)
}

export default ItemList



