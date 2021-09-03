import React from 'react';
import { Card } from 'semantic-ui-react';

const Item = ({propData}) => {

   return (
    <div>
        <Card>
            <Card.Content>
                <Card.Header><img src={propData.img} width="250px" alt="food"/></Card.Header>
                <Card.Description>{propData.name}</Card.Description>
            </Card.Content>
        
        </Card>
    </div>
    );
};

export default Item;