import React from 'react';

const buttonTypes = ["A", "B", "C", "D"];

const makeButtons = addItem =>
  buttonTypes.map(name => (
    <button
      key={name}
      href="#"
      className="button arcade"
      onClick={() => addItem(name)}
    >
      {name}
    </button>
  ));

const Left = ({addItem}) => (
  <div className="left">
    <h1>Kahoot! Points</h1>
    <h2>Items</h2>
    <div>
      {makeButtons(addItem)}
    </div>
  </div>
);

// TODO: call it something else than left and right

export default Left;
