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

function cumulativeSum(list1) {
  let prev = 0;
  let count = 0;
  const list2 = [];
  for (let i = 0; i < list1.length; i++) {
    list2[count] = prev + list1[i];
    prev = list2[count]; count++;
  }
  return list2;
}
const var3 = cumulativeSum(var2);
console.log('Function 2:');
console.log(var3);

let count2 = 0;
let stk = 0;

function maxPrimeSum(list1) {
  while (stk <= testVar) {
    stk += list1[count2];
    count2++;
  }
  while (!isPrime(stk)){
    count2--;
    stk -= list1[count2];
  }
}

console.log('Function 3:');
maxPrimeSum(var2);
console.log(`[${stk}, ${count2}]`);
