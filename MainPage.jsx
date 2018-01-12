import React from 'react';
import Left from './components/Left.jsx';
import Right from './components/Right.jsx';

class MainPage extends React.Component {

  initialState() {
    return {items: {}};
  }

  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.resetItems = this.resetItems.bind(this);
    this.state = this.initialState();
  }

  addItem(type) {
    const items = this.state.items;
    const newAmount = items[type] === undefined ? 1 : items[type] + 1;

    const newItem = {};
    newItem[type] = newAmount;

    const newItems = Object.assign({}, items, newItem);

    this.setState(Object.assign({}, this.state, {items: newItems}));
  }

  resetItems() {
    this.setState(this.initialState());
  }


  // TODO: Something else than div for container
  render() {
    return (
      <div id="appContainer">
        <Left 
          addItem={this.addItem}
        />
        <Right 
          items={this.state.items} 
          resetItems={this.resetItems} 
        />
      </div>
    );
  }
}

// TODO: Add PropTypes

export default MainPage;
