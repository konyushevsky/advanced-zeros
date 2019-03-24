module.exports = function getZerosCount(number, base) {
  let zeroCount = 0;
  let exponenta;
  let exponentaRezult = 0;

  function compareWithPrimeNumber(n) {
    if (n == 2) {
      return true;
    }
    for (let i = 2; i < n; i++) {
      if ((n % i) == 0) {
        return false;
      }
    }
    return true;
  }

  function getPrimeDivider(n) {
    let primeNumberArray = [];
    for (let i = 2; i < 256; i++) {
      if (compareWithPrimeNumber(i)) {
        primeNumberArray.push(i);
      }
    }
    let primeNumberArrayLength = primeNumberArray.length;
    primeNumberArray = primeNumberArray.reverse();
    for (let i = 0; i < primeNumberArrayLength; i++) {
      if ((n % primeNumberArray[i]) == 0) {
        return primeNumberArray[i];
      }
    }
  }

  if (compareWithPrimeNumber(base)) {
    exponenta = base;
  } else {
    exponenta = getPrimeDivider(base);
  }
  for (let i = 1; exponentaRezult < number; i++) {
    exponentaRezult = Math.pow(exponenta, i);
    zeroCount += Math.floor(number / exponentaRezult);
  }
  return zeroCount;
}
