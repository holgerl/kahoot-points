import React from 'react';

const buttonTypes = ["A", "B", "C", "D"];

const makeButtons = (addItem) => {
  return buttonTypes.map((name) => (
    <a key={name} 
      href="#" 
      className="button arcade" 
      onClick={() => addItem(name)}>
        {name}
    </a>
  ))
}

const Left = ({addItem}) => {
  return (
    <div className='left'>
      <h1>Kahoot! Points</h1>
      <div>
        {makeButtons(addItem)}
      </div>
    </div>
  )
}

// TODO: call it something else than left and right

export default Left