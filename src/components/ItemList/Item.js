import React from 'react';
import { Card } from 'semantic-ui-react';

const ItemCard = ({data}) => {

   return (
    <div>
        <Card>
            <Card.Content>
                <Card.Header><img src={data.img} width="250px" alt="{food image}"/></Card.Header>
                <Card.Description>{data.name}</Card.Description>
            </Card.Content>
        
        </Card>
    </div>
    );
};
export default ItemCard;