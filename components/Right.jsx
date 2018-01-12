import React from 'react';

import TotalScore from './TotalScore.jsx';
import ItemList from './ItemList.jsx';

const Right = ({items, resetItems}) => {
  return (
    <div className='right'>
      <ItemList
        items={items}
      />

      <TotalScore 
        items={items}
        resetItems={resetItems}
      />
    </div>
  )
}

// TODO: Ask UX: What should scores show when no items picked? And when one of the items are not picked?

export default Right