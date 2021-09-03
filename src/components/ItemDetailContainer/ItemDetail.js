import React from 'react';
import { Card } from 'semantic-ui-react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({dataItems}) => {
    return <>
        <div>
            <div>
                <Card>
                    <Card.Content>
                        <Card.Header><img src={dataItems.img} width="250px" alt="food"/></Card.Header>
                        <Card.Header>{dataItems.name}</Card.Header>
                        <Card.Description>{dataItems.ingredients}</Card.Description>
                        <Card.Description>{dataItems.pap}</Card.Description>
                    </Card.Content>
                </Card>
            </div>
            <ItemCount stock ="5" initial ="1"/>
        </div>
    </>
};

export default ItemDetail;