const testVar = 41;
console.log('test varaible is set to');
console.log(testVar);
function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}

function findPrime(num) {
  const list = [];
  let count = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i) === true) {
      list[count] = i;
      count++;
    }
  }
  return list;
}
console.log('Function 1:');
const var2 = findPrime(testVar);
console.log(var2);