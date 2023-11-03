function calculateTotal(number) {
  let result = 0;
  let index = 0;
  while (number >= index) {
    result += index;
    index++;
    console.log('index=', index);
    console.log('result=', result);
  }
  return result;
}
console.log(calculateTotal(3));
