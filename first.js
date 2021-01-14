const calcSumFromFibonacci = (from, to) => {

  if (typeof from !== 'number' || typeof to !== 'number' 
    || from === Infinity || to === Infinity 
    || isNaN(from) || isNaN(to)) {
    throw new Error('1 or 2 parameters are incorrect, only numbers required')
  } else if (from < 0 || to < from) {
    throw new Error('\'from\' must be more than 0, \'to\' must be more than \'from\'')
  }

  let fibCurrent = 0;
  let fibNext = 1;
  let sum = 0;

  while (fibCurrent <= to) {
      if (fibCurrent >= from) {
          sum += fibCurrent;
      }
      let temp = fibNext;
      fibNext = fibCurrent + fibNext;
      fibCurrent = temp;
  }

  return sum;
}
