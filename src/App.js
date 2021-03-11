import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddItemForm from './AddItemForm.js';
import DeleteLastItemButton from './DeleteLastItemButton.js';
import ItemList from './ItemList.js';

class App extends React.Component {
  state = {
    items: [],
  };

  addItem = item => {
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItemForm onAddItem={this.addItem} />
        <DeleteLastItemButton
          onDeleteItem={this.deleteLastItem}
          disabled={this.noItemsFound()} />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
