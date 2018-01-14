import React from 'react';

import {calculateScore, calculateScoreWithoutBonus} from '../service/scoreService.js';

const TotalScore = ({items, resetItems}) => {
  const sum = (a, b) => a + b;

  const total = Object.entries(items)
    .map(([key, value]) => calculateScore(key, value))
    .reduce(sum, 0);

  const totalWithoutBonuses = Object.entries(items)
    .map(([key, value]) => calculateScoreWithoutBonus(key, value))
    .reduce(sum, 0);

  return (
    <div id="totalScore">
      <div className="bonusTotal">
        <p>Bonuses {total - totalWithoutBonuses}</p>
        <p>Total {total}</p>
      </div>
      <div className="controlPanel">
        <button className="button control" href="#" onClick={resetItems}>New game</button>
        <p><a className="button control" href="#/admin">Admin</a></p>
      </div>
    </div>
  );
};

export default TotalScore;
