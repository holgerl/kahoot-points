import React from 'react';
import Left from './components/Left.jsx';
import Right from './components/Right.jsx';

const initialState = () => ({items: {}});

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.resetItems = this.resetItems.bind(this);
    this.state = initialState();
  }

  addItem(type) {
    const {items} = this.state;
    const newAmount = items[type] === undefined ? 1 : items[type] + 1;

    const newItem = {};
    newItem[type] = newAmount;

    const newItems = Object.assign({}, items, newItem);

    this.setState(Object.assign({}, this.state, {items: newItems}));
  }

  resetItems() {
    this.setState(initialState());
  }


  // TODO: Something else than div for container
  render() {
    return (
      <div className="appContainer">
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

export default MainPage;
