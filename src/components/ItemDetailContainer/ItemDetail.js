import React from 'react';
import { Card } from 'semantic-ui-react';


const ItemDetail = ({data}) => {
    return (
        <div>
            <div>
            <Card>
            <Card.Content>
                <Card.Header><img src={data.img} width="250px" alt="{food image}"/></Card.Header>
                <Card.Header>{data.name}</Card.Header>
                <Card.Description>{data.ingredients}</Card.Description>
                <Card.Description>{data.pap}</Card.Description>
            </Card.Content>
            
        </Card>
    </div>
        </div>
    )
}

export default ItemDetail;