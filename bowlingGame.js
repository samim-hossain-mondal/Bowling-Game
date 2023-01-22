const isInvalidCase1 = (rolls) => {
  if (rolls.length > 21 || rolls.length < 12) {
    throw new Error('Invalid Input');
  }
};

const isInvalidCase2 = (rolls, index) => {
  if ((rolls[index] + rolls[index + 1]) > 10) {
    throw new Error('Invalid Input');
  }
};

const caseStrike = (rolls, index) => {
  const score = (10 + rolls[index + 1] + rolls[index + 2]);
  return score;
};

const caseSpare = (rolls, index) => {
  const score = (10 + rolls[index + 2]);
  return score;
};

const caseOpen = (rolls, index) => {
  const score = (rolls[index] + rolls[index + 1]);
  return score;
};

const lastFrame = (rolls, index) => {
  if (index === rolls.length - 3) {
    return true;
  }
};

// Feature 1 --> Calculate Total Score
const calculateTotalScore = (rolls) => {
  isInvalidCase1(rolls);
  let totalScore = 0;
  let isLastFrame = false;
  let index = 0, countFrames = 0;
  while (index < rolls.length) {
    if (rolls[index] === 10) {
      totalScore += caseStrike(rolls, index);
      isLastFrame = lastFrame(rolls, index);
      index += 1;
    }
    else if (rolls[index] + rolls[index + 1] === 10) {
      totalScore += caseSpare(rolls, index);
      isLastFrame = lastFrame(rolls, index);
      index += 2;
    }
    else {
      isInvalidCase2(rolls, index);
      totalScore += caseOpen(rolls, index);
      index += 2;
    }
    countFrames += 1;
    if (isLastFrame === true) {
      break;
    }
  }
  if (countFrames !== 10 || isNaN(totalScore)) {
    throw new Error('Invalid Input');
  }
  return totalScore;
};

// Feature 2 --> Find Best Score in set of Games
const bestScore = (gameArray) => {
  let maxScore = calculateTotalScore(gameArray[0]);
  return gameArray.reduce((acc, cuu) => {
    acc = Math.max(acc, calculateTotalScore(cuu));
    return acc;
  }, maxScore);
};

module.exports = { calculateTotalScore, bestScore };