import React from 'react';
import Delete from './Delete'
// import './Card.css';

function Card (props) {
    return (
        <div className="Card">
            <Delete id={props.id} title={props.title} handleDeleteCard={props.handleDeleteCard}/>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );   
};

export default Card;