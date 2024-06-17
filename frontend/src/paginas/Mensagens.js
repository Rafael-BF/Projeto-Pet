import React from 'react';
import './css/Mensagens.css'; 
import FormContato from '../componentes/FormContato';

const Mensagens = () => {
    return (
        <div className="contStyled">
            <div className="title">
                <h1>Mensagens</h1>
            </div>
            <FormContato />
        </div>
    )
}

export default Mensagens;
