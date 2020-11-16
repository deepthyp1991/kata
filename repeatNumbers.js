const repeatNumbers = function(data) {
  let output = ''
  for (let i = 0; i < data.length; i++){
  let numberToRepeat = data[i][0]
  let repeatTimes = data[i][1]
  for(let j = 0; j < repeatTimes; j++){
    output =  output + numberToRepeat
  }
  if(data.length > 1 && i < data.length - 1){
    output = output + ' , '
  }
}
  return output
}
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));