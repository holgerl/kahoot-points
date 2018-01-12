import React from 'react';

const Left = ({addItem}) => {
  return (
    <div className='left'>
      <h1>Kahoot! Points</h1>
      <div>
        <a href="#" className="button arcade" onClick={() => addItem("A")}>A</a>
        <a href="#" className="button arcade" onClick={() => addItem("B")}>B</a>
        <a href="#" className="button arcade" onClick={() => addItem("C")}>C</a>
      </div>
    </div>
  )
}

// TODO: call it something else than left and right

export default Left