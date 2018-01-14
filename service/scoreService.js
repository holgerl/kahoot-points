
export const points = {
  A: 50,
  B: 30,
  C: 20,
  D: 15,
};

export const bonus = {
  A: [200, 3],
  B: [90, 2],
};

export const calculateScore = (item, amount) => {
  if (bonus[item] === undefined) {
    return points[item] * amount;
  }

  const multiples = bonus[item][1];
  const bonusScore = bonus[item][0];

  const bonuses = Math.floor(amount / multiples);

  const rest = amount % multiples;

  return bonusScore * bonuses + rest * points[item];
};

export const calculateScoreWithoutBonus = (item, amount) =>
  points[item] * amount;
