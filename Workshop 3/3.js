//Question 7
function primeInRange(n1, n2) {
    for (let i = n1; i <= n2; i++) {
      if (isPrime(i)) {
        return true;
      }
    }
    return false;
  }
  
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
console.log(primeInRange(62,66));  
console.log(primeInRange(5,15)); 

//Question 8
function leftShift(n,s){
  if(screenLeft >=0)
      return n *(2**s);
  else
  return rightShift(n, -s);
};
function rightShift(n,s){
  return Math.floor(n/(2**s));
};
console.log(leftShift(5,2));
console.log(leftShift(-32,2));
console.log(leftShift(46,6));

//Question 9
function binary(d){
  let bin="";
  let remain;

  while(d > 0){
      remain = d % 2;
      bin += remain;
      d = Math.floor(d / 2);
  }
  return bin;
};
console.log(binary(5));