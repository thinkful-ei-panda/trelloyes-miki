import React from 'react';

function Delete(props) {
  
    return (
        <button onClick={() => props.handleDeleteCard(props.id)}>
            - Delete Card
        </button>
    )
}

export default Delete;