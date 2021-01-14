const calcSum = number => {

  let currentSum = 0;
  let isFlagged = false;

  if (typeof number !== 'number' || number === Infinity || isNaN(number)) {
    currentSum += 0;
    isFlagged = true;
  } else if (isFlagged) {
    currentSum += 0;
  } else {
    currentSum += number;
  }

  const calcAddSum = value => {

    if (typeof value !== 'number' || value === Infinity || isNaN(value)) {
      currentSum += 0;
      isFlagged = true;
    } else if (isFlagged) {
      currentSum += 0;
    } else {
      currentSum += value;
    }
    
    return calcAddSum;
  }

  calcAddSum[Symbol.toPrimitive] = function(hint) {
    return hint === 'string' ? currentSum : 0;
  }

  return calcAddSum;
}
