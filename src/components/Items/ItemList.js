import React, { } from 'react'
import {Col, Row} from 'react-bootstrap'
import Item from './Item'



function ItemList ({items}) {

const itemsLists = items.map(item => <Col> <Item key={item.id} item={item} /> <br></br></Col>)

	return (
<Row xs={1} md={3} xl={5} className="g-4">
            {itemsLists}
</Row> 
	)
}

export default ItemList



