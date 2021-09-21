import React from 'react'
import { Card } from 'semantic-ui-react';

const PicadasCard = ({propPicadas}) => {
    return (
        <div>
            <Card>
            <Card.Content>
            <Card.Header><img src={propPicadas.img} width="250px" alt="food"/></Card.Header>
                <Card.Header>{propPicadas.name}</Card.Header>
                <Card.Description>{propPicadas.desc}</Card.Description>
                <Card.Description>{propPicadas.price}</Card.Description>
            </Card.Content>
        </Card>
        </div>
    )
}

export default PicadasCard;