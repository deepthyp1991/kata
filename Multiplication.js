const multiplicationTable = function(maxValue){
  let table = ''
  for(let i = 1; i <= maxValue; ++i)
  {
    let mTable = 0
    for (let j = i; j <= i * maxValue; j = j + i) { 
     mTable = mTable + i
     table = table + " " + mTable
  }
  table = table + "\n"
  }
return table

}
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));