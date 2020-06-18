import React from 'react';
import List from './List'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: this.props.store.lists,
      allCards: this.props.store.allCards
    }
  }  

  handleAddCard = (header) => {
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    
    const newCard = newRandomCard();

    const newLists = this.state.lists.map(item => {
      if (item.header === header) {
        item.cardIds = [...item.cardIds, newCard.id];
        return item;
      }
      return item;
    })

    const newAllCards = {...this.state.allCards, [newCard.id]: newCard}
    
    this.setState({
      lists: newLists,
      allCards: newAllCards
    });

  }

  handleDeleteCard = (id) => {
    const newLists = this.state.lists.map(list => {
      return list = {
      id: list.id,
      header: list.header,
      cardIds: list.cardIds.filter(cardId => cardId !== id)
      }
    });
    const newAllCards = {};

    for (let key in this.state.allCards) {
      if (key !== id) {
        newAllCards[key] = this.state.allCards[key];
      }
    }
    console.log(newLists, newAllCards, id)

    this.setState({
      lists: newLists,
      allCards: newAllCards
    });
  }

  render () {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map((list, i) => {
            console.log(list)
            return <List key={i} header={list.header} cards={list.cardIds.map(card => this.state.allCards[card])} handleAddCard={this.handleAddCard} handleDeleteCard={this.handleDeleteCard}/>        
          })}
        </div>
      </main>
    )
  }
  
}

export default App;