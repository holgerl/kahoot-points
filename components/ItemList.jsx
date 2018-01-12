import React from 'react';

import {calculateScore} from '../service/scoreService.js'

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

const ItemList = ({items, resetItems}) => {
  return (
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
  )
}

// TODO: Ask UX: What should scores show when no items picked? And when one of the items are not picked?

export default ItemList

