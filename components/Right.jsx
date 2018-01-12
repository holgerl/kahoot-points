import React from 'react';
import {calculateScore, calculateScoreWithoutBonus} from '../service/scoreService.js'

const itemRows = (items) => {
  const keys = Object.keys(items);

  keys.sort();
  
  return keys.map((key) => {
    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{items[key]}</td>
        <td>{calculateScore(key, items[key])}</td>
      </tr>
    );
  });
};

const Right = ({items, resetItems}) => {

  const sum = (a, b) => a + b;

  const total = Object.entries(items)
    .map(([key, value]) => calculateScore(key, value))
    .reduce(sum, 0);

  const totalWithoutBonuses = Object.entries(items)
    .map(([key, value]) => calculateScoreWithoutBonus(key, value))
    .reduce(sum, 0);

  return (
    <div className='right'>
      <div id="items">
        <h1>Player items</h1>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {itemRows(items)}
          </tbody>
        </table>
      </div>

      <div id="totalScore">
        <h2>Bonuses {total - totalWithoutBonuses}</h2>
        <h2>Total {total}</h2>
        <a className="button control" href="#" onClick={resetItems}>New game</a>
        <p><a className="button control" href="#/admin">Admin</a></p>
      </div>
    </div>
  )
}

// TODO: Ask UX: What should scores show when no items picked? And when one of the items are not picked?

export default Right