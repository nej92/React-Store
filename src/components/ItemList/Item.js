import React from 'react';
import { Card } from 'semantic-ui-react';

const ItemCard = ({data}) => {
   return (
    <Card>
        <Card.Content>
            <Card.Header>{data.username}</Card.Header>
            <Card.Description>{data.email}</Card.Description>
        </Card.Content>
    </Card>
    );
};
export default ItemCard;