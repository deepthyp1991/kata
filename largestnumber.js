const sumLargestNumbers = function(data){
  const num = data.sort((a,b) => b - a)
  return num[0] + num[1]
  }
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


