// -- tutorial-redux-hooks-typescript -- //
// -- Created by Oleksandr Sulakov, Drishticon, July 16 2020. -- //

import React from 'react';
import { ICardComponent } from '../store/card/types';

const CardComponent: React.FC<ICardComponent> = ({card, deleteCard}) => {
    const id = card.id;
    const title = card.title;
    const body = card.body;

    const handleDeleteCard = () => {
        deleteCard(id)
    }

    return (
        <div style={{
            margin: '10px',
            padding: '10px',
            maxWidth: '600px',
            boxShadow: '2px 2px 8px  grey'
        }}>
            <div><h1> { `${id}: ${title}` } </h1></div>
            <div style={{color: 'blue'}}> { body } </div>
            <div><button onClick={handleDeleteCard}>Delete</button></div>
        </div>
    )
}

export default CardComponent;