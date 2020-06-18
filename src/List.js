import React from 'react';
import Card from './Card';
// import './List.css';

function List(props) {
    return (
        <section className="List">
            <header className="List-header">
            <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map((card, i) => <Card key={i} id={card.id} title={card.title} content={card.content} handleDeleteCard={props.handleDeleteCard}/>                    
                )}
                <button type="button" className="List-add-button" onClick={() => props.handleAddCard(props.header)}>
                + Add Random Card
                </button>
            </div>
        </section>
    );
};

export default List;