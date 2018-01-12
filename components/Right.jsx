import React from 'react';

const Right = ({items, resetItems}) => {
  return (
    <div className='right'>
      <div id="items">
        <h1>Player items</h1>
        <p>A: {items.A}</p>
        <p>B: {items.B}</p>
        <p>C: {items.C}</p>
      </div>
      <div id="totalScore">
        <h2>Total score</h2>
        <a className="button control" href="#" onClick={resetItems}>New game</a>
        <p><a className="button control" href="#/admin">Admin</a></p>
      </div>
    </div>
  )
}

export default Right