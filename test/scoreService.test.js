import assert from 'assert';

import {calculateScore, calculateScoreWithoutBonus} from '../service/scoreService.js';

describe('scoreService test', function() {
  it('should calculateScores too low for bonus', function() {
    assert.equal(calculateScore("A", 2), 100);
    assert.equal(calculateScore("B", 1), 30);
    assert.equal(calculateScore("C", 3), 60);
    assert.equal(calculateScore("D", 4), 60);

    assert.equal(calculateScoreWithoutBonus("A", 2), 100);
    assert.equal(calculateScoreWithoutBonus("B", 1), 30);
    assert.equal(calculateScoreWithoutBonus("C", 3), 60);
    assert.equal(calculateScoreWithoutBonus("D", 4), 60);
  });

  it('should calculateScores eligible for bonus', function() {
    assert.equal(calculateScore("A", 3), 200);
    assert.equal(calculateScore("B", 2), 90);
    assert.equal(calculateScore("A", 5), 300);
    assert.equal(calculateScore("B", 3), 120);
    
    assert.equal(calculateScoreWithoutBonus("A", 3), 150);
    assert.equal(calculateScoreWithoutBonus("B", 2), 60);
    assert.equal(calculateScoreWithoutBonus("A", 5), 250);
    assert.equal(calculateScoreWithoutBonus("B", 3), 90);
  });
});