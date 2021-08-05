import React from 'react';
import FormOrders from './FormOrders'
import { itemsCollection2 } from '../firebase/index';

const Order = () => {


    const addNewOrdersClient = async (purchaseOrders) => {
        await itemsCollection2.doc().set(purchaseOrders)
        console.log('nueva orden')        
    };

    return (
        <div>
            <FormOrders addNewOrdersClient={addNewOrdersClient} />
        </div>
    )
};

export default Order