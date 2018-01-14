import React from 'react';

import TotalScore from './TotalScore.jsx';
import ItemList from './ItemList.jsx';

const Right = ({items, resetItems}) => (
  <div className="right">
    <ItemList
      items={items}
    />

    <TotalScore
      items={items}
      resetItems={resetItems}
    />
  </div>
);

export default Right;
