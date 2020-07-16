// -- tutorial-redux-hooks-typescript -- //
// -- Created by Oleksandr Sulakov, Drishticon, July 16 2020. -- //

import React from 'react';

const CardComponent: React.FC<{ title: string, body: string }> = ({ title, body}) => {
    return (
        <div style={{
            margin: '10px',
            padding: '10px',
            maxWidth: '600px',
            boxShadow: '2px 2px 8px  grey'
        }}>
            <div><h1> { title } </h1></div>
            <div style={{color: 'blue'}}> { body } </div>
        </div>
    )
}

export default CardComponent;